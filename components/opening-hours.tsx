import { site } from '@/content/site'
import { ui } from '@/content/ui'
import { displayTime } from '@/lib/hours'
import type { Locale } from '@/lib/i18n'
import { cn } from '@/lib/utils'

export function OpeningHours({ locale, className, showNote = true }: { locale: Locale; className?: string; showNote?: boolean }) {
  const t = ui[locale]
  return (
    <div className={className}>
      <dl className="divide-y divide-current/15 border-y border-current/15">
        {site.openingHours.map((row) => (
          <div key={row.label.en} className="flex items-baseline justify-between gap-6 py-3 text-sm">
            <dt className="opacity-80">{row.label[locale]}</dt>
            <dd className="font-medium tabular-nums">
              {row.opens && row.closes ? (
                <>
                  <time dateTime={row.opens}>{row.opens}</time>
                  {' – '}
                  <time dateTime={displayTime(row.closes)}>{displayTime(row.closes)}</time>
                </>
              ) : (
                t.hours.closed
              )}
            </dd>
          </div>
        ))}
      </dl>
      {showNote && site.openingHoursIsPlaceholder && (
        <p className={cn('mt-3 text-xs opacity-60')}>{t.hours.placeholderNote}</p>
      )}
    </div>
  )
}
