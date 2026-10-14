import type { Messages } from '@/lib/i18n/messages'

/** Decorative moving strip. The same information is available as text in the offer section. */
export function Ticker({ m }: { m: Messages }) {
  return (
    <div aria-hidden className="group overflow-hidden bg-brand-gold text-brand-ink">
      <div className="marquee-track flex w-max py-5 group-hover:[animation-play-state:paused]">
        {[0, 1].map((copy) => (
          <ul key={copy} className="flex shrink-0 items-center gap-8 pr-8">
            {m.home.ticker.map((word) => (
              <li
                key={word}
                className="flex items-center gap-8 font-display text-2xl font-semibold uppercase tracking-tight transition-colors hover:text-brand-cream sm:text-4xl"
              >
                {word}
                <span className="size-3 rotate-45 bg-brand-ink" />
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  )
}
