import { clearSession } from '~/server/utils/session'

export default defineEventHandler(async (event) => {
  await clearSession(event)
  return { success: true }
})