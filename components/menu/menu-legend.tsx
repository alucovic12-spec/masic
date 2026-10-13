import { allergenLabels, allergenOrder, dietaryLabels } from '@/content/menu'
import type { DietaryTag } from '@/content/types'
import { ui } from '@/content/ui'
import type { Locale } from '@/lib/i18n'
import { cn } from '@/lib/utils'

export function MenuLegend({ locale, className }: { locale: Locale; className?: string }) {
  const t = ui[locale]
  const tags = Object.keys(dietaryLabels) as DietaryTag[]

  return (
    <div className={cn('flex flex-col gap-8 bg-ivory-deep p-6 md:p-8', className)}>
      <h2 className="font-serif text-2xl">{t.menu.legendTitle}</h2>
      <div>
        <h3 className="text-[0.7rem] uppercase tracking-[0.24em] text-muted-foreground">{t.menu.dietaryTitle}</h3>
        <dl className="mt-4 grid gap-3 text-sm">
          {tags.map((tag) => (
            <div key={tag} className="flex items-center gap-3">
              <dt
                className={cn(
                  'inline-flex h-6 min-w-6 items-center justify-center border px-1.5 text-xs font-medium',
                  tag === 'spicy' ? 'border-terracotta/50 text-terracotta' : 'border-olive/50 text-olive',
                )}
              >
                {dietaryLabels[tag].short[locale]}
              </dt>
              <dd>{dietaryLabels[tag].label[locale]}</dd>
            </div>
          ))}
        </dl>
      </div>
      <div>
        <h3 className="text-[0.7rem] uppercase tracking-[0.24em] text-muted-foreground">{t.menu.allergenTitle}</h3>
        <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-1.5 text-sm text-foreground/80">
          {allergenOrder.map((code) => (
            <li key={code}>{allergenLabels[code][locale]}</li>
          ))}
        </ul>
      </div>
      <div className="flex flex-col gap-3 border-t border-charcoal/15 pt-6 text-sm leading-relaxed text-muted-foreground">
        <p>{t.menu.allergyNote}</p>
        <p>{t.menu.priceNote}</p>
      </div>
    </div>
  )
}
