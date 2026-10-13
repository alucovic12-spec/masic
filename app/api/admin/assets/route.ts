import { NextResponse } from 'next/server'
import { isAdminRequest } from '@/lib/admin-auth'

export const runtime = 'nodejs'
const REPO = 'alucovic12-spec/masic'
const ALLOWED = new Set(['image/jpeg', 'image/png', 'image/webp', 'image/gif'])

function branch() {
  if (process.env.CMS_BRANCH) return process.env.CMS_BRANCH
  if (process.env.VERCEL_ENV === 'production') return 'main'
  return process.env.VERCEL_GIT_COMMIT_REF || 'codex/visual-editor'
}
function githubHeaders() {
  return { Accept: 'application/vnd.github+json', Authorization: 'Bearer ' + process.env.CMS_GITHUB_TOKEN, 'X-GitHub-Api-Version': '2022-11-28', 'Content-Type': 'application/json' }
}
export async function POST(request: Request) {
  if (!(await isAdminRequest())) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  const form = await request.formData()
  const file = form.get('file')
  if (!(file instanceof File)) return NextResponse.json({ error: 'Missing file' }, { status: 400 })
  if (!ALLOWED.has(file.type)) return NextResponse.json({ error: 'Unsupported image format' }, { status: 415 })
  if (file.size > 5 * 1024 * 1024) return NextResponse.json({ error: 'Image must be under 5 MB' }, { status: 413 })
  const safeName = file.name.toLowerCase().replace(/[^a-z0-9._-]+/g, '-').replace(/^-+|-+$/g, '')
  const path = 'public/uploads/' + Date.now() + '-' + (safeName || 'image')
  const response = await fetch('https://api.github.com/repos/' + REPO + '/contents/' + path, {
    method: 'PUT', headers: githubHeaders(),
    body: JSON.stringify({ message: 'content: upload image from Mašić Studio', content: Buffer.from(await file.arrayBuffer()).toString('base64'), branch: branch() }),
  })
  if (!response.ok) return NextResponse.json({ error: 'Upload failed: ' + response.status }, { status: 500 })
  return NextResponse.json({ src: '/' + path.replace(/^public\//, '') })
}
