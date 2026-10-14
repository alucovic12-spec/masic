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
        'group h-12 min-w-11 gap-2 rounded-full px-6 text-sm font-normal tracking-wide motion-safe:transition-all motion-safe:hover:-translate-y-0.5',
        variant === 'default' &&
          '[a]:hover:bg-primary hover:shadow-[0_12px_32px_-8px_var(--primary)] hover:brightness-105',
        variant === 'outline' &&
          'border-2 border-foreground bg-transparent text-foreground hover:bg-foreground hover:text-primary-foreground dark:border-foreground dark:hover:bg-foreground dark:hover:text-primary-foreground',
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
