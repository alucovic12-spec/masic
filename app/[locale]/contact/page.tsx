import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { ContactDetails } from '@/components/contact-details'
import { ReservationForm } from '@/components/contact/reservation-form'
import { MapPlaceholder } from '@/components/map-placeholder'
import { OpeningHours } from '@/components/opening-hours'
import { PageHeader } from '@/components/page-header'
import { pageSeo, routes, site } from '@/content/site'
import { ui } from '@/content/ui'
import { isLocale, localePath } from '@/lib/i18n'
import { buildMetadata } from '@/lib/seo'

export async function generateMetadata({ params }: PageProps<'/[locale]/contact'>): Promise<Metadata> {
  const { locale } = await params
  if (!isLocale(locale)) return {}
  return buildMetadata(locale, 'contact', pageSeo.contact)
}

const intro = {
  eyebrow: { hr: 'Kontakt i rezervacije', en: 'Contact & reservations' },
  title: { hr: 'Čuvamo vam stol.', en: 'We’ll keep a table for you.' },
  lead: {
    hr: 'Za rezervacije nazovite nas ili pošaljite upit. Za peku nas obavijestite barem dva sata ranije.',
    en: 'To book, call us or send a request. For peka, please let us know at least two hours ahead.',
  },
}

export default async function ContactPage({ params }: PageProps<'/[locale]/contact'>) {
  const { locale } = await params
  if (!isLocale(locale)) notFound()
  const t = ui[locale]

  return (
    <>
      <PageHeader eyebrow={intro.eyebrow[locale]} title={intro.title[locale]} lead={intro.lead[locale]} />

      <div className="shell grid gap-16 py-20 md:py-28 lg:grid-cols-12 lg:gap-8">
        <section id="rezervacija" aria-labelledby="form-title" className="scroll-mt-28 lg:col-span-7">
          <h2 id="form-title" className="font-serif text-4xl md:text-5xl">
            {t.form.title}
          </h2>
          <p className="mt-4 max-w-lg leading-relaxed text-muted-foreground">{t.form.intro}</p>
          <div className="mt-10">
            <ReservationForm
              labels={t.form}
              privacyHref={localePath(locale, routes.privacy)}
              email={site.contact.email}
              phone={site.contact.phone}
              locale={locale}
            />
          </div>
        </section>

        <aside className="flex flex-col gap-12 lg:col-span-4 lg:col-start-9">
          <section aria-labelledby="contact-title">
            <h2 id="contact-title" className="text-[0.7rem] uppercase tracking-[0.24em] text-muted-foreground">
              {t.contact.title}
            </h2>
            <ContactDetails locale={locale} />
          </section>
          <section aria-labelledby="hours-title">
            <h2 id="hours-title" className="text-[0.7rem] uppercase tracking-[0.24em] text-muted-foreground">
              {t.hours.title}
            </h2>
            <OpeningHours locale={locale} className="mt-4" />
          </section>
        </aside>
      </div>

      <section aria-label={t.contact.mapTitle} className="shell pb-24 md:pb-32">
        <MapPlaceholder locale={locale} className="aspect-[4/3] md:aspect-[21/9]" />
      </section>
    </>
  )
}
