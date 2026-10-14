import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Poppins } from 'next/font/google'
import { notFound } from 'next/navigation'
import type { ReactNode } from 'react'
import { MobileNav } from '@/components/layout/mobile-nav'
import { SiteFooter } from '@/components/layout/site-footer'
import { SiteHeader } from '@/components/layout/site-header'
import { isLocale, locales } from '@/lib/i18n/config'
import { getMessages } from '@/lib/i18n/messages'
import { getNavItems, splitMobileNav } from '@/lib/navigation'
import { getSiteUrl, site } from '@/lib/site'
import '../../globals.css'

const poppins = Poppins({
  subsets: ['latin', 'latin-ext'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins',
  display: 'swap',
})

export const dynamicParams = false

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  if (!isLocale(locale)) return {}
  return {
    metadataBase: new URL(getSiteUrl()),
    applicationName: site.shortName,
    title: { default: getMessages(locale).meta.defaultTitle, template: `%s | ${site.shortName}` },
    description: getMessages(locale).meta.defaultDescription,
    icons: { icon: '/icon.svg', apple: '/apple-icon.png' },
  }
}

export const viewport: Viewport = {
  themeColor: '#0D1321',
  colorScheme: 'light',
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  if (!isLocale(locale)) notFound()

  const m = getMessages(locale)
  const items = getNavItems(locale, m)
  const { primary, more } = splitMobileNav(items)

  return (
    <html lang={locale} className={poppins.variable}>
      <body className="pb-[calc(4rem+env(safe-area-inset-bottom))] xl:pb-0">
        <a
          href="#main"
          className="sr-only z-50 rounded-md bg-primary px-4 py-3 text-primary-foreground focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
        >
          {m.nav.skip}
        </a>
        <SiteHeader locale={locale} m={m} items={items} />
        <main id="main">{children}</main>
        <SiteFooter locale={locale} m={m} items={items} />
        <MobileNav
          locale={locale}
          primary={primary}
          more={more}
          labels={{
            nav: m.nav.mobileLabel,
            more: m.nav.more,
            moreTitle: m.nav.moreTitle,
            close: m.nav.close,
            language: m.nav.language,
          }}
        />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
