'use client'

import { useParams } from 'next/navigation'
import { ActionLink } from '@/components/action-link'
import { ui } from '@/content/ui'
import { defaultLocale, isLocale, localePath } from '@/lib/i18n'

export default function NotFound() {
  const params = useParams<{ locale?: string }>()
  const locale = isLocale(params?.locale) ? params.locale : defaultLocale
  const t = ui[locale].notFound

  return (
    <section className="bg-charcoal text-ivory">
      <div className="shell flex min-h-[80svh] flex-col justify-center gap-6 py-36">
        <p className="font-serif text-8xl text-terracotta">404</p>
        <h1 className="max-w-2xl font-serif text-5xl leading-[1] md:text-7xl">{t.title}</h1>
        <p className="max-w-md text-lg text-ivory/75">{t.body}</p>
        <ActionLink href={localePath(locale)} variant="light" className="mt-4 self-start">
          {t.back}
        </ActionLink>
      </div>
    </section>
  )
}
