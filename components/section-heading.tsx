import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

export function Eyebrow({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <p
      className={cn(
        'flex items-center gap-3 text-[0.7rem] font-medium uppercase tracking-[0.28em] text-current/70',
        className,
      )}
    >
      <span aria-hidden="true" className="h-px w-8 bg-current/50" />
      {children}
    </p>
  )
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  id,
  className,
  action,
}: {
  eyebrow: string
  title: string
  intro?: string
  id?: string
  className?: string
  action?: ReactNode
}) {
  return (
    <div className={cn('flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between', className)}>
      <div className="max-w-2xl">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h2 id={id} className="mt-5 font-serif text-4xl leading-[1.05] tracking-tight md:text-5xl lg:text-6xl">
          {title}
        </h2>
      </div>
      {(intro || action) && (
        <div className="flex max-w-sm flex-col items-start gap-5">
          {intro && <p className="leading-relaxed text-current/75">{intro}</p>}
          {action}
        </div>
      )}
    </div>
  )
}
