import Image from 'next/image'
import { InstagramIcon } from '@/components/icons/instagram-icon'
import { actionStyles } from '@/components/action-link'
import { SectionHeading } from '@/components/section-heading'
import { getGalleryImages } from '@/content/gallery'
import { home } from '@/content/home'
import { site } from '@/content/site'
import { ui } from '@/content/ui'
import type { Locale } from '@/lib/i18n'

export function Instagram({ locale }: { locale: Locale }) {
  const { instagram } = home
  const t = ui[locale]
  const photos = getGalleryImages(instagram.galleryImageIds)

  return (
    <section aria-labelledby="instagram-title" className="py-24 md:py-32">
      <div className="shell">
        <SectionHeading
          id="instagram-title"
          eyebrow={instagram.eyebrow[locale]}
          title={instagram.title[locale]}
          intro={instagram.intro?.[locale]}
          action={
            <a href={site.instagram.url} target="_blank" rel="noopener noreferrer" className={actionStyles('outline-dark')}>
              <InstagramIcon className="size-4" aria-hidden="true" />
              {site.instagram.handle}
              <span className="sr-only"> {t.contact.opensInNewTab}</span>
            </a>
          }
        />
        <ul className="mt-14 grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
          {photos.map((photo) => (
            <li key={photo.id}>
              <a
                href={site.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block aspect-square overflow-hidden"
              >
                <Image
                  src={photo.image.src}
                  alt={photo.image.alt[locale]}
                  fill
                  sizes="(min-width: 768px) 25vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <span className="absolute inset-0 flex items-center justify-center bg-charcoal/0 text-ivory opacity-0 transition-all duration-300 group-hover:bg-charcoal/40 group-hover:opacity-100 group-focus-visible:bg-charcoal/40 group-focus-visible:opacity-100">
                  <InstagramIcon className="size-6" aria-hidden="true" />
                  <span className="sr-only">
                    {t.instagram.follow} {t.contact.opensInNewTab}
                  </span>
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
