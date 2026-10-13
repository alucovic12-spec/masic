'use client'

import { ChangeEvent, useEffect, useRef, useState } from 'react'

declare global {
  interface Window { grapesjs?: { init: (config: Record<string, unknown>) => any } }
}
const SCRIPT = 'https://unpkg.com/grapesjs@0.23.6/dist/grapes.min.js'

function loadGrapes() {
  if (window.grapesjs) return Promise.resolve()
  return new Promise<void>((resolve, reject) => {
    const existing = document.querySelector('script[data-grapesjs]')
    if (existing) {
      existing.addEventListener('load', () => resolve(), { once: true })
      existing.addEventListener('error', () => reject(new Error('GrapesJS se nije učitao.')), { once: true })
      return
    }
    const script = document.createElement('script')
    script.src = SCRIPT
    script.dataset.grapesjs = 'true'
    script.onload = () => resolve()
    script.onerror = () => reject(new Error('GrapesJS se nije učitao.'))
    document.head.appendChild(script)
  })
}

export function EditorShell() {
  const editorRef = useRef<any>(null)
  const fileRef = useRef<HTMLInputElement>(null)
  const moveCleanupRef = useRef<null | (() => void)>(null)
  const [moveMode, setMoveMode] = useState(false)
  const [locale, setLocale] = useState<'hr' | 'en'>('hr')
  const [dirty, setDirty] = useState(false)
  const [status, setStatus] = useState('Učitavanje editora…')
  const [busy, setBusy] = useState(false)

  useEffect(() => {
    let active = true
    async function start() {
      setStatus('Učitavanje ' + locale.toUpperCase() + ' stranice…')
      setDirty(false)
      editorRef.current?.destroy()
      editorRef.current = null
      await loadGrapes()
      const response = await fetch('/api/admin/page?locale=' + locale, { cache: 'no-store' })
      const data = await response.json().catch(() => ({}))
      if (!response.ok) throw new Error(data.error || 'Sadržaj se ne može učitati.')

      if (!active || !window.grapesjs) return
      const editor = window.grapesjs.init({
        container: '#gjs', height: 'calc(100vh - 64px)', width: 'auto', storageManager: false, noticeOnUnload: false,
        components: data.html, style: data.css,
        canvas: { styles: ['https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;500;600;700;800&display=swap'] },
        deviceManager: { devices: [{ id: 'desktop', name: 'Desktop', width: '' }, { id: 'tablet', name: 'Tablet', width: '820px', widthMedia: '992px' }, { id: 'mobile', name: 'Mobile', width: '390px', widthMedia: '600px' }] },
        styleManager: { sectors: [
          { name: 'Tipografija', open: true, properties: ['font-family', 'font-size', 'font-weight', 'letter-spacing', 'line-height', 'color', 'text-align', 'text-decoration'] },
          { name: 'Veličina i razmak', open: true, properties: ['width', 'height', 'min-height', 'max-width', 'margin', 'padding'] },
          { name: 'Pozicija', open: false, properties: ['display', 'position', 'top', 'right', 'bottom', 'left', 'flex-direction', 'justify-content', 'align-items', 'gap', 'z-index'] },
          { name: 'Pozadina i obrub', open: false, properties: ['background-color', 'background-image', 'background-position', 'background-size', 'border', 'border-radius'] },
          { name: 'Efekti', open: false, properties: ['opacity', 'box-shadow', 'transform', 'transition'] },
        ] },
      })
      const blocks = editor.BlockManager
      blocks.add('masic-section', { label: 'Sekcija', category: 'Struktura', content: '<section class="masic-section"><div class="masic-shell"><p class="masic-kicker">Nova sekcija</p><h2>Naslov sekcije</h2><p class="masic-body">Dodajte svoj tekst.</p></div></section>' })
      blocks.add('masic-two-columns', { label: '2 stupca', category: 'Struktura', content: '<section class="masic-section"><div class="masic-shell masic-grid"><div class="masic-copy"><h2>Naslov</h2><p class="masic-body">Tekst</p></div><div class="masic-media"><img class="masic-photo masic-photo--landscape" src="/images/masic-stol.webp" alt=""></div></div></section>' })
      blocks.add('heading', { label: 'Naslov', category: 'Sadržaj', content: '<h2>Novi naslov</h2>' })
      blocks.add('text', { label: 'Tekst', category: 'Sadržaj', content: '<p class="masic-body">Novi odlomak teksta.</p>' })
      blocks.add('image', { label: 'Slika', category: 'Sadržaj', content: { type: 'image', src: '/images/masic-stol.webp', style: { width: '100%' } } })
      blocks.add('button', { label: 'Gumb', category: 'Sadržaj', content: '<a class="masic-btn" href="#">Novi gumb</a>' })
      blocks.add('divider', { label: 'Razdjelnik', category: 'Sadržaj', content: '<hr style="border:0;border-top:1px solid rgba(40,38,34,.25);margin:40px 0">' })
      editor.on('update', () => setDirty(true))
      editor.on('load', () => { setStatus('Spremno'); editor.UndoManager.clear() })
      editorRef.current = editor
    }
    start().catch((error) => setStatus(error instanceof Error ? error.message : 'Greška pri učitavanju.'))
    return () => { active = false; moveCleanupRef.current?.(); moveCleanupRef.current = null; editorRef.current?.destroy(); editorRef.current = null }
  }, [locale])

  function toggleFreeMove() {
    if (moveCleanupRef.current) {
      moveCleanupRef.current()
      moveCleanupRef.current = null
      setMoveMode(false)
      setStatus('Slobodno pomicanje isključeno.')
      return
    }
    const editor = editorRef.current
    const component = editor?.getSelected()
    const element = component?.getEl?.() as HTMLElement | undefined
    const parent = component?.parent?.()
    const parentElement = parent?.getEl?.() as HTMLElement | undefined
    const document = editor?.Canvas?.getDocument?.() as Document | undefined
    if (!component || !element || !parent || !parentElement || !document) {
      setStatus('Prvo klikni tekst, sliku ili gumb koji želiš pomicati.')
      return
    }
    const rect = element.getBoundingClientRect()
    const parentRect = parentElement.getBoundingClientRect()
    const parentStyle = getComputedStyle(parentElement)
    if (parentStyle.position === 'static') parent.addStyle({ position: 'relative' })
    component.addStyle({
      position: 'absolute',
      left: Math.round(rect.left - parentRect.left + parentElement.scrollLeft) + 'px',
      top: Math.round(rect.top - parentRect.top + parentElement.scrollTop) + 'px',
      width: Math.round(rect.width) + 'px',
      margin: '0',
      'z-index': '20',
      cursor: 'move',
    })
    let move: ((event: PointerEvent) => void) | null = null
    let up: (() => void) | null = null
    const down = (event: PointerEvent) => {
      if (event.button !== 0) return
      event.preventDefault()
      event.stopPropagation()
      const style = component.getStyle()
      const startLeft = Number.parseFloat(style.left || '0')
      const startTop = Number.parseFloat(style.top || '0')
      const startX = event.clientX
      const startY = event.clientY
      element.style.cursor = 'grabbing'
      move = (next: PointerEvent) => {
        component.addStyle({
          left: Math.round(startLeft + next.clientX - startX) + 'px',
          top: Math.round(startTop + next.clientY - startY) + 'px',
        })
      }
      up = () => {
        element.style.cursor = 'move'
        if (move) document.removeEventListener('pointermove', move)
        if (up) document.removeEventListener('pointerup', up)
        move = null
        up = null
      }
      document.addEventListener('pointermove', move)
      document.addEventListener('pointerup', up, { once: true })
    }
    element.addEventListener('pointerdown', down, true)
    moveCleanupRef.current = () => {
      element.removeEventListener('pointerdown', down, true)
      if (move) document.removeEventListener('pointermove', move)
      if (up) document.removeEventListener('pointerup', up)
      component.addStyle({ cursor: 'default' })
    }
    setMoveMode(true)
    setStatus('Slobodno pomicanje uključeno — povuci odabrani element na platnu.')
  }

  async function save() {
    const editor = editorRef.current
    if (!editor) return
    setBusy(true); setStatus('Spremanje i pokretanje objave…')
    const response = await fetch('/api/admin/page?locale=' + locale, { method: 'PUT', headers: { 'content-type': 'application/json' }, body: JSON.stringify({ html: editor.getHtml(), css: editor.getCss() }) })
    const result = await response.json().catch(() => ({}))
    setBusy(false)
    if (!response.ok) { setStatus(result.error || 'Spremanje nije uspjelo.'); return }
    setDirty(false); setStatus('Spremljeno. Vercel objavljuje novu verziju.')
  }
  async function upload(event: ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0]
    const editor = editorRef.current
    if (!file || !editor) return
    setBusy(true)
    setStatus('Učitavanje slike…')
    const previewUrl = URL.createObjectURL(file)
    const component = editor.addComponents({ type: 'image', src: previewUrl, style: { width: '100%', height: 'auto', display: 'block' } })[0]
    const form = new FormData()
    form.append('file', file)
    const response = await fetch('/api/admin/assets', { method: 'POST', body: form })
    const result = await response.json().catch(() => ({}))
    event.target.value = ''
    if (!response.ok) {
      component.remove()
      URL.revokeObjectURL(previewUrl)
      setBusy(false)
      setStatus(result.error || 'Slika nije učitana.')
      return
    }
    setStatus('Slika je spremljena. Čekam novu verziju stranice…')
    let available = false
    for (let attempt = 0; attempt < 30; attempt += 1) {
      await new Promise((resolve) => window.setTimeout(resolve, 3000))
      const check = await fetch(result.src + '?ready=' + Date.now(), { cache: 'no-store' }).catch(() => null)
      if (check?.ok) { available = true; break }
    }
    component.addAttributes({ src: result.src, alt: file.name.replace(/\.[^.]+$/, '') })
    editor.AssetManager.add({ src: result.src, name: file.name })
    URL.revokeObjectURL(previewUrl)
    setBusy(false)
    setDirty(true)
    setStatus(available ? 'Slika je dodana i spremna.' : 'Slika je spremljena; pojavit će se nakon osvježavanja.')
  }
  function switchLocale(next: 'hr' | 'en') {
    if (next === locale) return
    if (dirty && !window.confirm('Postoje nespremljene promjene. Svejedno promijeniti jezik?')) return
    setLocale(next)
  }
  async function logout() { await fetch('/api/admin/logout', { method: 'POST' }); window.location.reload() }

  return (
    <main className="h-screen overflow-hidden bg-[#191919] text-white">
      <header className="flex h-16 items-center gap-2 border-b border-white/10 bg-[#242424] px-3">
        <div className="mr-3 hidden min-w-36 md:block"><strong className="block text-sm">Mašić Studio</strong><span className="block truncate text-[11px] text-white/45">{dirty ? 'Nespremljene promjene' : status}</span></div>
        <div className="flex rounded bg-black/25 p-1"><button onClick={() => switchLocale('hr')} className={'px-3 py-2 text-xs font-bold ' + (locale === 'hr' ? 'bg-[#9a4937]' : 'text-white/55')}>HR</button><button onClick={() => switchLocale('en')} className={'px-3 py-2 text-xs font-bold ' + (locale === 'en' ? 'bg-[#9a4937]' : 'text-white/55')}>EN</button></div>
        <button onClick={() => editorRef.current?.UndoManager.undo()} className="rounded px-3 py-2 text-xs hover:bg-white/10">↶ Undo</button>
        <button onClick={() => editorRef.current?.UndoManager.redo()} className="rounded px-3 py-2 text-xs hover:bg-white/10">↷ Redo</button>
        <div className="hidden gap-1 lg:flex"><button onClick={() => editorRef.current?.DeviceManager.select('desktop')} className="rounded px-3 py-2 text-xs hover:bg-white/10">Desktop</button><button onClick={() => editorRef.current?.DeviceManager.select('tablet')} className="rounded px-3 py-2 text-xs hover:bg-white/10">Tablet</button><button onClick={() => editorRef.current?.DeviceManager.select('mobile')} className="rounded px-3 py-2 text-xs hover:bg-white/10">Mobitel</button></div>
        <button onClick={toggleFreeMove} className={'rounded px-3 py-2 text-xs ' + (moveMode ? 'bg-amber-500 text-black' : 'hover:bg-white/10')} title="Odaberi element pa uključi slobodno pomicanje">✥ Pomakni</button>
        <input ref={fileRef} type="file" accept="image/jpeg,image/png,image/webp,image/gif" onChange={upload} className="hidden" />
        <button onClick={() => fileRef.current?.click()} className="ml-auto rounded px-3 py-2 text-xs hover:bg-white/10">+ Slika</button>
        <button onClick={() => editorRef.current?.runCommand('core:preview')} className="rounded px-3 py-2 text-xs hover:bg-white/10">Pregled</button>
        <button onClick={save} disabled={busy || !dirty} className="rounded bg-[#9a4937] px-4 py-2 text-xs font-bold uppercase tracking-wider disabled:opacity-40">{busy ? 'Radim…' : 'Spremi i objavi'}</button>
        <button onClick={logout} className="rounded px-3 py-2 text-xs text-white/45 hover:bg-white/10 hover:text-white">Odjava</button>
      </header>
      <div id="gjs" />
      <div className="pointer-events-none fixed bottom-3 left-1/2 z-[100] -translate-x-1/2 rounded bg-black/75 px-3 py-1.5 text-xs text-white/70 shadow-lg">{status}</div>
    </main>
  )
}
