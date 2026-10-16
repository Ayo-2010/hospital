import { prisma } from '~/server/utils/mock-prisma'
import { z } from 'zod'
import { requireAuth } from '~/server/utils/session'

export default defineEventHandler(async (event) => {
  const session = await requireAuth(event)
  const userRoles = session.user.roles || []

  if (event.method === 'GET') {
    const page = getQuery(event).page ? Number(getQuery(event).page) : 1
    const limit = getQuery(event).limit ? Number(getQuery(event).limit) : 20
    const search = getQuery(event).search as string || ''

    const where: any = {}
    if (search) {
      where.OR = [
        { firstName: { contains: search, mode: 'insensitive' } },
        { lastName: { contains: search, mode: 'insensitive' } },
        { patientNumber: { contains: search, mode: 'insensitive' } },
      ]
    }

    const [patients, total] = await Promise.all([
      prisma.patient.findMany({ where, skip: (page - 1) * limit, take: limit }),
      prisma.patient.count({ where }),
    ])

    return {
      success: true,
      data: patients,
      meta: { page, limit, total, totalPages: Math.ceil(total / limit) },
    }
  }

  if (event.method === 'POST') {
    const body = await readBody(event)
    const schema = z.object({
      firstName: z.string().min(2),
      lastName: z.string().min(2),
      dateOfBirth: z.string(),
      gender: z.string(),
      phone: z.string(),
      email: z.string().optional(),
      address: z.string().optional(),
    })
    const validated = schema.parse(body)

    const patient = await prisma.patient.create({
      data: {
        patientNumber: `PAT-${Date.now().toString(36).toUpperCase()}`,
        ...validated,
        dateOfBirth: new Date(validated.dateOfBirth),
        status: 'ACTIVE',
      },
    })

    return { success: true, data: patient }
  }
})
