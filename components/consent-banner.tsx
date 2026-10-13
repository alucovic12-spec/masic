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
      className="fixed inset-x-2 bottom-2 z-[55] animate-rise border border-border bg-card/95 p-3 text-card-foreground shadow-[0_12px_40px_-16px_oklch(0.235_0.008_60/0.4)] backdrop-blur sm:inset-x-auto sm:bottom-4 sm:right-4 sm:max-w-sm sm:p-4"
    >
      <h2 id="consent-title" className="sr-only">
        {labels.title}
      </h2>
      <p className="text-xs leading-relaxed text-muted-foreground">
        {labels.body}{' '}
        <Link href={cookiesHref} className="whitespace-nowrap underline underline-offset-2 hover:text-foreground">
          {labels.policy}
        </Link>
      </p>
      <div className="mt-3 flex gap-2">
        <button type="button" onClick={() => choose('granted')} className={actionStyles('primary', 'min-h-9 flex-1 px-3 text-xs')}>
          {labels.accept}
        </button>
        <button type="button" onClick={() => choose('denied')} className={actionStyles('outline-dark', 'min-h-9 flex-1 px-3 text-xs')}>
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
