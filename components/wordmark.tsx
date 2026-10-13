import { cn } from '@/lib/utils'

export function Wordmark({ className, size = 'md' }: { className?: string; size?: 'md' | 'lg' }) {
  return (
    <span className={cn('flex flex-col leading-none', className)}>
      <span className={cn('font-sans uppercase tracking-[0.36em] opacity-70', size === 'lg' ? 'text-xs' : 'text-[0.6rem]')}>
        Restoran
      </span>
      <span className={cn('font-display tracking-tight', size === 'lg' ? 'mt-2 text-6xl md:text-7xl' : 'mt-1 text-2xl')}>
        Mašić
      </span>
    </span>
  )
}
