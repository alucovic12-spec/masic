import { createHmac, timingSafeEqual } from 'node:crypto'
import { cookies } from 'next/headers'

export const ADMIN_COOKIE = 'masic_admin'
const TTL_SECONDS = 60 * 60 * 12

function sign(value: string) {
  const secret = process.env.ADMIN_SESSION_SECRET
  if (!secret) return ''
  return createHmac('sha256', secret).update(value).digest('hex')
}

export function createAdminToken() {
  const expires = String(Math.floor(Date.now() / 1000) + TTL_SECONDS)
  return expires + '.' + sign(expires)
}

export function verifyAdminToken(token?: string) {
  if (!token) return false
  const [expires, signature] = token.split('.')
  if (!expires || !signature || Number(expires) < Math.floor(Date.now() / 1000)) return false
  const expected = sign(expires)
  if (!expected || expected.length !== signature.length) return false
  return timingSafeEqual(Buffer.from(expected), Buffer.from(signature))
}

export async function isAdminRequest() {
  const store = await cookies()
  return verifyAdminToken(store.get(ADMIN_COOKIE)?.value)
}

export function adminConfigured() {
  return Boolean(process.env.ADMIN_PASSWORD && process.env.ADMIN_SESSION_SECRET && process.env.CMS_GITHUB_TOKEN)
}

export const adminCookieOptions = {
  httpOnly: true,
  sameSite: 'strict' as const,
  secure: process.env.NODE_ENV === 'production',
  path: '/',
  maxAge: TTL_SECONDS,
}
