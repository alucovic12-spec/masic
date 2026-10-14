import Image from 'next/image'
import { LinkButton } from '@/components/shared/link-button'
import { Reveal } from '@/components/shared/reveal'
import { Section, SectionHeading } from '@/components/shared/section'
import { localizedPath, type Locale } from '@/lib/i18n/config'
import type { Messages } from '@/lib/i18n/messages'
import { cn } from '@/lib/utils'

/** Same order as `gallery.tiles`: interior, atmosphere, drinks and food, events. */
const tiles = [
  { src: '/images/space/lounge-central-tree.png', position: 'col-span-2 aspect-[16/10] lg:row-span-2 lg:aspect-auto' },
  { src: '/images/space/velvet-chair.png', position: 'aspect-[4/5] lg:aspect-auto' },
  { src: '/images/space/whisky-one-seat.png', position: 'aspect-[4/5] lg:aspect-auto' },
  { src: '/images/space/bar-brick-tv.png', position: 'col-span-2 aspect-[16/10] lg:aspect-auto' },
]

export function GalleryTeaser({ locale, m }: { locale: Locale; m: Messages }) {
  const g = m.home.gallery

  return (
    <Section labelledBy="gallery-title" tone="raised">
      <Reveal className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
        <SectionHeading id="gallery-title" eyebrow={g.eyebrow} title={g.title} />
        <LinkButton href={localizedPath(locale, 'gallery')} variant="outline" className="self-start sm:self-auto">
          {g.cta}
        </LinkButton>
      </Reveal>

      <ul className="group/list mt-14 grid grid-cols-2 gap-3 sm:gap-4 lg:h-[38rem] lg:grid-cols-4 lg:grid-rows-2">
        {g.tiles.map((label, index) => (
          <li
            key={label}
            className={cn(
              'image-reveal group relative overflow-hidden border-2 border-brand-ink bg-brand-ink shadow-[6px_6px_0_0_var(--brand-green)] motion-safe:transition-all motion-safe:duration-500 odd:rounded-[2.5rem_0.6rem_2.5rem_0.6rem] even:rounded-[0.6rem_2.5rem_0.6rem_2.5rem] lg:group-hover/list:opacity-50 lg:hover:!opacity-100 lg:hover:-translate-y-2 lg:hover:shadow-[10px_10px_0_0_var(--brand-lime)]',
              tiles[index].position,
            )}
          >
            <Image
              src={tiles[index].src}
              alt=""
              fill
              sizes="(min-width: 1024px) 30vw, 50vw"
              className="object-cover motion-safe:transition-transform motion-safe:duration-1000 group-hover:scale-110"
            />
            <div
              aria-hidden
              className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-brand-ink/90 to-transparent"
            />
            <p className="font-accent absolute bottom-4 left-4 rounded-[0.9rem_0.9rem_0.9rem_0.2rem] bg-brand-sun px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-brand-ink motion-safe:transition-all motion-safe:duration-500 group-hover:-translate-y-1 group-hover:-rotate-2 group-hover:bg-brand-lime">
              {label}
            </p>
          </li>
        ))}
      </ul>
    </Section>
  )
}
