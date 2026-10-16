import { prisma } from '~/server/utils/mock-prisma'
import { z } from 'zod'
import { requireAuth } from '~/server/utils/session'

export default defineEventHandler(async (event) => {
  const session = await requireAuth(event)
  const id = getRouterParam(event, 'id')
  if (!id) throw createError({ statusCode: 400, statusMessage: 'Patient ID required' })

  const patient = await prisma.patient.findUnique({
    where: { id },
    include: {
      appointments: { take: 10 },
      medicalRecords: { take: 10 },
      prescriptions: { take: 10 },
    },
  })

  if (!patient) {
    throw createError({ statusCode: 404, statusMessage: 'Patient not found' })
  }

  return { success: true, data: patient }
})
