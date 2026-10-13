'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { LOCALE_COOKIE, LOCALE_STORAGE_KEY, localeNames, locales, swapLocale, type Locale } from '@/lib/i18n'
import { cn } from '@/lib/utils'

export function persistLocale(locale: Locale) {
  try {
    window.localStorage.setItem(LOCALE_STORAGE_KEY, locale)
  } catch {
    // Storage unavailable — the cookie below still records the choice.
  }
  document.cookie = `${LOCALE_COOKIE}=${locale}; path=/; max-age=31536000; samesite=lax`
}

export function LanguageSwitcher({
  locale,
  label,
  className,
  onNavigate,
}: {
  locale: Locale
  label: string
  className?: string
  onNavigate?: () => void
}) {
  const pathname = usePathname() ?? `/${locale}`

  return (
    <nav aria-label={label} className={cn('flex items-center text-xs font-medium tracking-[0.2em]', className)}>
      {locales.map((l, i) => {
        const active = l === locale
        return (
          <span key={l} className="flex items-center">
            {i > 0 && (
              <span aria-hidden="true" className="px-1.5 opacity-40">
                /
              </span>
            )}
            <Link
              href={swapLocale(pathname, l)}
              hrefLang={l}
              lang={l}
              aria-label={localeNames[l]}
              aria-current={active ? 'true' : undefined}
              onClick={() => {
                persistLocale(l)
                onNavigate?.()
              }}
              className={cn(
                'inline-flex min-h-10 min-w-8 items-center justify-center uppercase transition-opacity',
                active ? 'opacity-100 underline underline-offset-[6px]' : 'opacity-55 hover:opacity-100',
              )}
            >
              {l}
            </Link>
          </span>
        )
      })}
    </nav>
  )
}
