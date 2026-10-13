export const locales = ['hr', 'en'] as const
export type Locale = (typeof locales)[number]

export const defaultLocale: Locale = 'hr'
export const LOCALE_STORAGE_KEY = 'masic-locale'
export const LOCALE_COOKIE = 'NEXT_LOCALE'

/** A value that exists in every supported language (field-level i18n, maps 1:1 to Sanity's internationalized fields). */
export type Localized<T = string> = Record<Locale, T>

export const localeNames: Localized = { hr: 'Hrvatski', en: 'English' }
export const ogLocale: Localized = { hr: 'hr_HR', en: 'en_GB' }
export const intlLocale: Localized = { hr: 'hr-HR', en: 'en-GB' }

export function isLocale(value: string | undefined): value is Locale {
  return !!value && (locales as readonly string[]).includes(value)
}

export function otherLocale(locale: Locale): Locale {
  return locale === 'hr' ? 'en' : 'hr'
}

/** Builds a locale-prefixed path. `path` is the route without locale, e.g. "/menu" or "" for home. */
export function localePath(locale: Locale, path = ''): string {
  const clean = path === '/' ? '' : path
  return `/${locale}${clean}`
}

/** Swaps the locale segment in an existing pathname, keeping the rest of the route. */
export function swapLocale(pathname: string, target: Locale): string {
  const segments = pathname.split('/')
  if (isLocale(segments[1])) {
    segments[1] = target
    return segments.join('/') || `/${target}`
  }
  return localePath(target, pathname)
}

export function format(template: string, values: Record<string, string | number>): string {
  return template.replace(/\{(\w+)\}/g, (_, key: string) => String(values[key] ?? ''))
}
