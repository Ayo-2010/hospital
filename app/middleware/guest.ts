import { getServerSession } from '#server/utils/session'

export default defineNuxtRouteMiddleware((to, from) => {
  const event = to as any
  const session = getServerSession(event)
  if (session?.user) {
    return navigateTo('/')
  }
})
