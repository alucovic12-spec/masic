import type { Messages } from '@/lib/i18n/messages'

/** Decorative moving strip. The same information is available as text in the offer section. */
export function Ticker({ m }: { m: Messages }) {
  return (
    <div aria-hidden className="group overflow-hidden border-y-2 border-brand-ink bg-brand-sun text-brand-ink">
      <div className="marquee-track flex w-max items-end py-3 group-hover:[animation-play-state:paused] sm:py-4">
        {[0, 1].map((copy) => (
          <ul key={copy} className="flex shrink-0 items-center gap-8 pr-8">
            {m.home.ticker.map((word) => (
              <li
                key={word}
                className="font-accent flex items-center gap-8 text-2xl font-extrabold uppercase tracking-[-0.04em] transition-colors hover:text-brand-lime sm:text-4xl"
              >
                {word}
                <span className="h-1 w-12 bg-brand-ink" />
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  )
}
