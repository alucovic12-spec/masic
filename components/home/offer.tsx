import { Wine } from 'lucide-react'
import Image from 'next/image'
import { LinkButton } from '@/components/shared/link-button'
import { Reveal } from '@/components/shared/reveal'
import { Section, SectionHeading } from '@/components/shared/section'
import { localizedPath, type Locale } from '@/lib/i18n/config'
import type { Messages } from '@/lib/i18n/messages'

/** Same order as `offer.items` in the messages: coffee, beer, wine, whisky, cocktails, food. */
const photos = [
  '/images/coffee.png',
  '/images/beer-wine.png',
  '/images/wine.png',
  '/images/whisky.png',
  '/images/cocktail.png',
  '/images/small-bites.png',
]

export function Offer({ locale, m }: { locale: Locale; m: Messages }) {
  const o = m.home.offer

  return (
    <Section labelledBy="offer-title" tone="ink">
      <Reveal>
        <SectionHeading id="offer-title" eyebrow={o.eyebrow} title={o.title} intro={o.intro} />
      </Reveal>

      <ul className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-12">
        {o.items.map((item, index) => {
          const photo = photos[index]
          return (
            <li
              key={item.title}
              className="glow-card group flex flex-col overflow-hidden rounded-[1.75rem] border border-brand-glow/15 bg-[linear-gradient(145deg,#151d33,#0d1222)] lg:col-span-4 lg:[&:nth-child(1)]:col-span-7 lg:[&:nth-child(2)]:col-span-5 lg:[&:nth-child(5)]:col-span-5 lg:[&:nth-child(6)]:col-span-7"
            >
              <div className="image-reveal relative aspect-[4/3] overflow-hidden">
                {photo ? (
                  <Image
                    src={photo}
                    alt=""
                    fill
                    sizes="(min-width: 1024px) 28vw, (min-width: 640px) 45vw, 100vw"
                    className="object-cover saturate-[0.85] motion-safe:transition-all motion-safe:duration-1000 group-hover:scale-[1.07] group-hover:saturate-125"
                  />
                ) : (
                  <div className="flex size-full items-center justify-center bg-brand-blue text-brand-cream">
                    <Wine aria-hidden className="size-16" strokeWidth={1.5} />
                  </div>
                )}
                <span
                  aria-hidden
                  className="absolute left-4 top-4 flex size-12 items-center justify-center rounded-[1rem_1rem_1rem_0.25rem] bg-brand-sun font-display text-base font-bold text-brand-ink backdrop-blur-sm motion-safe:transition-transform group-hover:rotate-6 group-hover:scale-110"
                >
                  {String(index + 1).padStart(2, '0')}
                </span>
              </div>
              <div className="p-6 sm:p-7">
                <h3 className="font-display text-4xl font-bold leading-[0.95] tracking-[-0.04em] transition-colors group-hover:text-brand-ink">{item.title}</h3>
                <p className="mt-3 text-base leading-relaxed text-muted-foreground transition-colors group-hover:text-brand-ink/80">
                  {item.text}
                </p>
              </div>
            </li>
          )
        })}
      </ul>

      <div className="mt-12">
        <LinkButton href={localizedPath(locale, 'menu')}>{o.cta}</LinkButton>
      </div>
    </Section>
  )
}
