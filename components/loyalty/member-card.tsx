'use client'

import { QRCodeSVG } from 'qrcode.react'
import type { Locale } from '@/lib/i18n/config'
import type { Messages } from '@/lib/i18n/messages'
import type { LoyaltyMember } from '@/lib/loyalty/types'

export function MemberCard({
  locale,
  member,
  labels,
}: {
  locale: Locale
  member: LoyaltyMember
  labels: Messages['member']['card']
}) {
  const since = new Intl.DateTimeFormat(locale === 'en' ? 'en-GB' : 'hr-HR', {
    month: 'long',
    year: 'numeric',
    timeZone: 'Europe/Zagreb',
  }).format(new Date(member.created_at))

  return (
    <div className="relative mx-auto w-full max-w-md overflow-hidden rounded-[2rem] border border-brand-glow/25 bg-[radial-gradient(circle_at_80%_0%,rgb(110_231_242_/_18%),transparent_35%),linear-gradient(145deg,#151d33,#0b0f1c)] p-6 text-brand-cream shadow-[0_35px_110px_-35px_rgb(102_140_255_/_70%)]">
      <div aria-hidden className="absolute -right-10 -top-10 size-40 rounded-full bg-primary/15 blur-2xl" />
      <p className="text-sm tracking-[0.3em]">PARLAMENT</p>
      <p className="mt-1 text-[0.625rem] uppercase tracking-[0.4em] text-muted-foreground">People’s Bar</p>

      <div className="mt-8 flex items-end justify-between gap-4">
        <dl className="min-w-0 space-y-4">
          <div>
            <dt className="sr-only">Name</dt>
            <dd className="truncate font-display text-2xl">{member.full_name}</dd>
          </div>
          <div>
            <dt className="text-[0.625rem] uppercase tracking-[0.25em] text-muted-foreground">
              {labels.memberNumber}
            </dt>
            <dd className="mt-1 font-mono text-lg tracking-widest">{member.member_number}</dd>
          </div>
          <div>
            <dt className="text-[0.625rem] uppercase tracking-[0.25em] text-muted-foreground">{labels.since}</dt>
            <dd className="mt-1 text-sm capitalize">{since}</dd>
          </div>
        </dl>

        <figure className="shrink-0">
          <div className="rounded-xl bg-white p-2">
            <QRCodeSVG
              value={member.member_code}
              size={104}
              level="M"
              bgColor="#ffffff"
              fgColor="#111111"
              role="img"
              aria-label={labels.qrLabel}
            />
          </div>
          <figcaption className="sr-only">{labels.qrLabel}</figcaption>
        </figure>
      </div>
    </div>
  )
}
