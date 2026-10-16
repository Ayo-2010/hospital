import { prisma } from '~/server/utils/mock-prisma'

export default defineEventHandler(async (event) => {
  const doctors = await prisma.doctor.findMany({
    where: { isActive: true },
    include: {
      user: {
        select: {
          firstName: true,
          lastName: true,
          email: true,
          phone: true,
        },
      },
      department: {
        select: {
          name: true,
          slug: true,
        },
      },
      specializations: {
        include: {
          specialization: true,
        },
      },
    },
    orderBy: { user: { lastName: 'asc' } },
  })

  return { success: true, data: doctors }
})