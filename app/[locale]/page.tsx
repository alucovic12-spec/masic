import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { EditorPage } from '@/components/editor-page'
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
  return <EditorPage locale={locale} />
}
