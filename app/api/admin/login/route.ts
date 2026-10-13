import { timingSafeEqual } from 'node:crypto'
import { NextResponse } from 'next/server'
import { ADMIN_COOKIE, adminCookieOptions, createAdminToken } from '@/lib/admin-auth'

export const runtime = 'nodejs'

function equal(a: string, b: string) {
  const left = Buffer.from(a)
  const right = Buffer.from(b)
  return left.length === right.length && timingSafeEqual(left, right)
}

export async function POST(request: Request) {
  const expected = process.env.ADMIN_PASSWORD
  if (!expected) return NextResponse.json({ error: 'Admin nije konfiguriran.' }, { status: 503 })
  const body = await request.json().catch(() => ({}))
  if (typeof body.password !== 'string' || !equal(body.password, expected)) return NextResponse.json({ error: 'Neispravna prijava.' }, { status: 401 })
  const response = NextResponse.json({ ok: true })
  response.cookies.set(ADMIN_COOKIE, createAdminToken(), adminCookieOptions)
  return response
}
