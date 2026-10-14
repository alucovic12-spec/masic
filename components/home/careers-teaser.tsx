import { LinkButton } from '@/components/shared/link-button'
import { Reveal } from '@/components/shared/reveal'
import { localizedPath, type Locale } from '@/lib/i18n/config'
import type { Messages } from '@/lib/i18n/messages'

export function CareersTeaser({ locale, m }: { locale: Locale; m: Messages }) {
  const c = m.home.careers

  return (
    <section aria-labelledby="careers-title" className="tone-sun group relative isolate overflow-hidden py-24 sm:py-32">
      <div
        aria-hidden
        className="absolute -right-16 -top-16 -z-10 size-72 rounded-full bg-brand-coral motion-safe:transition-transform motion-safe:duration-1000 group-hover:scale-125"
      />
      <div
        aria-hidden
        className="absolute -bottom-24 right-32 -z-10 size-56 rounded-full border-[18px] border-brand-ink motion-safe:transition-transform motion-safe:duration-1000 group-hover:-translate-y-6"
      />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <p className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.26em]">
            <span aria-hidden className="h-px w-10 bg-brand-ink" />
            {c.eyebrow}
          </p>
          <h2 id="careers-title" className="mt-6 max-w-4xl text-balance font-display text-4xl font-semibold leading-[1.02] sm:text-7xl">
            {c.title}
          </h2>
          <p className="mt-7 max-w-xl text-pretty text-lg">{c.text}</p>
          <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
            <LinkButton href={localizedPath(locale, 'careers')} className="bg-brand-ink text-brand-cream hover:bg-brand-ink">
              {c.cta}
            </LinkButton>
            <span className="rounded-full border-2 border-dashed border-brand-ink/60 px-4 py-2 text-sm transition-colors hover:border-brand-ink hover:bg-brand-ink hover:text-brand-cream">
              {c.quick}
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
