import type { Metadata } from 'next'
import { LinkButton } from '@/components/shared/link-button'
import { localizedPath, type Locale, type RouteKey } from '@/lib/i18n/config'
import { getMessages } from '@/lib/i18n/messages'
import { buildMetadata } from '@/lib/seo'

type Props = { params: Promise<{ locale: string }> }

/**
 * Temporary route body for pages that are built in a later phase.
 * Each route file swaps this factory for its real page component when its phase is implemented.
 */
export function upcomingRoute(key: RouteKey) {
  async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { locale } = await params
    return buildMetadata(locale as Locale, key)
  }

  async function Page({ params }: Props) {
    const locale = (await params).locale as Locale
    const m = getMessages(locale)
    return (
      <div className="mx-auto flex min-h-[60svh] max-w-3xl flex-col items-start justify-center px-4 py-24 sm:px-6">
        <p className="text-xs uppercase tracking-[0.28em] text-primary">{m.upcoming.eyebrow}</p>
        <h1 className="mt-3 text-balance font-display text-3xl leading-tight sm:text-5xl">{m.pages[key].title}</h1>
        <p className="mt-5 max-w-xl text-lg text-muted-foreground">{m.upcoming.text}</p>
        <LinkButton href={localizedPath(locale, 'home')} variant="outline" className="mt-8">
          {m.upcoming.back}
        </LinkButton>
      </div>
    )
  }

  return { generateMetadata, Page }
}
