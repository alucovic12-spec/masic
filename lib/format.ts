import { intlLocale, type Locale } from '@/lib/i18n'

export function formatPrice(value: number, locale: Locale): string {
  return new Intl.NumberFormat(intlLocale[locale], {
    style: 'currency',
    currency: 'EUR',
    minimumFractionDigits: 2,
  }).format(value)
}

export function formatDate(iso: string, locale: Locale): string {
  return new Intl.DateTimeFormat(intlLocale[locale], { dateStyle: 'long' }).format(new Date(`${iso}T12:00:00`))
}
