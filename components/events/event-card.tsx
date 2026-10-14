import { Clock } from 'lucide-react'
import Link from 'next/link'
import { LinkButton } from '@/components/shared/link-button'
import type { LocalizedEvent } from '@/lib/events/types'
import { localizedPath, type Locale } from '@/lib/i18n/config'
import type { Messages } from '@/lib/i18n/messages'
import { cn } from '@/lib/utils'
import { EventBadges } from './event-badges'
import { EventCta } from './event-cta'
import { eventPriceText } from './event-price'

type Props = {
  event: LocalizedEvent
  locale: Locale
  labels: Messages['events']
  headingLevel?: 'h2' | 'h3'
}

export function EventCard({ event, locale, labels, headingLevel = 'h2' }: Props) {
  const Heading = headingLevel
  const href = localizedPath(locale, 'events', [event.id])
  const inactive = event.isPast || event.status === 'cancelled'

  return (
    <li
      className={cn(
        'glow-card flex flex-col gap-5 rounded-[1.75rem] border border-brand-cream/10 bg-brand-cream/[0.04] p-5 transition-all hover:border-brand-sun/30 sm:flex-row sm:items-center sm:gap-6 sm:p-6',
        inactive && 'opacity-75',
      )}
    >
      <div
        aria-hidden
        className="flex size-20 shrink-0 flex-col items-center justify-center rounded-2xl border border-brand-sun/25 bg-brand-sun/[0.08] text-center text-brand-cream"
      >
        <span className="font-display text-4xl leading-none">{event.day}</span>
        <span className="mt-1 text-xs uppercase tracking-[0.2em] text-primary">{event.monthShort}</span>
      </div>

      <div className="min-w-0 flex-1">
        <EventBadges event={event} labels={labels} />
        <Heading className="mt-3 font-display text-2xl font-bold leading-snug tracking-[-0.045em] text-brand-cream sm:text-3xl">
          <Link
            href={href}
            className="rounded-sm hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            {event.title}
          </Link>
        </Heading>
        {event.performer ? <p className="mt-1 text-sm text-muted-foreground">{event.performer}</p> : null}
        <p className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-muted-foreground">
          <time dateTime={event.start} className="flex items-center gap-1.5 capitalize">
            <Clock aria-hidden className="size-4 text-primary" />
            {event.dateLabel}, {event.timeLabel}
          </time>
          <span className="text-foreground">{eventPriceText(event, labels)}</span>
        </p>
      </div>

      <div className="flex flex-col gap-2 sm:items-stretch">
        <EventCta event={event} locale={locale} labels={labels} className="w-full" />
        <LinkButton href={href} variant="outline" className="w-full">
          {labels.details}
        </LinkButton>
      </div>
    </li>
  )
}
