import { PageHeader } from '@/components/page-header'
import type { LegalDocument } from '@/content/types'
import { ui } from '@/content/ui'
import { formatDate } from '@/lib/format'
import type { Locale } from '@/lib/i18n'

export function LegalPage({ doc, locale }: { doc: LegalDocument; locale: Locale }) {
  const t = ui[locale]
  return (
    <>
      <PageHeader eyebrow={t.footer.legal} title={doc.title[locale]} />
      <article className="shell py-20 md:py-28">
        <div className="mx-auto max-w-2xl">
          <p className="border-l-2 border-terracotta bg-ivory-deep px-4 py-3 text-sm">{t.legal.templateNotice}</p>
          <p className="mt-8 text-sm text-muted-foreground">
            {t.legal.updated}: <time dateTime={doc.updated}>{formatDate(doc.updated, locale)}</time>
          </p>
          <p className="mt-6 text-lg leading-relaxed">{doc.intro[locale]}</p>
          {doc.sections.map((section) => (
            <section key={section.heading.en} className="mt-12">
              <h2 className="font-serif text-2xl md:text-3xl">{section.heading[locale]}</h2>
              <div className="mt-4 flex flex-col gap-4 leading-relaxed text-foreground/80">
                {section.body[locale].map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
            </section>
          ))}
        </div>
      </article>
    </>
  )
}
