import { prisma } from '~/server/utils/mock-prisma'

export default defineEventHandler(async (event) => {
  if (event.method === 'GET') {
    const doctors = await prisma.doctor.findMany({
      where: { isAvailable: true },
      orderBy: { specialization: 'asc' },
    })
    return { success: true, data: doctors }
  }
})