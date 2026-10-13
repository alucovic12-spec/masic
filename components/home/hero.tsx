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
    <section
      aria-labelledby="hero-title"
      className="relative isolate min-h-[100svh] overflow-hidden bg-charcoal text-ivory"
    >
      <div className="grid min-h-[100svh] lg:grid-cols-[minmax(0,0.94fr)_minmax(30rem,1.06fr)]">
        <div className="relative z-10 flex min-h-[100svh] flex-col px-5 pb-6 pt-28 sm:px-8 lg:px-12 lg:pb-8 lg:pt-32 xl:px-[max(4rem,calc((100vw-84rem)/2+3rem))]">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -left-32 top-1/3 size-[32rem] rounded-full border border-ivory/10"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -left-20 top-[38%] size-[20rem] rounded-full border border-ivory/10"
          />

          <div className="my-auto max-w-2xl py-12">
            <Eyebrow className="animate-rise text-ivory/65">{hero.eyebrow[locale]}</Eyebrow>
            <h1
              id="hero-title"
              className="mt-7 font-display text-[clamp(3.25rem,6.2vw,7.4rem)] font-semibold leading-[0.88] tracking-[-0.065em]"
            >
              <span className="block animate-rise [animation-delay:100ms]">{hero.titleLine1[locale]}</span>
              <span className="mt-2 block animate-rise text-ivory/68 [animation-delay:220ms]">
                {hero.titleLine2[locale]}
              </span>
            </h1>
            <p className="mt-8 max-w-xl animate-rise text-base leading-relaxed text-ivory/70 [animation-delay:340ms] sm:text-lg">
              {hero.lead[locale]}
            </p>
            <div className="mt-9 flex animate-rise flex-col gap-3 [animation-delay:460ms] sm:flex-row">
              <ActionLink
                href={`${localePath(locale, routes.contact)}#rezervacija`}
                className="min-w-44 rounded-full"
              >
                {t.reserve}
              </ActionLink>
              <ActionLink
                href={localePath(locale, routes.menu)}
                variant="outline-light"
                className="min-w-40 rounded-full"
              >
                {t.viewMenu}
              </ActionLink>
            </div>
          </div>

          <div className="flex items-end justify-between gap-6 border-t border-ivory/15 pt-5 text-sm">
            <OpenStatus hours={site.openingHours} labels={t.status} days={t.days} />
            <a
              href="#prica"
              aria-label={t.scrollCueLabel}
              className="hidden items-center gap-3 text-[0.65rem] uppercase tracking-[0.24em] text-ivory/55 transition-colors hover:text-ivory sm:flex"
            >
              <span>{t.scrollCue}</span>
              <span aria-hidden="true" className="relative block h-8 w-px overflow-hidden bg-ivory/20">
                <span className="absolute inset-0 animate-scroll-line bg-ivory" />
              </span>
            </a>
          </div>
        </div>

        <figure className="absolute inset-0 -z-10 lg:relative lg:z-0">
          <Image
            src={hero.image.src}
            alt={hero.image.alt[locale]}
            fill
            priority
            fetchPriority="high"
            sizes="(min-width: 1024px) 53vw, 100vw"
            className="object-cover object-center lg:scale-[1.02]"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-charcoal/75 lg:bg-gradient-to-r lg:from-charcoal/28 lg:via-transparent lg:to-transparent"
          />
          <figcaption className="absolute bottom-8 right-8 hidden border border-white/25 bg-black/20 px-4 py-3 text-[0.65rem] uppercase tracking-[0.22em] text-white/75 backdrop-blur-md xl:block">
            {site.cuisines[locale].join(' · ')}
          </figcaption>
        </figure>
      </div>
    </section>
  )
}
