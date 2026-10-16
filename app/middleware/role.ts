export default defineNuxtRouteMiddleware((to) => {
  const session = getServerSession(to)
  const allowedRoles = (to.meta.roles as string[]) || []
  if (!allowedRoles.length) return

  if (!session) return navigateTo('/auth/login')
  const userRoles = session.user.roles || []
  const hasAccess = allowedRoles.some((role) => userRoles.includes(role))
  if (!hasAccess) return navigateTo('/')
})
