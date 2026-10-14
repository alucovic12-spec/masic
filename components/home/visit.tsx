import { Clock, Mail, MapPin, Phone, Share2 } from 'lucide-react'
import { LinkButton } from '@/components/shared/link-button'
import { Reveal } from '@/components/shared/reveal'
import { Section, SectionHeading } from '@/components/shared/section'
import { localizedPath, type Locale } from '@/lib/i18n/config'
import type { Messages } from '@/lib/i18n/messages'
import { site } from '@/lib/site'

const iconBox =
  'mt-0.5 flex size-10 shrink-0 items-center justify-center rounded-full border border-foreground/20 text-primary transition-colors group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground'

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
    <Section labelledBy="visit-title">
      <div className="grid gap-14 lg:grid-cols-2">
        <Reveal>
          <SectionHeading id="visit-title" eyebrow={v.eyebrow} title={v.title} />
          <dl className="mt-12 space-y-6">
            {rows.map(({ icon: Icon, label, value, pending }) => (
              <div key={label} className="group flex gap-4">
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
            <div className="group flex gap-4">
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
            className="tone-ink soft-noise group relative flex aspect-[4/3] h-full min-h-72 w-full items-center justify-center overflow-hidden rounded-[4rem_1rem_4rem_1rem] border-2 border-brand-ink shadow-[16px_16px_0_0_var(--brand-violet)] transition-all hover:shadow-[20px_20px_0_0_var(--brand-green)]"
          >
            <div
              aria-hidden
              className="absolute inset-0 bg-[radial-gradient(circle_at_center,color-mix(in_oklab,var(--brand-gold)_22%,transparent),transparent_65%)] opacity-60 transition-opacity duration-500 group-hover:opacity-100"
            />
            <span className="relative flex size-20 items-center justify-center rounded-full bg-brand-gold text-brand-ink motion-safe:transition-transform motion-safe:duration-500 group-hover:-translate-y-2 group-hover:scale-110">
              <MapPin aria-hidden className="size-9" />
            </span>
          </div>
        </Reveal>
      </div>
    </Section>
  )
}
