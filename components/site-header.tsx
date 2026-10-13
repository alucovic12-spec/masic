'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'
import { Menu, Phone, X } from 'lucide-react'
import { LanguageSwitcher, persistLocale } from '@/components/language-switcher'
import { Wordmark } from '@/components/wordmark'
import { actionStyles } from '@/components/action-link'
import { localePath, type Locale } from '@/lib/i18n'
import { cn } from '@/lib/utils'

type Labels = {
  reserve: string
  reserveShort: string
  mainNav: string
  openMenu: string
  closeMenu: string
  languageLabel: string
  homeLabel: string
}

export function SiteHeader({
  locale,
  nav,
  reserveHref,
  phone,
  labels,
}: {
  locale: Locale
  nav: { href: string; label: string }[]
  reserveHref: string
  phone: { display: string; href: string }
  labels: Labels
}) {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const toggleRef = useRef<HTMLButtonElement>(null)
  const panelRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    persistLocale(locale)
  }, [locale])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!open) return
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    panelRef.current?.querySelector<HTMLElement>('a')?.focus()
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpen(false)
        toggleRef.current?.focus()
      }
    }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', onKey)
    }
  }, [open])

  const isActive = (href: string) =>
    href === localePath(locale) ? pathname === href : pathname?.startsWith(href)

  const isHome = pathname === localePath(locale)\n  const solid = (scrolled || isHome) && !open

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-colors duration-500',
        solid ? 'border-b border-border bg-background text-foreground' : 'border-b border-ivory/15 text-ivory',
      )}
    >
      <div className="shell flex h-20 items-center justify-between gap-6">
        <Link href={localePath(locale)} aria-label={labels.homeLabel} className="relative z-10" onClick={() => setOpen(false)}>
          <Wordmark />
        </Link>

        <nav aria-label={labels.mainNav} className="hidden lg:block">
          <ul className="flex items-center gap-8">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={isActive(item.href) ? 'page' : undefined}
                  className={cn(
                    'relative py-2 text-sm tracking-wide transition-opacity',
                    'after:absolute after:inset-x-0 after:-bottom-0.5 after:h-px after:origin-left after:scale-x-0 after:bg-current after:transition-transform after:duration-300 hover:after:scale-x-100',
                    isActive(item.href) ? 'after:scale-x-100' : 'opacity-80 hover:opacity-100',
                  )}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="relative z-10 flex items-center gap-2 sm:gap-4">
          <LanguageSwitcher locale={locale} label={labels.languageLabel} className="hidden sm:flex" />
          <Link
            href={reserveHref}
            className={actionStyles(solid ? 'primary' : 'light', 'hidden min-h-11 px-5 sm:inline-flex')}
          >
            {labels.reserve}
          </Link>
          <button
            ref={toggleRef}
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            className="inline-flex size-11 items-center justify-center lg:hidden"
          >
            {open ? <X className="size-6" aria-hidden="true" /> : <Menu className="size-6" aria-hidden="true" />}
            <span className="sr-only">{open ? labels.closeMenu : labels.openMenu}</span>
          </button>
        </div>
      </div>

      <div
        id="mobile-menu"
        ref={panelRef}
        hidden={!open}
        className="fixed inset-0 bg-charcoal text-ivory lg:hidden"
      >
        <div className="shell flex h-full flex-col pb-10 pt-28">
          <nav aria-label={labels.mainNav}>
            <ul className="flex flex-col">
              {nav.map((item, i) => (
                <li key={item.href} className="border-b border-ivory/10">
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    aria-current={isActive(item.href) ? 'page' : undefined}
                    className="flex items-baseline gap-4 py-4 font-display text-4xl"
                  >
                    <span className="font-sans text-xs tracking-[0.2em] text-ivory/50">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="mt-auto flex flex-col gap-6">
            <LanguageSwitcher locale={locale} label={labels.languageLabel} onNavigate={() => setOpen(false)} />
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link href={reserveHref} onClick={() => setOpen(false)} className={actionStyles('primary', 'w-full sm:w-auto')}>
                {labels.reserve}
              </Link>
              <a href={phone.href} className={actionStyles('outline-light', 'w-full sm:w-auto')}>
                <Phone className="size-4" aria-hidden="true" />
                {phone.display}
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
