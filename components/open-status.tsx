'use client'

import { useEffect, useState } from 'react'
import type { OpeningHoursRow } from '@/content/types'
import type { UiStrings } from '@/content/ui'
import { displayTime, getOpenStatus, type OpenStatus as Status } from '@/lib/hours'
import { format } from '@/lib/i18n'
import { cn } from '@/lib/utils'

export function OpenStatus({
  hours,
  labels,
  days,
  className,
}: {
  hours: OpeningHoursRow[]
  labels: UiStrings['status']
  days: UiStrings['days']
  className?: string
}) {
  const [status, setStatus] = useState<Status | null>(null)

  useEffect(() => {
    const update = () => setStatus(getOpenStatus(hours))
    update()
    const id = window.setInterval(update, 60_000)
    return () => window.clearInterval(id)
  }, [hours])

  let headline = labels.loading
  let detail = ''
  if (status?.kind === 'open') {
    headline = labels.open
    detail = format(labels.until, { time: displayTime(status.closes) })
  } else if (status?.kind === 'closed') {
    headline = labels.closed
    detail = status.isToday
      ? format(labels.opensToday, { time: status.opens })
      : format(labels.opensLater, { day: days[status.day], time: status.opens })
  }

  return (
    <p className={cn('flex items-center gap-3', className)} aria-live="polite">
      <span aria-hidden="true" className="relative flex size-2">
        {status?.kind === 'open' && (
          <span className="absolute inline-flex size-full animate-ping rounded-full bg-[oklch(0.75_0.12_140)] opacity-60" />
        )}
        <span
          className={cn(
            'relative inline-flex size-2 rounded-full',
            status?.kind === 'open' ? 'bg-[oklch(0.75_0.12_140)]' : 'bg-current opacity-50',
          )}
        />
      </span>
      <span>
        <span className="font-medium">{headline}</span>
        {detail && <span className="opacity-75"> · {detail}</span>}
      </span>
    </p>
  )
}
