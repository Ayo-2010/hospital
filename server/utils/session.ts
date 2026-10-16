import type { SessionUser } from '~/app/types'
import { getCookie, setCookie } from 'h3'

export function getServerSession(event: H3Event): { user: SessionUser } | null {
  try {
    const sessionCookie = getCookie(event, 'medcore_session')
    if (!sessionCookie) return null

    const payload = JSON.parse(Buffer.from(sessionCookie.split('.')[1], 'base64').toString()) as { user: SessionUser; exp: number }
    if (payload.exp < Date.now() / 1000) return null

    return { user: payload.user }
  } catch {
    return null
  }
}

export function createSessionToken(payload: { user: SessionUser }): string {
  const header = Buffer.from(JSON.stringify({ alg: 'HS256', typ: 'JWT' })).toString('base64')
  const body = Buffer.from(JSON.stringify({ ...payload, exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24 * 7 })).toString('base64')
  const signature = Buffer.from(`${header}.${body}.signature`).toString('base64')
  return `${header}.${body}.${signature}`
}

export function createSession(event: H3Event, payload: { user: SessionUser }) {
  const token = createSessionToken(payload)
  setCookie(event, 'medcore_session', token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    maxAge: 60 * 60 * 24 * 7,
    path: '/',
  })
  return { success: true, data: { token } }
}

export async function requireAuth(event: H3Event) {
  const session = getServerSession(event)
  if (!session) {
    throw createError({ statusCode: 401, statusMessage: 'Unauthorized' })
  }
  return session
}
