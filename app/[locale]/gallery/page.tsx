import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { GalleryGrid } from '@/components/gallery/gallery-grid'
import { PageHeader } from '@/components/page-header'
import { galleryImages } from '@/content/gallery'
import { pageSeo } from '@/content/site'
import { ui } from '@/content/ui'
import { isLocale } from '@/lib/i18n'
import { buildMetadata } from '@/lib/seo'

export async function generateMetadata({ params }: PageProps<'/[locale]/gallery'>): Promise<Metadata> {
  const { locale } = await params
  if (!isLocale(locale)) return {}
  return buildMetadata(locale, 'gallery', pageSeo.gallery)
}

const intro = {
  eyebrow: { hr: 'Galerija', en: 'Gallery' },
  title: { hr: 'Večeri kod Mašića.', en: 'Evenings at Mašić.' },
  lead: {
    hr: 'Kamen, svijeće, žar i stol pun tanjura. Ovako izgleda jedna obična večer kod nas.',
    en: 'Stone, candlelight, embers and a table full of plates. This is an ordinary evening with us.',
  },
}

export default async function GalleryPage({ params }: PageProps<'/[locale]/gallery'>) {
  const { locale } = await params
  if (!isLocale(locale)) notFound()

  const items = galleryImages.map((g) => ({
    id: g.id,
    src: g.image.src,
    width: g.image.width,
    height: g.image.height,
    alt: g.image.alt[locale],
    caption: g.caption[locale],
  }))

  return (
    <>
      <PageHeader eyebrow={intro.eyebrow[locale]} title={intro.title[locale]} lead={intro.lead[locale]} />
      <section aria-label={intro.eyebrow[locale]} className="shell py-20 md:py-28">
        <GalleryGrid items={items} labels={ui[locale].gallery} />
      </section>
    </>
  )
}
