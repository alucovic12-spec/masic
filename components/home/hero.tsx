import Image from 'next/image'
import { ActionLink } from '@/components/action-link'
import { OpenStatus } from '@/components/open-status'
import { Eyebrow } from '@/components/section-heading'
import { home } from '@/content/home'
import { routes, site } from '@/content/site'
import { ui } from '@/content/ui'
import { localePath, type Locale } from '@/lib/i18n'

export function Hero({ locale }: { locale: Locale }) {
  const t = ui[locale]
  const { hero } = home

  return (
    <section aria-labelledby="hero-title" className="relative isolate flex min-h-[100svh] flex-col overflow-hidden bg-charcoal text-ivory">
      <Image
        src={hero.image.src}
        alt={hero.image.alt[locale]}
        fill
        priority
        fetchPriority="high"
        sizes="100vw"
        className="-z-20 object-cover"
      />
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-charcoal/50" />
      <div aria-hidden="true" className="absolute inset-x-0 bottom-0 -z-10 h-3/4 bg-gradient-to-t from-charcoal via-charcoal/70 to-transparent" />

      <div className="shell flex flex-1 flex-col justify-end pb-12 pt-32 lg:pb-16">
        <div className="max-w-5xl">
          <Eyebrow className="animate-rise text-ivory/80">{hero.eyebrow[locale]}</Eyebrow>
          <h1
            id="hero-title"
            className="mt-8 font-serif text-[clamp(3rem,8vw,7.5rem)] leading-[0.95] tracking-tight"
          >
            <span className="block animate-rise [animation-delay:120ms]">{hero.titleLine1[locale]}</span>
            <span className="block animate-rise italic text-ivory/85 [animation-delay:240ms]">{hero.titleLine2[locale]}</span>
          </h1>
          <p className="mt-8 max-w-xl animate-rise text-lg leading-relaxed text-ivory/80 [animation-delay:360ms] md:text-xl">
            {hero.lead[locale]}
          </p>
          <div className="mt-10 flex animate-rise flex-col gap-3 [animation-delay:480ms] sm:flex-row">
            <ActionLink href={`${localePath(locale, routes.contact)}#rezervacija`}>{t.reserve}</ActionLink>
            <ActionLink href={localePath(locale, routes.menu)} variant="outline-light">
              {t.viewMenu}
            </ActionLink>
          </div>
        </div>
      </div>

      <div className="shell">
        <div className="flex items-center justify-between gap-6 border-t border-ivory/20 py-5 text-sm">
          <OpenStatus hours={site.openingHours} labels={t.status} days={t.days} />
          <p className="hidden text-ivory/70 md:block">{site.cuisines[locale].join(' · ')}</p>
          <a href="#prica" aria-label={t.scrollCueLabel} className="flex items-center gap-3 text-xs uppercase tracking-[0.24em] text-ivory/70 transition-colors hover:text-ivory">
            <span className="hidden sm:inline">{t.scrollCue}</span>
            <span aria-hidden="true" className="relative block h-8 w-px overflow-hidden bg-ivory/20">
              <span className="absolute inset-0 animate-scroll-line bg-ivory" />
            </span>
          </a>
        </div>
      </div>
    </section>
  )
}
