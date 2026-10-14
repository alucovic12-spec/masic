import { LinkButton } from '@/components/shared/link-button'
import { Reveal } from '@/components/shared/reveal'
import { localizedPath, type Locale } from '@/lib/i18n/config'
import type { Messages } from '@/lib/i18n/messages'

export function CareersTeaser({ locale, m }: { locale: Locale; m: Messages }) {
  const c = m.home.careers

  return (
    <section aria-labelledby="careers-title" className="tone-glow group relative isolate overflow-hidden border-y border-brand-cream/10 py-28 sm:py-40">
      <div
        aria-hidden
        className="absolute -right-16 -top-16 -z-10 size-72 rounded-full bg-brand-glow/15 blur-3xl motion-safe:transition-transform motion-safe:duration-1000 group-hover:rotate-12 group-hover:scale-125"
      />
      <div
        aria-hidden
        className="absolute -bottom-24 right-32 -z-10 size-56 rounded-full border-[1px] border-brand-pulse/25 shadow-[0_0_80px_-20px_var(--brand-pulse)] motion-safe:transition-transform motion-safe:duration-1000 group-hover:-translate-y-6"
      />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <p className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.26em]">
            <span aria-hidden className="h-px w-10 bg-gradient-to-r from-brand-glow to-brand-blue" />
            {c.eyebrow}
          </p>
          <h2 id="careers-title" className="mt-6 max-w-5xl text-balance font-display text-6xl font-black leading-[0.86] tracking-[-0.07em] text-brand-cream sm:text-8xl lg:text-[7rem]">
            {c.title}
          </h2>
          <p className="mt-7 max-w-xl text-pretty text-lg font-light leading-relaxed text-brand-cream/68">{c.text}</p>
          <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
            <LinkButton href={localizedPath(locale, 'careers')} className="bg-brand-cream text-brand-ink hover:bg-[#fffaf1]">
              {c.cta}
            </LinkButton>
            <span className="rounded-full border border-brand-cream/20 bg-brand-cream/[0.05] px-4 py-2 text-sm text-brand-cream/70 backdrop-blur transition-all hover:-translate-y-0.5 hover:border-brand-glow/50 hover:text-brand-cream hover:shadow-[0_0_24px_-8px_var(--brand-glow)]">
              {c.quick}
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
