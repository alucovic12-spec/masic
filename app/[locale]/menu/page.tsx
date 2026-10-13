import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { MenuItemRow } from '@/components/menu/menu-item-row'
import { PageHeader } from '@/components/page-header'
import { menuCategories } from '@/content/menu'
import { pageSeo } from '@/content/site'
import { ui } from '@/content/ui'
import { isLocale } from '@/lib/i18n'
import { buildMetadata } from '@/lib/seo'

export async function generateMetadata({ params }: PageProps<'/[locale]/menu'>): Promise<Metadata> {
  const { locale } = await params
  if (!isLocale(locale)) return {}
  return buildMetadata(locale, 'menu', pageSeo.menu)
}

const intro = {
  eyebrow: { hr: 'Jelovnik', en: 'Menu' },
  title: { hr: 'Sa žara, ispod peke i iz lonca.', en: 'From the grill, the peka and the pot.' },
  lead: {
    hr: 'Domaće meso s Rakitna, kruh iz naše pekarne i jelo dana iz lonca. Za peku nazovite dan ranije.',
    en: 'Local Rakitno meat, bread from our own bakery and a cooked dish of the day. For peka, call a day ahead.',
  },
}

export default async function MenuPage({ params }: PageProps<'/[locale]/menu'>) {
  const { locale } = await params
  if (!isLocale(locale)) notFound()
  const t = ui[locale]

  return (
    <>
      <PageHeader eyebrow={intro.eyebrow[locale]} title={intro.title[locale]} lead={intro.lead[locale]} />

      <nav
        aria-label={t.menu.categories}
        className="sticky top-16 z-30 border-b border-border bg-background/95 backdrop-blur-sm md:top-20"
      >
        <ul className="shell flex gap-6 overflow-x-auto py-4 text-sm [scrollbar-width:none]">
          {menuCategories.map((category) => (
            <li key={category.id} className="shrink-0">
              <a
                href={`#${category.id}`}
                className="inline-flex min-h-10 items-center text-muted-foreground transition-colors hover:text-foreground"
              >
                {category.title[locale]}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="shell py-20 md:py-28">
        <div className="mx-auto flex max-w-4xl flex-col gap-20">
          {menuCategories.map((category, i) => (
            <section key={category.id} id={category.id} aria-labelledby={`${category.id}-title`} className="scroll-mt-40">
              <div className="flex items-baseline gap-4 border-b border-charcoal pb-4">
                <span className="text-xs tracking-[0.2em] text-terracotta">{String(i + 1).padStart(2, '0')}</span>
                <h2 id={`${category.id}-title`} className="font-display text-3xl md:text-4xl">
                  {category.title[locale]}
                </h2>
              </div>
              {category.intro && <p className="mt-4 max-w-xl text-muted-foreground">{category.intro[locale]}</p>}
              <div className="divide-y divide-border">
                {category.items.map((item) => (
                  <MenuItemRow key={item.id} item={item} locale={locale} />
                ))}
              </div>
            </section>
          ))}
          <p className="border-t border-border pt-6 text-sm leading-relaxed text-muted-foreground">{t.menu.priceNote}</p>
        </div>
      </div>
    </>
  )
}
