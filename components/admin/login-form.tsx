'use client'

import { FormEvent, useState } from 'react'

export function LoginForm() {
  const [error, setError] = useState('')
  const [busy, setBusy] = useState(false)

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setBusy(true)
    setError('')
    const data = new FormData(event.currentTarget)
    const response = await fetch('/api/admin/login', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ password: data.get('password') }),
    })
    setBusy(false)
    if (response.ok) window.location.reload()
    else setError('Pogrešna lozinka.')
  }

  return (
    <main className="min-h-screen bg-[#24231f] px-5 py-16 text-[#f5f0e6]">
      <div className="mx-auto mt-[10vh] max-w-md border border-white/15 bg-white/[.04] p-8 shadow-2xl">
        <p className="text-xs font-bold uppercase tracking-[.22em] text-white/55">Restoran Mašić</p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight">Studio za uređivanje</h1>
        <p className="mt-3 leading-7 text-white/65">Prijavite se kako biste uređivali hrvatsku i englesku verziju stranice.</p>
        <form onSubmit={submit} className="mt-8 space-y-4">
          <label className="block text-sm font-semibold" htmlFor="password">Administratorska lozinka</label>
          <input id="password" name="password" type="password" required autoFocus className="h-12 w-full border border-white/20 bg-black/20 px-4 outline-none focus:border-[#c97862]" />
          {error && <p className="text-sm text-[#ff9d89]">{error}</p>}
          <button disabled={busy} className="h-12 w-full bg-[#9a4937] text-sm font-bold uppercase tracking-[.15em] transition hover:bg-[#b45a44] disabled:opacity-50">{busy ? 'Prijava…' : 'Prijavi se'}</button>
        </form>
      </div>
    </main>
  )
}
