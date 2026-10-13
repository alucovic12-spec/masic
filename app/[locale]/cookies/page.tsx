import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { LegalPage } from '@/components/legal-page'
import { cookiePolicy } from '@/content/legal'
import { isLocale } from '@/lib/i18n'
import { buildMetadata } from '@/lib/seo'

export async function generateMetadata({ params }: PageProps<'/[locale]/cookies'>): Promise<Metadata> {
  const { locale } = await params
  if (!isLocale(locale)) return {}
  return buildMetadata(locale, 'cookies', cookiePolicy.seo)
}

export default async function CookiesPage({ params }: PageProps<'/[locale]/cookies'>) {
  const { locale } = await params
  if (!isLocale(locale)) notFound()
  return <LegalPage doc={cookiePolicy} locale={locale} />
}
