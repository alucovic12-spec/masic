import Image from 'next/image'
import { TextLink } from '@/components/action-link'
import { SectionHeading } from '@/components/section-heading'
import { getGalleryImages } from '@/content/gallery'
import { home } from '@/content/home'
import { routes } from '@/content/site'
import { localePath, type Locale } from '@/lib/i18n'
import { cn } from '@/lib/utils'

export function Atmosphere({ locale }: { locale: Locale }) {
  const { atmosphere } = home
  const photos = getGalleryImages(atmosphere.galleryImageIds)

  return (
    <section aria-labelledby="atmosphere-title" className="bg-charcoal py-24 text-ivory md:py-36">
      <div className="shell">
        <SectionHeading
          id="atmosphere-title"
          eyebrow={atmosphere.eyebrow[locale]}
          title={atmosphere.title[locale]}
          intro={atmosphere.intro?.[locale]}
          action={<TextLink href={localePath(locale, routes.gallery)}>{atmosphere.cta[locale]}</TextLink>}
        />

        <div className="mt-16 grid gap-4 md:grid-cols-12 md:grid-rows-2">
          {photos.map((photo, i) => (
            <figure
              key={photo.id}
              className={cn(
                'group relative overflow-hidden',
                i === 0 ? 'aspect-[4/3] md:col-span-8 md:row-span-2 md:aspect-auto' : 'aspect-[4/3] md:col-span-4',
              )}
            >
              <Image
                src={photo.image.src}
                alt={photo.image.alt[locale]}
                fill
                sizes={i === 0 ? '(min-width: 768px) 66vw, 100vw' : '(min-width: 768px) 33vw, 100vw'}
                className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.03]"
              />
              <figcaption className="absolute bottom-0 left-0 bg-charcoal/80 px-4 py-2 text-xs tracking-wide text-ivory/90">
                {photo.caption[locale]}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
