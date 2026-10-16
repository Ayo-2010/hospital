import { prisma } from '~/server/utils/mock-prisma'
import bcrypt from 'bcryptjs'
import { z } from 'zod'
import { getServerSession, createSession } from '~/server/utils/session'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const schema = z.object({
    email: z.string().email(),
    password: z.string().min(6),
    firstName: z.string().min(1),
    lastName: z.string().min(1),
    phone: z.string().optional(),
    dateOfBirth: z.string().optional(),
    gender: z.enum(['MALE', 'FEMALE', 'OTHER']).optional(),
  })
  const validated = schema.parse(body)

  const existingUser = await prisma.user.findUnique({
    where: { email: validated.email },
  })

  if (existingUser) {
    throw createError({ statusCode: 400, statusMessage: 'Email already registered' })
  }

  const passwordHash = await bcrypt.hash(validated.password, 12)

  const user = await prisma.user.create({
    data: {
      email: validated.email,
      passwordHash,
      firstName: validated.firstName,
      lastName: validated.lastName,
      phone: validated.phone,
      dateOfBirth: validated.dateOfBirth ? new Date(validated.dateOfBirth) : null,
      gender: validated.gender,
      roles: {
        create: {
          role: {
            connectOrCreate: {
              where: { name: 'PATIENT' },
              create: { name: 'PATIENT', description: 'Patient role' },
            },
          },
        },
      },
    },
    include: { roles: { include: { role: true } } },
  })

  const session = await createSession(event, {
    id: user.id,
    email: user.email,
    firstName: user.firstName,
    lastName: user.lastName,
    roles: user.roles.map((ur) => ur.role.name),
    permissions: [],
  })

  return { success: true, data: session }
})