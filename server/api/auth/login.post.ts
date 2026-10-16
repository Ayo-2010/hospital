import { prisma } from '~/server/utils/mock-prisma'
import bcrypt from 'bcryptjs'
import { z } from 'zod'
import { getServerSession, createSession } from '~/server/utils/session'

export default defineEventHandler(async (event) => {
  if (event.method === 'GET') {
    const session = await getServerSession(event)
    if (!session?.user) {
      throw createError({ statusCode: 401, statusMessage: 'Unauthorized' })
    }

    const user = await prisma.user.findUnique({
      where: { id: session.user.id },
      include: {
        roles: { include: { role: true } },
      },
    })

    if (!user) {
      throw createError({ statusCode: 404, statusMessage: 'User not found' })
    }

    return {
      success: true,
      data: {
        id: user.id,
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
        roles: user.roles.map((ur) => ur.role.name),
        permissions: [],
      },
    }
  }

  if (event.method === 'POST') {
    const body = await readBody(event)
    const schema = z.object({
      email: z.string().email(),
      password: z.string().min(6),
    })
    const validated = schema.parse(body)

    const user = await prisma.user.findUnique({
      where: { email: validated.email },
      include: { roles: { include: { role: true } } },
    })

    if (!user) {
      throw createError({ statusCode: 401, statusMessage: 'Invalid credentials' })
    }

    const valid = await bcrypt.compare(validated.password, user.passwordHash)
    if (!valid) {
      throw createError({ statusCode: 401, statusMessage: 'Invalid credentials' })
    }

    const session = await createSession(event, {
      id: user.id,
      email: user.email,
      firstName: user.firstName,
      lastName: user.lastName,
      roles: user.roles.map((ur) => ur.role.name),
      permissions: [],
    })

    return { success: true, data: session }
  }
})
