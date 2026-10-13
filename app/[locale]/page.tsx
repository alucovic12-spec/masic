import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Atmosphere } from '@/components/home/atmosphere'
import { Hero } from '@/components/home/hero'
import { Instagram } from '@/components/home/instagram'
import { MenuPreview } from '@/components/home/menu-preview'
import { ReservationCta } from '@/components/home/reservation-cta'
import { Reviews } from '@/components/home/reviews'
import { SignatureDishes } from '@/components/home/signature-dishes'
import { Story } from '@/components/home/story'
import { Visit } from '@/components/home/visit'
import { home } from '@/content/home'
import { isLocale } from '@/lib/i18n'
import { buildMetadata } from '@/lib/seo'

export async function generateMetadata({ params }: PageProps<'/[locale]'>): Promise<Metadata> {
  const { locale } = await params
  if (!isLocale(locale)) return {}
  return buildMetadata(locale, 'home', home.seo)
}

export default async function HomePage({ params }: PageProps<'/[locale]'>) {
  const { locale } = await params
  if (!isLocale(locale)) notFound()

  return (
    <>
      <Hero locale={locale} />
      <Story locale={locale} />
      <SignatureDishes locale={locale} />
      <MenuPreview locale={locale} />
      <Atmosphere locale={locale} />
      <Reviews locale={locale} />
      <Visit locale={locale} />
      <ReservationCta locale={locale} />
      <Instagram locale={locale} />
    </>
  )
}
