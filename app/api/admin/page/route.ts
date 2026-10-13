import { NextRequest, NextResponse } from 'next/server'
import { isAdminRequest } from '@/lib/admin-auth'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'
const REPO = 'alucovic12-spec/masic'

function localeFrom(request: NextRequest) {
  return request.nextUrl.searchParams.get('locale') === 'en' ? 'en' : 'hr'
}
function branch() {
  return process.env.CMS_BRANCH || process.env.VERCEL_GIT_COMMIT_REF || 'main'
}
function githubHeaders() {
  return { Accept: 'application/vnd.github+json', Authorization: 'Bearer ' + process.env.CMS_GITHUB_TOKEN, 'X-GitHub-Api-Version': '2022-11-28', 'Content-Type': 'application/json' }
}
async function currentFile(locale: string) {
  const path = 'content/editor/home.' + locale + '.json'
  const url = 'https://api.github.com/repos/' + REPO + '/contents/' + path + '?ref=' + encodeURIComponent(branch())
  const response = await fetch(url, { headers: githubHeaders(), cache: 'no-store' })
  if (!response.ok) throw new Error('GitHub read failed: ' + response.status)
  const file = await response.json()
  return { path, sha: file.sha as string, content: Buffer.from(file.content, 'base64').toString('utf8') }
}
export async function GET(request: NextRequest) {
  if (!(await isAdminRequest())) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  try {
    const file = await currentFile(localeFrom(request))
    return new NextResponse(file.content, { headers: { 'content-type': 'application/json', 'cache-control': 'no-store' } })
  } catch (error) {
    return NextResponse.json({ error: error instanceof Error ? error.message : 'Read failed' }, { status: 500 })
  }
}
export async function PUT(request: NextRequest) {
  if (!(await isAdminRequest())) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  try {
    const locale = localeFrom(request)
    const payload = await request.json()
    if (typeof payload.html !== 'string' || typeof payload.css !== 'string') return NextResponse.json({ error: 'Invalid document' }, { status: 400 })
    if (payload.html.length > 400000 || payload.css.length > 250000) return NextResponse.json({ error: 'Document is too large' }, { status: 413 })
    const file = await currentFile(locale)
    const document = JSON.stringify({ version: 1, locale, html: payload.html, css: payload.css }, null, 2)
    const response = await fetch('https://api.github.com/repos/' + REPO + '/contents/' + file.path, {
      method: 'PUT', headers: githubHeaders(),
      body: JSON.stringify({ message: 'content: update ' + locale + ' homepage from Mašić Studio', content: Buffer.from(document).toString('base64'), sha: file.sha, branch: branch() }),
    })
    if (!response.ok) throw new Error('GitHub save failed: ' + response.status + ' ' + (await response.text()))
    return NextResponse.json({ ok: true, deployment: 'Vercel deployment started.' })
  } catch (error) {
    return NextResponse.json({ error: error instanceof Error ? error.message : 'Save failed' }, { status: 500 })
  }
}
