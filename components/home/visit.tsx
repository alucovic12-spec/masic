import { Clock, Mail, MapPin, Phone, Share2 } from 'lucide-react'
import { LinkButton } from '@/components/shared/link-button'
import { Reveal } from '@/components/shared/reveal'
import { Section, SectionHeading } from '@/components/shared/section'
import { localizedPath, type Locale } from '@/lib/i18n/config'
import type { Messages } from '@/lib/i18n/messages'
import { site } from '@/lib/site'

const iconBox =
  'mt-0.5 flex size-10 shrink-0 items-center justify-center rounded-full border border-brand-cream/15 bg-brand-cream/[0.04] text-brand-glow transition-all duration-300 group-hover:-translate-y-1 group-hover:border-brand-glow/50 group-hover:bg-brand-glow/10 group-hover:shadow-[0_0_24px_-8px_var(--brand-glow)]'

export function Visit({ locale, m }: { locale: Locale; m: Messages }) {
  const v = m.home.visit
  const socials = Object.entries(site.social).filter((entry): entry is [string, string] => Boolean(entry[1]))

  const rows = [
    { icon: MapPin, label: v.address, value: site.contact.address, pending: v.addressPending },
    { icon: Clock, label: v.hours, value: site.contact.hours, pending: v.hoursPending },
    { icon: Phone, label: v.phone, value: site.contact.phone, pending: v.phonePending },
    { icon: Mail, label: v.email, value: site.contact.email, pending: v.emailPending },
  ]

  return (
    <Section labelledBy="visit-title" tone="night">
      <div className="grid gap-14 lg:grid-cols-2">
        <Reveal>
          <SectionHeading id="visit-title" eyebrow={v.eyebrow} title={v.title} />
          <dl className="mt-12 grid gap-3 sm:grid-cols-2">
            {rows.map(({ icon: Icon, label, value, pending }) => (
              <div key={label} className="group flex min-h-28 gap-4 rounded-2xl border border-brand-cream/10 bg-brand-cream/[0.035] p-5 backdrop-blur transition-all duration-300 hover:border-brand-glow/25 hover:bg-brand-cream/[0.06]">
                <span className={iconBox}>
                  <Icon aria-hidden className="size-4" />
                </span>
                <div>
                  <dt className="text-xs uppercase tracking-[0.22em] text-muted-foreground">{label}</dt>
                  <dd className={value ? 'mt-1 text-lg' : 'mt-1 text-lg text-muted-foreground'}>
                    {value && Icon === Mail ? (
                      <a href={`mailto:${value}`} className="inline-flex min-h-11 items-center hover:text-primary">
                        {value}
                      </a>
                    ) : (
                      (value ?? pending)
                    )}
                  </dd>
                </div>
              </div>
            ))}
            <div className="group flex min-h-28 gap-4 rounded-2xl border border-brand-cream/10 bg-brand-cream/[0.035] p-5 backdrop-blur transition-all duration-300 hover:border-brand-glow/25 hover:bg-brand-cream/[0.06]">
              <span className={iconBox}>
                <Share2 aria-hidden className="size-4" />
              </span>
              <div>
                <dt className="text-xs uppercase tracking-[0.22em] text-muted-foreground">{v.social}</dt>
                <dd className="mt-1 text-lg">
                  {socials.length > 0 ? (
                    <ul className="flex flex-wrap gap-x-5">
                      {socials.map(([name, url]) => (
                        <li key={name}>
                          <a href={url} target="_blank" rel="noopener noreferrer" className="flex min-h-11 items-center capitalize hover:text-primary">
                            {name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <span className="text-muted-foreground">{v.socialPending}</span>
                  )}
                </dd>
              </div>
            </div>
          </dl>

          <div className="mt-12 flex flex-col gap-3 sm:flex-row">
            <LinkButton href={localizedPath(locale, 'reservations')}>{v.reserve}</LinkButton>
            <LinkButton href={localizedPath(locale, 'contact')} variant="outline">
              {v.contact}
            </LinkButton>
          </div>
        </Reveal>

        <Reveal>
          <div
            role="img"
            aria-label={v.addressPending}
            className="tone-ink glow-card group relative flex aspect-[4/3] h-full min-h-72 w-full items-center justify-center overflow-hidden rounded-[2.5rem] border border-brand-glow/20 bg-[radial-gradient(circle_at_30%_20%,rgb(110_231_242_/_18%),transparent_35%),var(--brand-ink)]"
          >
            <div
              aria-hidden
              className="absolute inset-0 bg-[radial-gradient(circle_at_center,color-mix(in_oklab,var(--brand-gold)_22%,transparent),transparent_65%)] opacity-60 transition-opacity duration-500 group-hover:opacity-100"
            />
            <span className="relative flex size-20 items-center justify-center rounded-full border border-brand-cream/20 bg-brand-cream text-brand-ink shadow-[0_0_60px_-12px_rgb(255_246_232_/_60%)] motion-safe:transition-all motion-safe:duration-500 group-hover:-translate-y-3 group-hover:scale-110 group-hover:shadow-[0_0_80px_-8px_rgb(110_231_242_/_55%)]">
              <MapPin aria-hidden className="size-9" />
            </span>
          </div>
        </Reveal>
      </div>
    </Section>
  )
}
