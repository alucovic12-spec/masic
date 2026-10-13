import { ContactDetails } from '@/components/contact-details'
import { MapPlaceholder } from '@/components/map-placeholder'
import { OpeningHours } from '@/components/opening-hours'
import { Eyebrow } from '@/components/section-heading'
import { home } from '@/content/home'
import { ui } from '@/content/ui'
import type { Locale } from '@/lib/i18n'

export function Visit({ locale }: { locale: Locale }) {
  const { visit } = home
  const t = ui[locale]
  return (
    <section aria-labelledby="visit-title" className="bg-ivory-deep py-24 md:py-36">
      <div className="shell grid gap-14 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-5">
          <Eyebrow>{visit.eyebrow[locale]}</Eyebrow>
          <h2 id="visit-title" className="mt-6 font-display text-4xl leading-[1.05] tracking-tight md:text-6xl">
            {visit.title[locale]}
          </h2>
          {visit.intro && <p className="mt-6 max-w-md leading-relaxed text-muted-foreground">{visit.intro[locale]}</p>}
          <div className="mt-12 grid gap-12 sm:grid-cols-2 lg:grid-cols-1">
            <ContactDetails locale={locale} />
            <div>
              <h3 className="text-[0.7rem] uppercase tracking-[0.24em] text-muted-foreground">{t.hours.title}</h3>
              <OpeningHours locale={locale} className="mt-4" />
            </div>
          </div>
        </div>
        <div className="lg:col-span-6 lg:col-start-7">
          <MapPlaceholder locale={locale} className="lg:sticky lg:top-28 lg:aspect-[4/5]" />
        </div>
      </div>
    </section>
  )
}
