import type { Metadata } from 'next'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { ReservationCta } from '@/components/home/reservation-cta'
import { PageHeader } from '@/components/page-header'
import { Eyebrow } from '@/components/section-heading'
import { about } from '@/content/about'
import { isLocale } from '@/lib/i18n'
import { buildMetadata } from '@/lib/seo'
import { cn } from '@/lib/utils'

export async function generateMetadata({ params }: PageProps<'/[locale]/about'>): Promise<Metadata> {
  const { locale } = await params
  if (!isLocale(locale)) return {}
  return buildMetadata(locale, 'about', about.seo)
}

export default async function AboutPage({ params }: PageProps<'/[locale]/about'>) {
  const { locale } = await params
  if (!isLocale(locale)) notFound()

  return (
    <>
      <PageHeader eyebrow={about.eyebrow[locale]} title={about.title[locale]} lead={about.lead[locale]} />

      <div className="flex flex-col gap-24 py-24 md:gap-36 md:py-36">
        {about.sections.map((section, i) => (
          <section key={section.id} id={section.id} aria-labelledby={`${section.id}-title`} className="shell">
            <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-8">
              <div className={cn('relative aspect-[4/5] overflow-hidden lg:col-span-6', i % 2 === 1 && 'lg:order-2 lg:col-start-7')}>
                <Image
                  src={section.image.src}
                  alt={section.image.alt[locale]}
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className={cn('lg:col-span-5', i % 2 === 1 ? 'lg:order-1 lg:col-start-1' : 'lg:col-start-8')}>
                <Eyebrow>{section.eyebrow[locale]}</Eyebrow>
                <h2 id={`${section.id}-title`} className="mt-6 font-display text-4xl leading-[1.05] tracking-tight md:text-5xl">
                  {section.title[locale]}
                </h2>
                <div className="mt-8 flex flex-col gap-5 text-lg leading-relaxed text-foreground/80">
                  {section.body[locale].map((p) => (
                    <p key={p}>{p}</p>
                  ))}
                </div>
              </div>
            </div>
          </section>
        ))}

        <section aria-labelledby="values-title" className="shell">
          <h2 id="values-title" className="sr-only">
            {locale === 'hr' ? 'Naše vrijednosti' : 'Our values'}
          </h2>
          <ul className="grid border-t border-charcoal md:grid-cols-3">
            {about.values.map((value, i) => (
              <li key={value.title.en} className="border-b border-border py-10 md:border-b-0 md:px-8 md:first:pl-0 md:[&:not(:first-child)]:border-l">
                <span className="text-xs tracking-[0.2em] text-terracotta">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="mt-4 font-display text-2xl">{value.title[locale]}</h3>
                <p className="mt-3 leading-relaxed text-muted-foreground">{value.body[locale]}</p>
              </li>
            ))}
          </ul>
          <p className="mx-auto mt-24 max-w-3xl text-center font-display text-3xl font-medium leading-snug md:text-4xl">
            {about.closing[locale]}
          </p>
        </section>
      </div>

      <ReservationCta locale={locale} />
    </>
  )
}
