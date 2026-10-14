import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

const tones = {
  base: 'bg-background',
  raised: 'bg-muted',
  green: 'tone-green',
  sun: 'tone-sun',
  ink: 'tone-ink',
  night: 'tone-night',
  dusk: 'tone-dusk',
} as const

type SectionProps = {
  id?: string
  labelledBy?: string
  tone?: keyof typeof tones
  compact?: boolean
  className?: string
  children: ReactNode
}

export function Section({ id, labelledBy, tone = 'base', compact = false, className, children }: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      className={cn(tones[tone], 'section-atmosphere relative overflow-x-clip', compact ? 'py-10 sm:py-14' : 'py-24 sm:py-32')}
    >
      <div className={cn('relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8', className)}>{children}</div>
    </section>
  )
}

type SectionHeadingProps = {
  id: string
  eyebrow: string
  title: string
  intro?: string
  className?: string
}

export function SectionHeading({ id, eyebrow, title, intro, className }: SectionHeadingProps) {
  return (
    <div className={cn('max-w-3xl', className)}>
      <p className="font-accent inline-flex items-center gap-3 text-[0.68rem] font-semibold uppercase tracking-[0.3em] text-brand-sun">
        <span aria-hidden className="h-px w-10 bg-brand-sun/70" />
        {eyebrow}
      </p>
      <h2 id={id} className="mt-5 max-w-[14ch] text-balance font-display text-5xl font-semibold leading-[0.96] tracking-[-0.045em] text-brand-cream sm:text-7xl lg:text-8xl">
        {title}
      </h2>
      {intro ? <p className="mt-6 max-w-2xl text-pretty text-base leading-relaxed font-light text-brand-cream/65 sm:text-lg">{intro}</p> : null}
    </div>
  )
}
