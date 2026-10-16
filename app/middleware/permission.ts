export default defineNuxtRouteMiddleware((to) => {
  const session = getServerSession(to)
  const requiredPermissions = (to.meta.permissions as string[]) || []
  if (!requiredPermissions.length) return

  if (!session) return navigateTo('/auth/login')
  const userPermissions = session.user.permissions || []
  const hasPermission = requiredPermissions.some((p) => userPermissions.includes(p))
  if (!hasPermission) {
    throw createError({ statusCode: 403, statusMessage: 'Forbidden' })
  }
})
