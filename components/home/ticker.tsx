import type { Messages } from '@/lib/i18n/messages'

/** Decorative moving strip. The same information is available as text in the offer section. */
export function Ticker({ m }: { m: Messages }) {
  return (
    <div aria-hidden className="group overflow-hidden border-y border-brand-cream/10 bg-brand-anthracite text-brand-cream">
      <div className="marquee-track flex w-max items-end py-3 group-hover:[animation-play-state:paused] sm:py-4">
        {[0, 1].map((copy) => (
          <ul key={copy} className="flex shrink-0 items-center gap-8 pr-8">
            {m.home.ticker.map((word) => (
              <li
                key={word}
                className="font-accent flex items-center gap-8 text-2xl font-medium uppercase tracking-[0.02em] transition-colors hover:text-brand-sun sm:text-4xl"
              >
                {word}
                <span className="h-1 w-12 bg-brand-cream/30" />
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  )
}
