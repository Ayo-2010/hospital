import { prisma } from '~/server/utils/mock-prisma'
import { requireAuth } from '~/server/utils/session'

export default defineEventHandler(async (event) => {
  const session = await requireAuth(event)
  const doctorId = getRouterParam(event, 'doctorId')
  if (!doctorId) throw createError({ statusCode: 400, statusMessage: 'Doctor ID required' })

  const appointments = await prisma.appointment.findMany({
    where: { doctorId, status: { in: ['PENDING', 'CONFIRMED', 'CHECKED_IN'] } },
    include: { patient: true, department: true },
    orderBy: { scheduledStart: 'asc' },
  })

  return { success: true, data: appointments }
})
