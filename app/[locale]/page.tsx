import type { Metadata } from 'next'
import { PlasmicComponent } from '@plasmicapp/loader-nextjs'
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
import { ClientPlasmicRootProvider } from '@/plasmic-init-client'
import { PLASMIC, isPlasmicConfigured } from '@/plasmic-init'
import { home } from '@/content/home'
import { isLocale } from '@/lib/i18n'
import { buildMetadata } from '@/lib/seo'

export const revalidate = 60

export async function generateMetadata({ params }: PageProps<'/[locale]'>): Promise<Metadata> {
  const { locale } = await params
  if (!isLocale(locale)) return {}
  return buildMetadata(locale, 'home', home.seo)
}

export default async function HomePage({ params }: PageProps<'/[locale]'>) {
  const { locale } = await params
  if (!isLocale(locale)) notFound()

  if (isPlasmicConfigured()) {
    try {
      const componentData = await PLASMIC.maybeFetchComponentData('/' + locale)
      if (componentData?.entryCompMetas.length) {
        const pageMeta = componentData.entryCompMetas[0]
        return (
          <ClientPlasmicRootProvider
            prefetchedData={componentData}
            pageRoute={pageMeta.path}
            pageParams={pageMeta.params}
          >
            <PlasmicComponent component={pageMeta.displayName} />
          </ClientPlasmicRootProvider>
        )
      }
    } catch {
      // Keep the current Mašić page online until the matching Plasmic page is ready.
    }
  }

  return <EditorialHome locale={locale} />\n}
