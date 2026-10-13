import { Phone } from 'lucide-react'
import { ActionLink, actionStyles } from '@/components/action-link'
import { Eyebrow } from '@/components/section-heading'
import { home } from '@/content/home'
import { routes, site } from '@/content/site'
import { ui } from '@/content/ui'
import { localePath, type Locale } from '@/lib/i18n'

export function ReservationCta({ locale }: { locale: Locale }) {
  const { reservation } = home
  const t = ui[locale]
  return (
    <section aria-labelledby="reservation-title" className="bg-terracotta py-24 text-ivory md:py-32">
      <div className="shell flex flex-col gap-12 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-3xl">
          <Eyebrow className="text-ivory/80">{reservation.eyebrow[locale]}</Eyebrow>
          <h2 id="reservation-title" className="mt-6 font-serif text-5xl leading-[1] tracking-tight md:text-7xl">
            {reservation.title[locale]}
          </h2>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-ivory/85">{reservation.body[locale]}</p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
          <ActionLink href={`${localePath(locale, routes.contact)}#rezervacija`} variant="light">
            {t.reserve}
          </ActionLink>
          <a href={site.contact.phone.href} className={actionStyles('outline-light')}>
            <Phone className="size-4" aria-hidden="true" />
            {site.contact.phone.display}
          </a>
        </div>
      </div>
    </section>
  )
}
