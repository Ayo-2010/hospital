import { prisma } from '~/server/utils/mock-prisma'
import { getServerSession } from '~/server/utils/session'
import { z } from 'zod'

export default defineEventHandler(async (event) => {
  const session = await getServerSession(event)
  if (!session?.user) {
    throw createError({ statusCode: 401, statusMessage: 'Unauthorized' })
  }

  if (event.method === 'GET') {
    const appointments = await prisma.appointment.findMany({
      where: { patientId: session.user.id },
      include: {
        doctor: {
          include: {
            user: {
              select: {
                firstName: true,
                lastName: true,
              },
            },
            department: true,
          },
        },
        patient: {
          include: {
            user: {
              select: {
                firstName: true,
                lastName: true,
              },
            },
          },
        },
      },
      orderBy: { scheduledAt: 'desc' },
    })

    return { success: true, data: appointments }
  }

  if (event.method === 'POST') {
    const body = await readBody(event)
    const schema = z.object({
      doctorId: z.string(),
      scheduledAt: z.string().datetime(),
      duration: z.number().int().positive().default(30),
      reason: z.string().optional(),
      notes: z.string().optional(),
    })
    const validated = schema.parse(body)

    const patient = await prisma.patient.findUnique({
      where: { userId: session.user.id },
    })

    if (!patient) {
      throw createError({ statusCode: 404, statusMessage: 'Patient profile not found' })
    }

    const appointment = await prisma.appointment.create({
      data: {
        patientId: patient.id,
        doctorId: validated.doctorId,
        scheduledAt: new Date(validated.scheduledAt),
        duration: validated.duration,
        reason: validated.reason,
        notes: validated.notes,
        status: 'PENDING',
      },
      include: {
        doctor: {
          include: {
            user: {
              select: {
                firstName: true,
                lastName: true,
              },
            },
            department: true,
          },
        },
        patient: {
          include: {
            user: {
              select: {
                firstName: true,
                lastName: true,
              },
            },
          },
        },
      },
    })

    return { success: true, data: appointment }
  }
})