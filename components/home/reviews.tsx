import { SectionHeading } from '@/components/section-heading'
import { home } from '@/content/home'
import type { Locale } from '@/lib/i18n'

export function Reviews({ locale }: { locale: Locale }) {
  const { reviews } = home
  return (
    <section aria-labelledby="reviews-title" className="py-24 md:py-36">
      <div className="shell">
        <SectionHeading id="reviews-title" eyebrow={reviews.eyebrow[locale]} title={reviews.title[locale]} />
        <ul className="mt-16 grid gap-12 md:grid-cols-3 md:gap-8">
          {reviews.items.map((review) => (
            <li key={review.quote.en}>
              <figure className="flex h-full flex-col border-t border-charcoal/25 pt-8">
                <span aria-hidden="true" className="font-display text-6xl leading-none text-terracotta">
                  {'“'}
                </span>
                <blockquote className="mt-2 flex-1 font-display text-xl leading-snug md:text-2xl">
                  <p>{review.quote[locale]}</p>
                </blockquote>
                <figcaption className="mt-8 text-sm">
                  <span className="font-medium">{review.author[locale]}</span>
                  <span className="text-muted-foreground"> · {review.context[locale]}</span>
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
