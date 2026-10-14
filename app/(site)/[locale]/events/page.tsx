import type { Metadata } from 'next'
import { EventBrowser } from '@/components/events/event-browser'
import { getEvents } from '@/lib/events/get-events'
import type { Locale } from '@/lib/i18n/config'
import { getMessages } from '@/lib/i18n/messages'
import { buildMetadata } from '@/lib/seo'
import { site } from '@/lib/site'

export const revalidate = 3600

type Props = { params: Promise<{ locale: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  return buildMetadata(locale as Locale, 'events')
}

export default async function EventsPage({ params }: Props) {
  const locale = (await params).locale as Locale
  const m = getMessages(locale)
  const { upcoming, past } = getEvents(locale)
  const showNotice = site.showPlaceholders && [...upcoming, ...past].some((event) => event.placeholder)

  return (
    <>
      <header className="mx-auto max-w-5xl px-4 pb-10 pt-14 sm:px-6 sm:pb-12 sm:pt-20 lg:px-8">
        <p className="text-xs uppercase tracking-[0.28em] text-primary">{m.events.eyebrow}</p>
        <h1 className="mt-3 text-balance font-display text-3xl leading-tight sm:text-5xl">
          {m.pages.events.title}
        </h1>
        <p className="mt-4 max-w-xl text-pretty text-lg text-muted-foreground">{m.events.intro}</p>
        {showNotice ? (
          <p className="mt-5 inline-block rounded-full border border-dashed border-foreground/30 px-4 py-2 text-xs text-muted-foreground">
            {m.events.temporaryNotice}
          </p>
        ) : null}
      </header>

      <EventBrowser locale={locale} labels={m.events} upcoming={upcoming} past={past} />
    </>
  )
}
