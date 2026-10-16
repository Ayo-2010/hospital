import { prisma } from '~/server/utils/mock-prisma'
import { getServerSession } from '~/server/utils/session'

export default defineEventHandler(async (event) => {
  const session = await getServerSession(event)
  if (!session?.user) {
    throw createError({ statusCode: 401, statusMessage: 'Unauthorized' })
  }

  const doctorId = event.context.params?.doctorId
  if (!doctorId) {
    throw createError({ statusCode: 400, statusMessage: 'Doctor ID required' })
  }

  const appointments = await prisma.appointment.findMany({
    where: { doctorId },
    include: {
      patient: {
        include: {
          user: {
            select: {
              firstName: true,
              lastName: true,
              email: true,
              phone: true,
            },
          },
        },
      },
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
    orderBy: { scheduledAt: 'asc' },
  })

  return { success: true, data: appointments }
})