import type { MetadataRoute } from 'next'
import { routes } from '@/content/site'
import type { RouteKey } from '@/content/types'
import { localePath, locales } from '@/lib/i18n'
import { absoluteUrl } from '@/lib/seo'

export const dynamic = 'force-static'

const priority: Record<RouteKey, number> = {
  home: 1,
  menu: 0.9,
  contact: 0.8,
  gallery: 0.7,
  about: 0.7,
  privacy: 0.2,
  cookies: 0.2,
}

export default function sitemap(): MetadataRoute.Sitemap {
  return (Object.keys(routes) as RouteKey[]).flatMap((route) =>
    locales.map((locale) => ({
      url: absoluteUrl(localePath(locale, routes[route])),
      changeFrequency: route === 'menu' ? 'weekly' : 'monthly',
      priority: priority[route],
      alternates: {
        languages: Object.fromEntries(locales.map((l) => [l, absoluteUrl(localePath(l, routes[route]))])),
      },
    })),
  )
}
