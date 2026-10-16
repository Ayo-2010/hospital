import { prisma } from '~/server/utils/mock-prisma'

export default defineEventHandler(async (event) => {
  const departments = await prisma.department.findMany({
    where: { isActive: true },
    include: {
      _count: {
        select: { doctors: true },
      },
    },
    orderBy: { name: 'asc' },
  })

  return { success: true, data: departments }
})