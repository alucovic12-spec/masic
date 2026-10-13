import Image from 'next/image'
import { ActionLink } from '@/components/action-link'
import { MenuItemRow } from '@/components/menu/menu-item-row'
import { Eyebrow } from '@/components/section-heading'
import { home } from '@/content/home'
import { getMenuItem } from '@/content/menu'
import { routes } from '@/content/site'
import type { MenuItem } from '@/content/types'
import { localePath, type Locale } from '@/lib/i18n'

export function MenuPreview({ locale }: { locale: Locale }) {
  const { menuPreview } = home
  const items = menuPreview.menuItemIds.map(getMenuItem).filter((item): item is MenuItem => Boolean(item))

  return (
    <section aria-labelledby="menu-preview-title" className="py-24 md:py-36">
      <div className="shell grid gap-14 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-28">
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image
                src={menuPreview.image.src}
                alt={menuPreview.image.alt[locale]}
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
        <div className="lg:col-span-6 lg:col-start-7">
          <Eyebrow>{menuPreview.eyebrow[locale]}</Eyebrow>
          <h2 id="menu-preview-title" className="mt-6 font-display text-4xl leading-[1.05] tracking-tight md:text-6xl">
            {menuPreview.title[locale]}
          </h2>
          {menuPreview.intro && <p className="mt-6 max-w-md leading-relaxed text-muted-foreground">{menuPreview.intro[locale]}</p>}
          <div className="mt-10 divide-y divide-border border-y border-border">
            {items.map((item) => (
              <MenuItemRow key={item.id} item={item} locale={locale} />
            ))}
          </div>
          <ActionLink href={localePath(locale, routes.menu)} variant="outline-dark" className="mt-10">
            {menuPreview.cta[locale]}
          </ActionLink>
        </div>
      </div>
    </section>
  )
}
