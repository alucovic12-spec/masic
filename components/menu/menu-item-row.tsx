import type { MenuItem } from '@/content/types'
import { ui } from '@/content/ui'
import { formatPrice } from '@/lib/format'
import type { Locale } from '@/lib/i18n'
import { cn } from '@/lib/utils'

export function MenuItemRow({
  item,
  locale,
  tone = 'light',
}: {
  item: MenuItem
  locale: Locale
  tone?: 'light' | 'dark'
}) {
  const t = ui[locale]
  return (
    <article className="py-6">
      <div className="flex items-baseline gap-4">
        <h3 className="font-display text-lg leading-snug md:text-xl">
          {item.name[locale]}
          {item.signature && (
            <span className="ml-3 inline-block translate-y-[-0.15em] align-middle text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-terracotta">
              {t.menu.signature}
            </span>
          )}
        </h3>
        <span aria-hidden="true" className={cn('flex-1 border-b border-dotted', tone === 'dark' ? 'border-ivory/30' : 'border-charcoal/30')} />
        <p className="shrink-0 font-display text-lg tabular-nums md:text-xl">
          {formatPrice(item.price, locale)}
          {item.unit && <span className="ml-1 text-xs font-normal text-current/60">/ {item.unit[locale]}</span>}
        </p>
      </div>
      <p className="mt-2 max-w-xl text-sm leading-relaxed text-current/70">{item.description[locale]}</p>
    </article>
  )
}
