import { ArrowUpRight } from 'lucide-react'
import Link from 'next/link'
import type { ComponentProps } from 'react'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'

type LinkButtonProps = ComponentProps<typeof Link> & {
  variant?: 'default' | 'outline' | 'ghost' | 'secondary'
}

export function LinkButton({ variant = 'default', className, children, ...props }: LinkButtonProps) {
  return (
    <Link
      className={cn(
        buttonVariants({ variant }),
        'group h-12 min-w-11 gap-2 rounded-full px-6 text-sm font-semibold tracking-[0.01em] motion-safe:transition-all motion-safe:duration-300 motion-safe:hover:-translate-y-1',
        variant === 'default' &&
          'bg-brand-cream text-brand-ink [a]:hover:bg-[#fffaf1] hover:shadow-[0_14px_42px_-12px_rgb(255_246_232_/_55%)]',
        variant === 'outline' &&
          'border border-brand-cream/25 bg-brand-cream/[0.04] text-brand-cream backdrop-blur hover:border-brand-cream/60 hover:bg-brand-cream hover:text-brand-ink dark:border-brand-cream/25 dark:hover:bg-brand-cream dark:hover:text-brand-ink',
        variant === 'ghost' &&
          'text-foreground hover:bg-foreground/10 hover:text-foreground dark:hover:bg-foreground/10',
        className,
      )}
      {...props}
    >
      {children}
      <ArrowUpRight
        aria-hidden
        className="size-4 shrink-0 motion-safe:transition-transform motion-safe:group-hover:-translate-y-0.5 motion-safe:group-hover:translate-x-0.5"
      />
    </Link>
  )
}
