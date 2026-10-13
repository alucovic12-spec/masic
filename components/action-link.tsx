import Link from 'next/link'
import type { ComponentProps, ReactNode } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { cn } from '@/lib/utils'

type Variant = 'primary' | 'light' | 'outline-light' | 'outline-dark'

const base =
  'group inline-flex min-h-12 items-center justify-center gap-3 px-6 text-sm font-medium tracking-wide transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-offset-4 disabled:pointer-events-none disabled:opacity-60'

const variants: Record<Variant, string> = {
  primary: 'bg-terracotta text-ivory hover:bg-terracotta-deep',
  light: 'bg-ivory text-charcoal hover:bg-ivory-deep',
  'outline-light': 'border border-ivory/40 text-ivory hover:border-ivory hover:bg-ivory/10',
  'outline-dark': 'border border-charcoal/30 text-charcoal hover:border-charcoal hover:bg-charcoal/5',
}

export function actionStyles(variant: Variant = 'primary', className?: string) {
  return cn(base, variants[variant], className)
}

export function ActionLink({
  variant = 'primary',
  className,
  children,
  icon = true,
  ...props
}: ComponentProps<typeof Link> & { variant?: Variant; icon?: boolean; children: ReactNode }) {
  return (
    <Link className={actionStyles(variant, className)} {...props}>
      <span>{children}</span>
      {icon && (
        <ArrowUpRight
          aria-hidden="true"
          className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
        />
      )}
    </Link>
  )
}

/** Understated text link with an animated underline. */
export function TextLink({ className, children, ...props }: ComponentProps<typeof Link>) {
  return (
    <Link
      className={cn(
        'group inline-flex items-center gap-2 text-sm font-medium tracking-wide underline decoration-current/30 underline-offset-[6px] transition-[text-decoration-color] duration-300 hover:decoration-current',
        className,
      )}
      {...props}
    >
      {children}
      <ArrowUpRight
        aria-hidden="true"
        className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
      />
    </Link>
  )
}
