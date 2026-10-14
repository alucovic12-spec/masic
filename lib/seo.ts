import type { Metadata } from 'next'
import { localizedPath, locales, type Locale, type PageKey } from '@/lib/i18n/config'
import { getMessages } from '@/lib/i18n/messages'
import { site } from '@/lib/site'

export function buildMetadata(locale: Locale, page: PageKey = 'home'): Metadata {
  const m = getMessages(locale)
  const isHome = page === 'home'
  const title = isHome ? m.meta.defaultTitle : m.pages[page].title
  const description = isHome ? m.meta.defaultDescription : m.pages[page].description
  const canonical = localizedPath(locale, page)

  const languages: Record<string, string> = Object.fromEntries(
    locales.map((l) => [l, localizedPath(l, page)]),
  )
  languages['x-default'] = localizedPath('hr', page)

  return {
    title: isHome ? { absolute: title } : title,
    description,
    alternates: { canonical, languages },
    openGraph: {
      type: 'website',
      siteName: site.name,
      title: isHome ? title : `${title} | ${site.shortName}`,
      description,
      url: canonical,
      locale: m.meta.ogLocale,
      alternateLocale: locales.filter((l) => l !== locale).map((l) => getMessages(l).meta.ogLocale),
    },
    twitter: { card: 'summary_large_image', title, description },
  }
}
