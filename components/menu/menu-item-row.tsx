import { allergenLabels, dietaryLabels } from '@/content/menu'
import type { MenuItem } from '@/content/types'
import { ui } from '@/content/ui'
import { formatPrice } from '@/lib/format'
import type { Locale } from '@/lib/i18n'
import { cn } from '@/lib/utils'

export function MenuItemRow({
  item,
  locale,
  showAllergens = true,
  tone = 'light',
}: {
  item: MenuItem
  locale: Locale
  showAllergens?: boolean
  tone?: 'light' | 'dark'
}) {
  const t = ui[locale]
  return (
    <article className="py-6">
      <div className="flex items-baseline gap-4">
        <h3 className="font-serif text-xl leading-snug md:text-2xl">
          {item.name[locale]}
          {item.signature && (
            <span className="ml-3 inline-block translate-y-[-0.2em] align-middle font-sans text-[0.65rem] uppercase tracking-[0.2em] text-terracotta">
              {t.menu.signature}
            </span>
          )}
        </h3>
        <span aria-hidden="true" className={cn('flex-1 border-b border-dotted', tone === 'dark' ? 'border-ivory/30' : 'border-charcoal/30')} />
        <p className="shrink-0 font-serif text-xl tabular-nums">
          {formatPrice(item.price, locale)}
          {item.unit && <span className="ml-1 font-sans text-xs text-current/60">/ {item.unit[locale]}</span>}
        </p>
      </div>
      <p className="mt-2 max-w-xl text-sm leading-relaxed text-current/70">{item.description[locale]}</p>
      {(item.dietary.length > 0 || (showAllergens && item.allergens.length > 0)) && (
        <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs">
          {item.dietary.length > 0 && (
            <ul className="flex flex-wrap gap-1.5" aria-label={t.menu.dietaryTitle}>
              {item.dietary.map((tag) => (
                <li key={tag}>
                  <abbr
                    title={dietaryLabels[tag].label[locale]}
                    className={cn(
                      'inline-flex h-6 min-w-6 items-center justify-center border px-1.5 font-medium no-underline',
                      tag === 'spicy' ? 'border-terracotta/50 text-terracotta' : 'border-olive/50 text-olive',
                      tone === 'dark' && 'border-ivory/30 text-ivory/80',
                    )}
                  >
                    {dietaryLabels[tag].short[locale]}
                  </abbr>
                  <span className="sr-only">{dietaryLabels[tag].label[locale]}</span>
                </li>
              ))}
            </ul>
          )}
          {showAllergens && item.allergens.length > 0 && (
            <p className="text-current/60">
              <span className="font-medium">{t.menu.allergens}:</span>{' '}
              {item.allergens.map((code) => allergenLabels[code][locale]).join(', ')}
            </p>
          )}
        </div>
      )}
    </article>
  )
}
