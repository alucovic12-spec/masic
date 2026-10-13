import Link from 'next/link'
import { legalNavigation, navigation, routes, site } from '@/content/site'
import { ui } from '@/content/ui'
import { localePath, type Locale } from '@/lib/i18n'
import { Wordmark } from '@/components/wordmark'
import { OpeningHours } from '@/components/opening-hours'
import { CookieSettingsButton } from '@/components/consent-banner'
import { actionStyles } from '@/components/action-link'

export function SiteFooter({ locale }: { locale: Locale }) {
  const t = ui[locale]
  const year = new Date().getFullYear()
  const { contact } = site

  return (
    <footer className="bg-charcoal text-ivory">
      <div className="shell pb-10 pt-20 lg:pt-28">
        <div className="flex flex-col gap-10 border-b border-ivory/15 pb-16 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <Wordmark size="lg" />
            <p className="mt-6 max-w-md font-display text-xl font-medium text-ivory/80">{site.tagline[locale]}</p>
          </div>
          <Link href={`${localePath(locale, routes.contact)}#rezervacija`} className={actionStyles('primary', 'self-start lg:self-auto')}>
            {t.reserve}
          </Link>
        </div>

        <div className="grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h2 className="text-[0.7rem] uppercase tracking-[0.24em] text-ivory/60">{t.footer.navigation}</h2>
            <ul className="mt-5 flex flex-col gap-3 text-sm">
              {navigation.map((item) => (
                <li key={item.route}>
                  <Link href={localePath(locale, routes[item.route])} className="text-ivory/85 transition-colors hover:text-ivory">
                    {item.label[locale]}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-[0.7rem] uppercase tracking-[0.24em] text-ivory/60">{t.footer.visit}</h2>
            <address className="mt-5 flex flex-col gap-3 text-sm not-italic text-ivory/85">
              <span>
                {contact.address.street[locale]}
                <br />
                {contact.address.postalCode} {contact.address.city[locale]}
              </span>
              <a href={contact.phone.href} className="transition-colors hover:text-ivory">
                {contact.phone.display}
              </a>
              <a href={`mailto:${contact.email}`} className="transition-colors hover:text-ivory">
                {contact.email}
              </a>
            </address>
          </div>

          <div>
            <h2 className="text-[0.7rem] uppercase tracking-[0.24em] text-ivory/60">{t.hours.title}</h2>
            <OpeningHours locale={locale} className="mt-5" showNote={false} />
          </div>

          <div>
            <h2 className="text-[0.7rem] uppercase tracking-[0.24em] text-ivory/60">{t.footer.follow}</h2>
            <a
              href={site.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-block font-display text-2xl transition-opacity hover:opacity-80"
            >
              {site.instagram.handle}
              <span className="sr-only"> {t.contact.opensInNewTab}</span>
            </a>
            <p className="mt-2 text-sm text-ivory/60">{t.instagram.follow}</p>
          </div>
        </div>

        <div className="flex flex-col gap-4 border-t border-ivory/15 pt-8 text-xs text-ivory/60 md:flex-row md:items-center md:justify-between">
          <p>
            © {year} {site.name}. {t.footer.rights}
          </p>
          <nav aria-label={t.footer.legal}>
            <ul className="flex flex-wrap items-center gap-x-6 gap-y-2">
              {legalNavigation.map((item) => (
                <li key={item.route}>
                  <Link href={localePath(locale, routes[item.route])} className="transition-colors hover:text-ivory">
                    {item.label[locale]}
                  </Link>
                </li>
              ))}
              <li>
                <CookieSettingsButton label={t.footer.cookieSettings} />
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  )
}
