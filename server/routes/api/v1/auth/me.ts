import { getServerSession } from '~/server/utils/session'

export default defineEventHandler(async (event) => {
  const session = await getServerSession(event)
  
  if (!session?.user) {
    return { success: false, data: null }
  }
  
  return { success: true, data: { user: session.user } }
})