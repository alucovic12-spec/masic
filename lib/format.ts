import { intlLocale, type Locale } from '@/lib/i18n'

/** Formats a price in convertible marks, e.g. "12,00 KM". */
export function formatPrice(value: number, locale: Locale): string {
  const amount = new Intl.NumberFormat(intlLocale[locale], {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value)
  return `${amount}\u00A0KM`
}

export function formatDate(iso: string, locale: Locale): string {
  return new Intl.DateTimeFormat(intlLocale[locale], { dateStyle: 'long' }).format(new Date(`${iso}T12:00:00`))
}
