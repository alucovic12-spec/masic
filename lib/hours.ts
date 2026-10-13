import type { DayOfWeek, OpeningHoursRow } from '@/content/types'

export const weekOrder: DayOfWeek[] = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
]

const TIME_ZONE = 'Europe/Zagreb'

function toMinutes(time: string): number {
  const [h, m] = time.split(':').map(Number)
  return h * 60 + m
}

function zagrebNow(date: Date): { day: DayOfWeek; minutes: number } {
  const parts = new Intl.DateTimeFormat('en-GB', {
    timeZone: TIME_ZONE,
    weekday: 'long',
    hour: '2-digit',
    minute: '2-digit',
    hourCycle: 'h23',
  }).formatToParts(date)
  const get = (type: string) => parts.find((p) => p.type === type)?.value ?? ''
  return {
    day: get('weekday') as DayOfWeek,
    minutes: Number(get('hour')) * 60 + Number(get('minute')),
  }
}

function rowFor(hours: OpeningHoursRow[], day: DayOfWeek) {
  return hours.find((row) => row.days.includes(day) && row.opens && row.closes)
}

export type OpenStatus =
  | { kind: 'open'; closes: string }
  | { kind: 'closed'; opens: string; day: DayOfWeek; isToday: boolean }
  | { kind: 'unknown' }

/** Computes open/closed state in the restaurant's time zone (Europe/Zagreb). */
export function getOpenStatus(hours: OpeningHoursRow[], date = new Date()): OpenStatus {
  const { day, minutes } = zagrebNow(date)
  const today = rowFor(hours, day)

  if (today?.opens && today.closes) {
    const open = toMinutes(today.opens)
    const close = toMinutes(today.closes)
    if (minutes >= open && minutes < close) return { kind: 'open', closes: today.closes }
    if (minutes < open) return { kind: 'closed', opens: today.opens, day, isToday: true }
  }

  const start = weekOrder.indexOf(day)
  for (let offset = 1; offset <= 7; offset++) {
    const next = weekOrder[(start + offset) % 7]
    const row = rowFor(hours, next)
    if (row?.opens) return { kind: 'closed', opens: row.opens, day: next, isToday: false }
  }
  return { kind: 'unknown' }
}

export function displayTime(time: string): string {
  return time === '24:00' ? '00:00' : time
}
