'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import type { UiStrings } from '@/content/ui'
import { loadAnalytics, OPEN_CONSENT_EVENT, openConsentSettings, readConsent, writeConsent } from '@/lib/analytics'
import { actionStyles } from '@/components/action-link'

export function ConsentBanner({ cookiesHref, labels }: { cookiesHref: string; labels: UiStrings['consent'] }) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const stored = readConsent()
    if (stored === 'granted') loadAnalytics()
    if (!stored) setVisible(true)
    const reopen = () => setVisible(true)
    window.addEventListener(OPEN_CONSENT_EVENT, reopen)
    return () => window.removeEventListener(OPEN_CONSENT_EVENT, reopen)
  }, [])

  if (!visible) return null

  const choose = (value: 'granted' | 'denied') => {
    writeConsent(value)
    setVisible(false)
  }

  return (
    <section
      role="region"
      aria-labelledby="consent-title"
      className="fixed inset-x-3 bottom-3 z-[55] max-w-md animate-rise border border-border bg-card p-6 text-card-foreground shadow-[0_20px_60px_-20px_oklch(0.235_0.008_60/0.35)] sm:inset-x-auto sm:left-6 sm:bottom-6"
    >
      <h2 id="consent-title" className="font-serif text-xl">
        {labels.title}
      </h2>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
        {labels.body}{' '}
        <Link href={cookiesHref} className="underline underline-offset-4 hover:text-foreground">
          {labels.policy}
        </Link>
      </p>
      <div className="mt-5 flex flex-wrap gap-3">
        <button type="button" onClick={() => choose('granted')} className={actionStyles('primary', 'min-h-11 px-5')}>
          {labels.accept}
        </button>
        <button type="button" onClick={() => choose('denied')} className={actionStyles('outline-dark', 'min-h-11 px-5')}>
          {labels.decline}
        </button>
      </div>
    </section>
  )
}

export function CookieSettingsButton({ label }: { label: string }) {
  return (
    <button type="button" onClick={openConsentSettings} className="transition-colors hover:text-ivory">
      {label}
    </button>
  )
}
