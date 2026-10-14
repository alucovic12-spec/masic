import { HeroAnnouncements } from '@/components/home/hero-announcements'
import { HeroSlides } from '@/components/home/hero-slides'
import { LinkButton } from '@/components/shared/link-button'
import type { LocalizedEvent } from '@/lib/events/types'
import { localizedPath, type Locale } from '@/lib/i18n/config'
import type { Messages } from '@/lib/i18n/messages'

const slides = [
  { src: '/images/space/hall-olive-island.png' },
  { src: '/images/space/facade-blue-hour.png' },
  { src: '/images/space/lounge-central-tree.png' },
  { src: '/images/space/hall-oak-tables.png' },
  { src: '/images/space/bar-brick-tv.png' },
  { src: '/images/space/concept-round-bar.png' },
]

export function Hero({ locale, m, events = [] }: { locale: Locale; m: Messages; events?: LocalizedEvent[] }) {
  const h = m.home.hero
  const [firstLine, ...rest] = h.title.split(/(?<=\.)\s+/)
  const secondLine = rest.join(' ')
  const slideLabels = slides.map((_, index) =>
    locale === 'hr' ? `Slika ${index + 1} od ${slides.length}` : `Image ${index + 1} of ${slides.length}`,
  )

  return (
    <section
      aria-labelledby="hero-title"
      className="tone-photo relative isolate flex min-h-[min(52rem,calc(100svh-4.5rem))] flex-col justify-end overflow-hidden bg-brand-ink"
    >
      <div className="absolute inset-x-0 top-0 -z-20 h-[48svh] lg:inset-y-0 lg:left-auto lg:right-0 lg:h-full lg:w-[78%]">
        <HeroSlides slides={slides} labels={slideLabels} />
      </div>

      {/* Dissolves the photos into the ink background: bottom edge on mobile, left edge on desktop, plus a soft top edge under the header. */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[48svh] bg-gradient-to-t from-brand-ink via-brand-ink/60 to-transparent lg:hidden"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 hidden bg-[linear-gradient(to_right,var(--brand-ink)_0%,var(--brand-ink)_20%,color-mix(in_oklab,var(--brand-ink)_70%,transparent)_38%,transparent_68%)] lg:block"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 hidden h-48 bg-gradient-to-t from-brand-ink to-transparent lg:block"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-28 bg-gradient-to-b from-brand-ink/80 to-transparent"
      />

      <div className="pointer-events-none mx-auto w-full max-w-[90rem] px-4 pb-12 pt-[38svh] sm:px-6 sm:pb-16 lg:px-8 lg:pb-12 lg:pt-14 [&>*]:pointer-events-auto">
        <p className="font-accent fade-up inline-flex items-center gap-3 text-[0.68rem] font-semibold uppercase tracking-[0.32em] text-brand-gold">
          <span aria-hidden className="h-px w-10 bg-brand-gold" />
          {h.eyebrow}
        </p>
        <h1
          id="hero-title"
          style={{ animationDelay: '100ms' }}
          className="fade-up mt-5 max-w-5xl text-balance font-display text-6xl font-extrabold leading-[0.86] tracking-[-0.065em] text-brand-sun sm:text-8xl xl:text-[7.25rem]"
        >
          <span className="block">{firstLine}</span>
          {secondLine ? (
            <span className="mt-3 block w-fit -rotate-1 rounded-[1.25rem_1.25rem_1.25rem_0.3rem] bg-brand-coral px-4 py-1 text-brand-ink sm:px-6">
              {secondLine}
            </span>
          ) : null}
        </h1>
        <p
          style={{ animationDelay: '220ms' }}
          className="fade-up mt-6 max-w-xl text-pretty text-base font-light leading-relaxed text-brand-cream/80 sm:text-lg"
        >
          {h.text}
        </p>
        <div style={{ animationDelay: '340ms' }} className="fade-up mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <LinkButton href={localizedPath(locale, 'reservations')} className="w-full sm:w-auto">
            {h.reserve}
          </LinkButton>
          <LinkButton href={localizedPath(locale, 'menu')} variant="outline" className="w-full sm:w-auto">
            {h.viewMenu}
          </LinkButton>
          <LinkButton href={localizedPath(locale, 'events')} variant="ghost" className="w-full sm:w-auto">
            {h.viewEvents}
          </LinkButton>
        </div>

        <ul
          style={{ animationDelay: '460ms' }}
          className="fade-up mt-10 flex flex-wrap gap-2 text-xs uppercase tracking-wider"
        >
          {h.moments.map((moment) => (
            <li
              key={moment}
              className="rounded-[0.9rem_0.9rem_0.9rem_0.2rem] border border-brand-cream/30 bg-brand-ink/55 px-3.5 py-1.5 backdrop-blur-sm transition-all hover:-rotate-1 hover:border-brand-sun hover:bg-brand-sun hover:text-brand-ink"
            >
              {moment}
            </li>
          ))}
        </ul>

        <HeroAnnouncements locale={locale} m={m} events={events} />
      </div>
    </section>
  )
}
