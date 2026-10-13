import { MapPin } from 'lucide-react'
import { site } from '@/content/site'
import { ui } from '@/content/ui'
import type { Locale } from '@/lib/i18n'
import { actionStyles } from '@/components/action-link'
import { cn } from '@/lib/utils'

/** Stands in for an embedded map until the address is confirmed. Swap for a Google Maps / Mapbox embed later. */
export function MapPlaceholder({ locale, className }: { locale: Locale; className?: string }) {
  const t = ui[locale]
  const { address } = site.contact
  return (
    <figure
      className={cn(
        'relative isolate flex aspect-[4/3] w-full flex-col items-center justify-center overflow-hidden bg-olive p-8 text-center text-ivory',
        className,
      )}
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 opacity-20"
        style={{
          backgroundImage:
            'linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />
      <div aria-hidden="true" className="absolute left-1/2 top-[38%] -z-10 size-40 -translate-x-1/2 -translate-y-1/2 rounded-full border border-ivory/30" />
      <MapPin className="size-8" aria-hidden="true" />
      <figcaption className="mt-5 flex flex-col items-center gap-2">
        <span className="text-[0.7rem] uppercase tracking-[0.24em] opacity-75">{t.contact.mapTitle}</span>
        <span className="font-display text-2xl">{site.name}</span>
        <span className="text-sm opacity-85">
          {address.street[locale]}, {address.postalCode} {address.city[locale]}
        </span>
        <span className="mt-1 max-w-xs text-xs opacity-70">{t.contact.mapNote}</span>
      </figcaption>
      <a
        href={site.contact.mapUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={actionStyles('light', 'mt-6 min-h-11')}
      >
        {t.contact.directions}
        <span className="sr-only"> {t.contact.opensInNewTab}</span>
      </a>
    </figure>
  )
}
