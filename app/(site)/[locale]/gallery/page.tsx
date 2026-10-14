import type { Metadata } from 'next'
import { GalleryBrowser } from '@/components/gallery/gallery-browser'
import { getGallery } from '@/lib/gallery/get-gallery'
import type { Locale } from '@/lib/i18n/config'
import { getMessages } from '@/lib/i18n/messages'
import { buildMetadata } from '@/lib/seo'
import { site } from '@/lib/site'

type Props = { params: Promise<{ locale: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  return buildMetadata(locale as Locale, 'gallery')
}

export default async function GalleryPage({ params }: Props) {
  const locale = (await params).locale as Locale
  const m = getMessages(locale)
  const items = await getGallery(locale, m)

  return (
    <>
      <header className="mx-auto max-w-5xl px-4 pb-10 pt-14 sm:px-6 sm:pb-12 sm:pt-20 lg:px-8">
        <p className="text-xs uppercase tracking-[0.28em] text-primary">{m.home.gallery.eyebrow}</p>
        <h1 className="mt-3 text-balance font-display text-3xl leading-tight sm:text-5xl">
          {m.pages.gallery.title}
        </h1>
        <p className="mt-4 max-w-xl text-pretty text-lg text-muted-foreground">{m.galleryPage.intro}</p>
      </header>

      <div className="mx-auto max-w-5xl px-4 pb-24 sm:px-6 lg:px-8">
        <GalleryBrowser items={items} labels={m.galleryPage} placeholderLabel={m.placeholder.photo} />
        {site.showPlaceholders ? (
          <p className="mt-10 text-sm text-muted-foreground">{m.galleryPage.note}</p>
        ) : null}
      </div>
    </>
  )
}
