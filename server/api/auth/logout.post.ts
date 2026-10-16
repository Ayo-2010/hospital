import { deleteCookie } from 'h3'

export default defineEventHandler(async (event) => {
  deleteCookie(event, 'medcore_session', { path: '/' })
  return { success: true }
})