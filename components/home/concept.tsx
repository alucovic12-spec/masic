import Image from 'next/image'
import { Parallax } from '@/components/shared/parallax'
import { Reveal } from '@/components/shared/reveal'
import { Section, SectionHeading } from '@/components/shared/section'
import type { Messages } from '@/lib/i18n/messages'

export function Concept({ m }: { m: Messages }) {
  const c = m.home.concept

  return (
    <Section labelledBy="concept-title">
      <div className="grid items-center gap-16 lg:grid-cols-[0.85fr_1.15fr] lg:gap-24">
        <Reveal>
          <SectionHeading id="concept-title" eyebrow={c.eyebrow} title={c.title} intro={c.text} />
          <h3 className="mt-12 text-xs uppercase tracking-[0.26em] text-primary">{c.materialsLabel}</h3>
          <ul className="mt-5 flex flex-wrap gap-2">
            {c.materials.map((material) => (
              <li
                key={material}
                className="cursor-default rounded-[0.8rem_0.8rem_0.8rem_0.2rem] border-2 border-foreground/20 bg-card px-4 py-2 text-sm font-medium transition-all odd:-rotate-1 even:rotate-1 hover:rotate-0 hover:-translate-y-1 hover:border-brand-lime hover:bg-brand-lime hover:text-brand-ink"
              >
                {material}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal>
          <div className="relative mx-auto max-w-lg pb-14 pr-4 lg:max-w-none">
            <Parallax speed={50}>
              <div className="image-reveal group relative aspect-[5/4] overflow-hidden rounded-[4rem_1rem_4rem_1rem] border-2 border-brand-ink shadow-[18px_18px_0_0_var(--brand-green)]">
                <Image
                  src="/images/space/hall-oak-tables.png"
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 40vw, 90vw"
                  className="object-cover object-[60%_center] motion-safe:transition-transform motion-safe:duration-1000 group-hover:scale-105"
                />
              </div>
            </Parallax>
            <Parallax speed={-70} className="absolute -bottom-2 -left-2 w-[38%] sm:-left-8">
              <div className="group relative aspect-square overflow-hidden rounded-2xl border-4 border-background shadow-xl shadow-black/30 motion-safe:transition-transform motion-safe:duration-500 hover:-rotate-3">
                <Image
                  src="/images/space/velvet-chair.png"
                  alt=""
                  fill
                  sizes="20vw"
                  className="object-cover motion-safe:transition-transform motion-safe:duration-700 group-hover:scale-110"
                />
              </div>
            </Parallax>
          </div>
        </Reveal>
      </div>
    </Section>
  )
}
