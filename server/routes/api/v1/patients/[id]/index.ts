import { prisma } from '~/server/utils/mock-prisma'
import { getServerSession } from '~/server/utils/session'

export default defineEventHandler(async (event) => {
  const session = await getServerSession(event)
  if (!session?.user) {
    throw createError({ statusCode: 401, statusMessage: 'Unauthorized' })
  }

  const id = event.context.params?.id
  if (!id) {
    throw createError({ statusCode: 400, statusMessage: 'Patient ID required' })
  }

  const patient = await prisma.patient.findUnique({
    where: { id },
    include: {
      user: {
        select: {
          firstName: true,
          lastName: true,
          email: true,
          phone: true,
          dateOfBirth: true,
          gender: true,
        },
      },
      appointments: {
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
        },
        orderBy: { scheduledAt: 'desc' },
      },
      medicalRecords: {
        include: {
          doctor: {
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
        orderBy: { createdAt: 'desc' },
      },
    },
  })

  if (!patient) {
    throw createError({ statusCode: 404, statusMessage: 'Patient not found' })
  }

  return { success: true, data: patient }
})