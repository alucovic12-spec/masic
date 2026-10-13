import type { ReactNode } from 'react'
import { Eyebrow } from '@/components/section-heading'

export function PageHeader({
  eyebrow,
  title,
  lead,
  children,
}: {
  eyebrow: string
  title: string
  lead?: string
  children?: ReactNode
}) {
  return (
    <section className="bg-charcoal text-ivory">
      <div className="shell pb-16 pt-36 md:pb-24 md:pt-44">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl animate-rise">
            <Eyebrow>{eyebrow}</Eyebrow>
            <h1 className="mt-6 font-display text-5xl leading-[1] tracking-tight md:text-7xl">{title}</h1>
          </div>
          {lead && <p className="max-w-md text-lg leading-relaxed text-ivory/75">{lead}</p>}
        </div>
        {children}
      </div>
    </section>
  )
}
