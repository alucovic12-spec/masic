import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

const tones = {
  base: 'bg-background',
  raised: 'bg-muted',
  green: 'tone-green',
  sun: 'tone-sun',
  ink: 'tone-ink',
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
      className={cn(tones[tone], 'overflow-x-clip', compact ? 'py-10 sm:py-14' : 'py-20 sm:py-28')}
    >
      <div className={cn('mx-auto max-w-7xl px-4 sm:px-6 lg:px-8', className)}>{children}</div>
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
      <p className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.26em] text-primary">
        <span aria-hidden className="h-px w-10 bg-primary" />
        {eyebrow}
      </p>
      <h2 id={id} className="mt-5 text-balance font-display text-4xl font-semibold leading-[1.04] sm:text-6xl">
        {title}
      </h2>
      {intro ? <p className="mt-6 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">{intro}</p> : null}
    </div>
  )
}
