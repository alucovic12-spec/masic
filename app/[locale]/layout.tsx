import type { Metadata, Viewport } from 'next'
import { notFound } from 'next/navigation'
import '../globals.css'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { ConsentBanner } from '@/components/consent-banner'
import { JsonLd } from '@/components/json-ld'
import { navigation, routes, site } from '@/content/site'
import { ui } from '@/content/ui'
import { fontVariables } from '@/lib/fonts'
import { isLocale, localePath, locales } from '@/lib/i18n'
import { restaurantJsonLd } from '@/lib/seo'

export const dynamicParams = false

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

export async function generateMetadata({ params }: LayoutProps<'/[locale]'>): Promise<Metadata> {
  const { locale } = await params
  if (!isLocale(locale)) return {}
  return {
    metadataBase: new URL(site.siteUrl),
    title: { default: site.name, template: `%s · ${site.name}` },
    description: site.description[locale],
    applicationName: site.name,
    formatDetection: { telephone: false },
  }
}

export const viewport: Viewport = {
  themeColor: '#f6f1e6',
  colorScheme: 'light',
}

export default async function LocaleLayout({ children, params }: LayoutProps<'/[locale]'>) {
  const { locale } = await params
  if (!isLocale(locale)) notFound()
  const t = ui[locale]

  const nav = navigation.map((item) => ({
    href: localePath(locale, routes[item.route]),
    label: item.label[locale],
  }))

  return (
    <html lang={locale} className={fontVariables}>
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[70] focus:bg-charcoal focus:px-4 focus:py-3 focus:text-sm focus:text-ivory"
        >
          {t.skipToContent}
        </a>
        <SiteHeader
          locale={locale}
          nav={nav}
          reserveHref={`${localePath(locale, routes.contact)}#rezervacija`}
          phone={site.contact.phone}
          labels={{
            reserve: t.reserve,
            reserveShort: t.reserveShort,
            mainNav: t.mainNav,
            openMenu: t.openMenu,
            closeMenu: t.closeMenu,
            languageLabel: t.languageLabel,
            homeLabel: t.homeLabel,
          }}
        />
        <main id="main" tabIndex={-1} className="outline-none">
          {children}
        </main>
        <SiteFooter locale={locale} />
        <ConsentBanner
          cookiesHref={localePath(locale, routes.cookies)}
          labels={t.consent}
        />
        <JsonLd data={restaurantJsonLd(locale)} />
      </body>
    </html>
  )
}
