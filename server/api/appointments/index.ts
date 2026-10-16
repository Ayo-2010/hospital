import { prisma } from '~/server/utils/mock-prisma'
import { z } from 'zod'
import { requireAuth } from '~/server/utils/session'

export default defineEventHandler(async (event) => {
  const session = await requireAuth(event)

  if (event.method === 'GET') {
    const appointments = await prisma.appointment.findMany({
      take: 50,
      orderBy: { scheduledStart: 'desc' },
      include: { patient: true, doctor: true, department: true },
    })
    return { success: true, data: appointments }
  }

  if (event.method === 'POST') {
    const body = await readBody(event)
    const schema = z.object({
      patientId: z.string(),
      doctorId: z.string(),
      departmentId: z.string(),
      appointmentType: z.string(),
      scheduledStart: z.string(),
      scheduledEnd: z.string(),
      reason: z.string().optional(),
    })
    const validated = schema.parse(body)

    const appointment = await prisma.appointment.create({
      data: {
        appointmentNumber: `APT-${Date.now().toString(36).toUpperCase()}`,
        ...validated,
        scheduledStart: new Date(validated.scheduledStart),
        scheduledEnd: new Date(validated.scheduledEnd),
        status: 'PENDING',
      },
    })

    return { success: true, data: appointment }
  }
})
