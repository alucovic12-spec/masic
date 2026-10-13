import Image from 'next/image'
import { TextLink } from '@/components/action-link'
import { Eyebrow } from '@/components/section-heading'
import { home } from '@/content/home'
import { routes } from '@/content/site'
import { localePath, type Locale } from '@/lib/i18n'

export function Story({ locale }: { locale: Locale }) {
  const { story } = home
  return (
    <section id="prica" aria-labelledby="story-title" className="py-24 md:py-36">
      <div className="shell">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-6">
            <Eyebrow>{story.eyebrow[locale]}</Eyebrow>
            <h2 id="story-title" className="mt-6 font-serif text-4xl leading-[1.05] tracking-tight md:text-6xl">
              {story.title[locale]}
            </h2>
          </div>
          <div className="flex flex-col gap-6 text-lg leading-relaxed text-foreground/80 lg:col-span-5 lg:col-start-8 lg:pt-16">
            {story.body[locale].map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            <TextLink href={localePath(locale, routes.about)} className="mt-2 self-start text-foreground">
              {story.cta[locale]}
            </TextLink>
          </div>
        </div>

        <dl className="mt-20 grid border-t border-border sm:grid-cols-3">
          {story.facts.map((fact, i) => (
            <div
              key={fact.value.en}
              className="flex flex-col gap-2 border-b border-border py-8 sm:border-b-0 sm:px-8 sm:first:pl-0 sm:[&:not(:first-child)]:border-l"
            >
              <dt className="order-2 text-sm text-muted-foreground">{fact.label[locale]}</dt>
              <dd className="order-1 flex items-baseline gap-3 font-serif text-3xl md:text-4xl">
                <span className="font-sans text-xs tracking-[0.2em] text-terracotta">{String(i + 1).padStart(2, '0')}</span>
                {fact.value[locale]}
              </dd>
            </div>
          ))}
        </dl>

        <div className="relative mt-12 aspect-[4/3] overflow-hidden md:aspect-[21/9]">
          <Image
            src={story.image.src}
            alt={story.image.alt[locale]}
            fill
            sizes="(min-width: 1344px) 1248px, 100vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  )
}
