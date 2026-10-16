import { getServerSession } from '~/server/utils/session'

const publicPaths = [
  '/api/auth/login',
  '/api/auth/register',
]

export default defineEventHandler(async (event) => {
  const path = event.node.req.url?.split('?')[0] || ''
  
  if (publicPaths.some(p => path.startsWith(p))) {
    return
  }

  const requiredPermission = getRouterParam(event, 'permission')
  if (!requiredPermission) {
    return
  }

  const session = await getServerSession(event)
  if (!session?.user) {
    throw createError({ statusCode: 401, statusMessage: 'Unauthorized' })
  }

  const userRoles = session.user.roles || []
  const roleNames = Array.isArray(userRoles) ? userRoles : [userRoles]

  if (roleNames.includes('SUPER_ADMIN')) {
    return
  }

  const userPermissions = (session.user.permissions as string[]) || []
  if (!userPermissions.includes(requiredPermission)) {
    throw createError({ statusCode: 403, statusMessage: 'Forbidden' })
  }
})
