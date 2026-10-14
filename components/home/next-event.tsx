import { CalendarDays } from 'lucide-react'
import Image from 'next/image'
import { LinkButton } from '@/components/shared/link-button'
import { Reveal } from '@/components/shared/reveal'
import { Section } from '@/components/shared/section'
import type { LocalizedEvent } from '@/lib/events/types'
import { localizedPath, type Locale } from '@/lib/i18n/config'
import type { Messages } from '@/lib/i18n/messages'
import { site } from '@/lib/site'

type Props = { locale: Locale; m: Messages; event?: LocalizedEvent }

export function NextEvent({ locale, m, event }: Props) {
  const n = m.home.nextEvent
  const showNote = site.showPlaceholders && (event ? event.placeholder : true)

  return (
    <Section labelledBy="next-event-title" className="py-[35px] sm:py-[35px] sm:pb-[51px]">
      <Reveal>
        <div className="tone-ink ticket-edge group grid overflow-hidden border-2 border-brand-ink shadow-[14px_14px_0_0_var(--brand-violet)] motion-safe:transition-all motion-safe:duration-500 hover:shadow-[20px_20px_0_0_var(--brand-green)] motion-safe:hover:-translate-x-1 motion-safe:hover:-translate-y-1 md:grid-cols-[1.05fr_1.45fr]">
          <div className="image-reveal relative min-h-72 overflow-hidden md:min-h-full">
            <Image
              src="/images/live-music.png"
              alt=""
              fill
              sizes="(min-width: 768px) 40vw, 100vw"
              className="object-cover motion-safe:transition-transform motion-safe:duration-700 group-hover:scale-110"
            />
            <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-brand-ink/70 via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:via-transparent md:to-brand-ink/80" />
            <span
              aria-hidden
              className="absolute left-5 top-5 flex size-14 -rotate-6 items-center justify-center rounded-[1rem_1rem_1rem_0.25rem] bg-primary text-primary-foreground shadow-lg motion-safe:transition-transform motion-safe:duration-500 group-hover:rotate-6 group-hover:scale-110"
            >
              <CalendarDays className="size-6" />
            </span>
          </div>

          <div className="flex flex-col justify-between gap-10 p-6 sm:p-12">
            <div>
              <p className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.26em] text-primary">
                <span aria-hidden className="h-px w-10 bg-primary" />
                {n.eyebrow}
              </p>
              <h2 id="next-event-title" className="mt-5 text-balance font-display text-5xl font-extrabold leading-[0.9] tracking-[-0.055em] sm:text-7xl">
                {event ? event.title : n.title}
              </h2>
              {event ? (
                <p className="mt-5 text-lg text-brand-gold">
                  <time dateTime={event.start} className="capitalize">
                    {event.dateLabel}, {event.timeLabel}
                  </time>
                </p>
              ) : (
                <p className="mt-5 max-w-xl text-lg text-muted-foreground">{n.text}</p>
              )}
              {showNote ? (
                <p className="mt-5 inline-block rounded-full border border-dashed border-foreground/30 px-3 py-1 text-xs text-muted-foreground">
                  {n.note}
                </p>
              ) : null}
            </div>
            <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
              {event ? (
                <LinkButton href={localizedPath(locale, 'events', [event.id])}>{m.events.details}</LinkButton>
              ) : null}
              <LinkButton href={localizedPath(locale, 'events')} variant={event ? 'outline' : 'default'}>
                {n.cta}
              </LinkButton>
            </div>
          </div>
        </div>
      </Reveal>
    </Section>
  )
}
