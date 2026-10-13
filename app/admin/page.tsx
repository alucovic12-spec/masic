import { EditorShell } from '@/components/admin/editor-shell'
import { LoginForm } from '@/components/admin/login-form'
import { adminConfigured, isAdminRequest } from '@/lib/admin-auth'

export const dynamic = 'force-dynamic'

export default async function AdminPage() {
  if (!adminConfigured()) {
    return (
      <main className="min-h-screen bg-[#24231f] px-5 py-16 text-[#f5f0e6]">
        <div className="mx-auto max-w-2xl border border-amber-300/25 bg-amber-200/10 p-8">
          <p className="text-xs font-bold uppercase tracking-[.2em] text-amber-200">Potrebna jednokratna postavka</p>
          <h1 className="mt-4 text-4xl font-semibold">Mašić Studio je instaliran.</h1>
          <p className="mt-5 leading-7 text-white/70">U Vercelu treba dodati tri zaštićene varijable: ADMIN_PASSWORD, ADMIN_SESSION_SECRET i CMS_GITHUB_TOKEN. Nakon toga editor je spreman za korištenje.</p>
        </div>
      </main>
    )
  }
  if (!(await isAdminRequest())) return <LoginForm />
  return <EditorShell />
}
