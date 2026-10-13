import type { Metadata } from 'next'
import { routes, site } from '@/content/site'
import type { RouteKey, SeoFields } from '@/content/types'
import { defaultLocale, localePath, locales, ogLocale, otherLocale, type Locale } from '@/lib/i18n'

export function absoluteUrl(path: string): string {
  return `${site.siteUrl}${path}`
}

export function buildMetadata(locale: Locale, route: RouteKey, seo: SeoFields): Metadata {
  const path = routes[route]
  const canonical = localePath(locale, path)
  const title = seo.title[locale]
  const description = seo.description[locale]
  const image = seo.image ?? site.defaultImage

  const languages: Record<string, string> = { 'x-default': localePath(defaultLocale, path) }
  for (const l of locales) languages[l] = localePath(l, path)

  return {
    title: route === 'home' ? { absolute: title } : title,
    description,
    alternates: { canonical, languages },
    openGraph: {
      type: 'website',
      siteName: site.name,
      title: route === 'home' ? title : `${title} · ${site.name}`,
      description,
      url: canonical,
      locale: ogLocale[locale],
      alternateLocale: [ogLocale[otherLocale(locale)]],
      images: [{ url: image.src, width: image.width, height: image.height, alt: image.alt[locale] }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image.src],
    },
  }
}

export function restaurantJsonLd(locale: Locale) {
  const { contact } = site
  return {
    '@context': 'https://schema.org',
    '@type': 'Restaurant',
    '@id': `${site.siteUrl}/#restaurant`,
    name: site.name,
    description: site.description[locale],
    url: absoluteUrl(localePath(locale)),
    image: absoluteUrl(site.defaultImage.src),
    // Placeholder contact values — replace in content/site.ts once verified.
    telephone: contact.phone.display,
    email: contact.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: contact.address.street[locale],
      postalCode: contact.address.postalCode,
      addressLocality: contact.address.city[locale],
      addressCountry: contact.address.countryCode,
    },
    servesCuisine: site.cuisines[locale],
    priceRange: site.priceRange,
    acceptsReservations: true,
    hasMenu: absoluteUrl(localePath(locale, routes.menu)),
    inLanguage: locale,
    sameAs: [site.instagram.url],
    openingHoursSpecification: site.openingHours
      .filter((row) => row.opens && row.closes)
      .map((row) => ({
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: row.days,
        opens: row.opens,
        closes: row.closes === '24:00' ? '23:59' : row.closes,
      })),
  }
}
