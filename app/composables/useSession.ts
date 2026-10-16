export interface SessionUser {
  id: string
  email: string
  firstName: string
  lastName: string
  roles: string[]
  permissions: string[]
}

export interface Session {
  user: SessionUser
}

export const useSession = () => {
  const session = useState<Session | null>('session', () => null)
  const loading = useState<boolean>('session-loading', () => true)

  const fetchSession = async () => {
    try {
      const data = await $fetch<{ success: boolean; data: Session }>('/api/v1/auth/me', {
        headers: useRequestHeaders(['cookie']),
      })
      if (data.success) {
        session.value = data.data
      }
    } catch {
      session.value = null
    } finally {
      loading.value = false
    }
  }

  const clearSession = () => {
    session.value = null
    loading.value = false
  }

  return {
    session,
    loading,
    fetchSession,
    clearSession,
  }
}
