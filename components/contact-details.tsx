import { Mail, MapPin, Phone } from 'lucide-react'
import { InstagramIcon as Instagram } from '@/components/icons/instagram-icon'
import { site } from '@/content/site'
import { ui } from '@/content/ui'
import type { Locale } from '@/lib/i18n'

export function ContactDetails({ locale }: { locale: Locale }) {
  const t = ui[locale]
  const { contact } = site
  const rows = [
    { icon: Phone, label: t.contact.phone, value: contact.phone.display, href: contact.phone.href },
    { icon: Mail, label: t.contact.email, value: contact.email, href: `mailto:${contact.email}` },
    {
      icon: MapPin,
      label: t.contact.address,
      value: `${contact.address.street[locale]}, ${contact.address.city[locale]}`,
      href: contact.mapUrl,
      external: true,
    },
    { icon: Instagram, label: 'Instagram', value: site.instagram.handle, href: site.instagram.url, external: true },
  ]

  return (
    <div>
      <address className="not-italic">
        <ul className="flex flex-col gap-5">
          {rows.map(({ icon: Icon, label, value, href, external }) => (
            <li key={label} className="flex items-start gap-4">
              <Icon className="mt-0.5 size-4 shrink-0 opacity-60" aria-hidden="true" />
              <div className="flex flex-col gap-1">
                <span className="text-[0.7rem] uppercase tracking-[0.22em] opacity-60">{label}</span>
                <a
                  href={href}
                  {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  className="text-base underline decoration-current/25 underline-offset-4 transition-colors hover:decoration-current"
                >
                  {value}
                  {external && <span className="sr-only"> {t.contact.opensInNewTab}</span>}
                </a>
              </div>
            </li>
          ))}
        </ul>
      </address>
      {contact.isPlaceholder && <p className="mt-5 text-xs opacity-60">{t.contact.placeholderNote}</p>}
    </div>
  )
}
