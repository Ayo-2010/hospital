import { prisma } from '~/server/utils/mock-prisma'

export default defineEventHandler(async (event) => {
  if (event.method === 'GET') {
    const departments = await prisma.department.findMany({
      where: { status: 'ACTIVE' },
      orderBy: { name: 'asc' },
    })
    return { success: true, data: departments }
  }
})