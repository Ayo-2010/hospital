import { prisma } from '~/server/utils/mock-prisma'
import { getServerSession } from '~/server/utils/session'

export default defineEventHandler(async (event) => {
  const session = await getServerSession(event)
  if (!session?.user) {
    throw createError({ statusCode: 401, statusMessage: 'Unauthorized' })
  }

  const patients = await prisma.patient.findMany({
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
    orderBy: { user: { lastName: 'asc' } },
  })

  return { success: true, data: patients }
})