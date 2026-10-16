import { prisma } from '~/server/utils/mock-prisma'
import bcrypt from 'bcryptjs'
import { z } from 'zod'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const schema = z.object({
    firstName: z.string().min(2),
    lastName: z.string().min(2),
    email: z.string().email(),
    password: z.string().min(6),
  })
  const validated = schema.parse(body)

  const existing = await prisma.user.findUnique({ where: { email: validated.email } })
  if (existing) {
    throw createError({ statusCode: 409, statusMessage: 'Email already registered' })
  }

  const passwordHash = await bcrypt.hash(validated.password, 10)
  const user = await prisma.user.create({
    data: {
      firstName: validated.firstName,
      lastName: validated.lastName,
      email: validated.email,
      passwordHash,
      status: 'ACTIVE',
    },
  })

  const patient = await prisma.patient.create({
    data: {
      patientNumber: `PAT-${Date.now().toString(36).toUpperCase()}`,
      userId: user.id,
      firstName: user.firstName,
      lastName: user.lastName,
      dateOfBirth: new Date(),
      gender: 'UNDISCLOSED',
      phone: '',
      emergencyContactName: '',
      emergencyContactPhone: '',
      emergencyContactRelationship: '',
      address: '',
      city: '',
      state: '',
      country: '',
      status: 'ACTIVE',
    },
  })

  await prisma.userRole.create({
    data: {
      userId: user.id,
      roleId: (await prisma.role.findUnique({ where: { name: 'PATIENT' } }))!.id,
    },
  })

  return { success: true, data: { id: user.id, email: user.email, patientNumber: patient.patientNumber } }
})
