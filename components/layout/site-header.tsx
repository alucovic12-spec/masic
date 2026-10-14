import { ArrowUpRight } from 'lucide-react'
import Link from 'next/link'
import { BrandWordmark } from '@/components/layout/brand-wordmark'
import { DesktopNav } from '@/components/layout/desktop-nav'
import { HeaderShell } from '@/components/layout/header-shell'
import { LanguageSwitcher } from '@/components/layout/language-switcher'
import { localizedPath, type Locale } from '@/lib/i18n/config'
import type { Messages } from '@/lib/i18n/messages'
import type { NavItem } from '@/lib/navigation'

type SiteHeaderProps = { locale: Locale; m: Messages; items: NavItem[] }

export function SiteHeader({ locale, m, items }: SiteHeaderProps) {
  const navItems = items.filter((item) => item.key !== 'home' && item.key !== 'reservations')
  const reservationsHref = localizedPath(locale, 'reservations')

  return (
    <HeaderShell className="tone-ink sticky top-0 z-30">
      <div
        className={[
          'relative bg-[linear-gradient(135deg,#172139_0%,#0d1321_62%,#132b38_100%)] transition-[background-color,box-shadow,backdrop-filter] duration-500',
          'group-data-[scrolled=true]/header:bg-[#0d1321]/85 group-data-[scrolled=true]/header:backdrop-blur-xl',
          'group-data-[scrolled=true]/header:shadow-[0_20px_44px_-22px_rgba(0,0,0,0.9)]',
        ].join(' ')}
      >
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(40%_220%_at_12%_-40%,rgba(199,243,107,0.18),transparent_70%),radial-gradient(35%_220%_at_92%_140%,rgba(35,108,114,0.46),transparent_70%)]"
        />
        <div className="relative mx-auto flex h-16 max-w-[90rem] items-center justify-between gap-4 px-4 2xl:gap-6 sm:h-[4.5rem] sm:px-6 lg:px-8 xl:h-24">
          <BrandWordmark
            locale={locale}
            variant="wordmark"
            optical
            className="origin-left transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-data-[scrolled=true]/header:scale-[0.88]"
            logoClassName="text-[1.3rem] min-[420px]:text-[1.5rem] sm:text-[1.7rem] xl:text-[1.7rem] 2xl:text-[2rem]"
          />

          <DesktopNav items={navItems} label={m.nav.primaryLabel} className="hidden xl:block" />

          <div className="flex items-center gap-3">
            <LanguageSwitcher locale={locale} label={m.nav.language} className="border-brand-gold/30 lg:hidden" />
            <LanguageSwitcher
              locale={locale}
              label={m.nav.language}
              compact
              className="hidden border-brand-gold/30 bg-white/[0.04] backdrop-blur-md transition-colors hover:border-brand-gold/70 lg:inline-flex"
            />
            <Link
              href={reservationsHref}
              className="group/cta relative hidden h-11 items-center gap-3 overflow-hidden rounded-[1rem_1rem_1rem_0.3rem] bg-brand-lime pl-5 pr-1.5 xl:pl-5 2xl:pl-7 font-display text-[0.68rem] font-medium uppercase tracking-[0.16em] text-brand-ink transition-[background-color,box-shadow,transform] duration-300 hover:bg-brand-cream hover:shadow-[0_10px_30px_-8px_rgba(255,224,163,0.7)] motion-safe:hover:-translate-y-0.5 sm:inline-flex 2xl:h-12 2xl:pl-7 2xl:text-[0.74rem]"
            >
              <span
                aria-hidden
                className="pointer-events-none absolute inset-y-0 -left-1/2 w-1/3 -skew-x-12 bg-white/50 opacity-0 blur-sm transition-all duration-700 group-hover/cta:left-[120%] group-hover/cta:opacity-100"
              />
              <span className="relative">{m.nav.reservations}</span>
              <span className="relative grid size-8 place-items-center rounded-full bg-brand-ink text-brand-gold transition-colors duration-300 group-hover/cta:bg-brand-green group-hover/cta:text-brand-sun 2xl:size-9">
                <ArrowUpRight
                  aria-hidden
                  className="size-4 transition-transform duration-300 motion-safe:group-hover/cta:-translate-y-0.5 motion-safe:group-hover/cta:translate-x-0.5"
                />
              </span>
            </Link>
          </div>
        </div>

        <div className="absolute inset-x-0 bottom-0 h-px bg-brand-gold/20" />
        <div
          aria-hidden
          style={{ transform: 'scaleX(var(--scroll-progress, 0))' }}
          className="absolute inset-x-0 bottom-0 h-[2px] origin-left bg-gradient-to-r from-brand-gold via-brand-cream to-brand-gold"
        />
      </div>
    </HeaderShell>
  )
}
