import type { Metadata } from 'next'
import { CareersApplication } from '@/components/careers/careers-application'
import type { Locale } from '@/lib/i18n/config'
import { getMessages } from '@/lib/i18n/messages'
import { buildMetadata } from '@/lib/seo'

type Props = { params: Promise<{ locale: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  return buildMetadata(locale as Locale, 'careers')
}

export default async function CareersPage({ params }: Props) {
  const locale = (await params).locale as Locale
  const c = getMessages(locale).careersPage

  const aside = (
    <div className="flex h-fit flex-col gap-6">
      <section aria-labelledby="seeking-title" className="rounded-2xl border border-border p-6">
        <h2 id="seeking-title" className="font-display text-2xl">
          {c.seekingTitle}
        </h2>
        <ul className="mt-4 space-y-3">
          {c.seeking.map((item) => (
            <li key={item} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
              <span aria-hidden className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="how-title" className="rounded-2xl border border-border p-6">
        <h2 id="how-title" className="font-display text-2xl">
          {c.how.title}
        </h2>
        <ol className="mt-4 space-y-4">
          {c.how.items.map((item, index) => (
            <li key={item} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
              <span aria-hidden className="font-display text-2xl leading-none text-primary">
                {index + 1}
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ol>
        <p className="mt-5 border-t border-border pt-4 text-xs leading-relaxed text-muted-foreground">
          {c.openNote}
        </p>
      </section>
    </div>
  )

  return (
    <>
      <header className="mx-auto max-w-5xl px-4 pb-10 pt-14 sm:px-6 sm:pb-12 sm:pt-20 lg:px-8">
        <p className="text-xs uppercase tracking-[0.28em] text-primary">{c.eyebrow}</p>
        <h1 className="mt-3 text-balance font-display text-3xl leading-tight sm:text-5xl">
          {c.heading}
        </h1>
        <p className="mt-4 max-w-2xl text-pretty text-lg text-muted-foreground">{c.subtitle}</p>
      </header>

      <div className="mx-auto max-w-5xl px-4 pb-20 sm:px-6 lg:px-8">
        <CareersApplication locale={locale} labels={c} aside={aside} />
      </div>
    </>
  )
}
