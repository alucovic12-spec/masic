import Image from 'next/image'
import { TextLink } from '@/components/action-link'
import { SectionHeading } from '@/components/section-heading'
import { home } from '@/content/home'
import { getMenuItem } from '@/content/menu'
import { routes } from '@/content/site'
import { ui } from '@/content/ui'
import { formatPrice } from '@/lib/format'
import { localePath, type Locale } from '@/lib/i18n'

export function SignatureDishes({ locale }: { locale: Locale }) {
  const { signature } = home
  const t = ui[locale]
  const dishes = signature.dishes
    .map((dish) => ({ ...dish, item: getMenuItem(dish.menuItemId) }))
    .filter((dish) => dish.item)

  return (
    <section aria-labelledby="signature-title" className="bg-ivory-deep py-24 md:py-36">
      <div className="shell">
        <SectionHeading
          id="signature-title"
          eyebrow={signature.eyebrow[locale]}
          title={signature.title[locale]}
          intro={signature.intro?.[locale]}
          action={<TextLink href={localePath(locale, routes.menu)}>{t.viewMenu}</TextLink>}
        />

        <ul className="mt-16 grid gap-x-6 gap-y-14 sm:grid-cols-2 lg:grid-cols-4">
          {dishes.map(({ item, image }, i) => (
            <li key={item!.id} className={i % 2 === 1 ? 'lg:mt-16' : undefined}>
              <article className="group">
                <div className="relative aspect-[4/5] overflow-hidden bg-charcoal/10">
                  <Image
                    src={image.src}
                    alt={image.alt[locale]}
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.04]"
                  />
                </div>
                <div className="mt-5 flex items-baseline justify-between gap-4 border-t border-charcoal/20 pt-4">
                  <span className="text-xs tracking-[0.2em] text-terracotta">{String(i + 1).padStart(2, '0')}</span>
                  <span className="text-sm tabular-nums text-muted-foreground">
                    {formatPrice(item!.price, locale)}
                    {item!.unit && ` · ${item!.unit[locale]}`}
                  </span>
                </div>
                <h3 className="mt-3 font-serif text-2xl leading-tight">{item!.name[locale]}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item!.description[locale]}</p>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
