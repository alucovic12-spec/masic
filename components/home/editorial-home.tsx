import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight, MapPin, Phone } from 'lucide-react'
import { localePath, type Locale } from '@/lib/i18n'
import { routes, site } from '@/content/site'

const img = {
  exterior: '/images/editorial/exterior.webp',
  peka: '/images/editorial/peka-process.webp',
  charcuterie: '/images/editorial/charcuterie.webp',
  dining: '/images/editorial/dining-room.webp',
  terrace: '/images/editorial/terrace.webp',
  steak: '/images/editorial/steak-close.webp',
  pans: '/images/editorial/peka-pans.webp',
  music: '/images/editorial/live-music.webp',
  drinks: '/images/editorial/drinks.webp',
  celebration: '/images/editorial/celebration-table.webp',
  dessert: '/images/editorial/dessert.webp',
}

const copy = {
  hr: {
    eyebrow: 'Restoran i pekarna · Rakitno, Hercegovina', hello: 'Dobro došli.', home: 'Osjećajte se kao kod kuće.',
    lead: 'Domaće meso s Rakitna, peka, roštilj sa žara i kruh iz vlastite pekarne — obilno, svježe i od srca.',
    reserve: 'Rezerviraj stol', menu: 'Pogledaj jelovnik', storyLabel: 'Naša priča',
    storyTitle: 'Okusi koji pripadaju ovom kraju.',
    story: 'Od malog grilla uz cestu za Blidinje do obiteljskog restorana i pekarne. Kod Mašića se kuha onako kako se kuha kod kuće: od domaćih namirnica, bez žurbe i za stolom za kojim uvijek ima mjesta.',
    kitchen: 'Iz naše kuhinje', kitchenTitle: 'Domaće. Obilno. Iskreno.', peka: 'Peka', grill: 'S gradela', sharing: 'Za cijeli stol',
    experience: 'Više od ručka', experienceTitle: 'Mjesto za svakodnevne susrete i velike trenutke.',
    experienceBody: 'Ručak na putu za Blidinje, večera uz vatru, glazba s prijateljima ili obiteljska proslava — svaki stol ima svoju priču.',
    gallery: 'Pogledaj galeriju', visit: 'Posjetite nas', visitTitle: 'Stol je postavljen.', call: 'Nazovite nas',
  },
  en: {
    eyebrow: 'Restaurant & bakery · Rakitno, Herzegovina', hello: 'Welcome.', home: 'Make yourself at home.',
    lead: 'Local Rakitno meat, peka, charcoal grill and bread from our own bakery — generous, fresh and from the heart.',
    reserve: 'Reserve a table', menu: 'View the menu', storyLabel: 'Our story', storyTitle: 'Flavours that belong to this place.',
    story: 'From a small grill on the road to Blidinje to a family restaurant and bakery. At Mašić, food is cooked the way it is at home: with local ingredients, without rushing, and around a table where there is always room.',
    kitchen: 'From our kitchen', kitchenTitle: 'Homemade. Generous. Honest.', peka: 'Under the peka', grill: 'From the grill', sharing: 'For the whole table',
    experience: 'More than lunch', experienceTitle: 'A place for everyday meetings and milestone moments.',
    experienceBody: 'Lunch on the way to Blidinje, dinner by the fire, live music with friends or a family celebration — every table has its own story.',
    gallery: 'View the gallery', visit: 'Visit us', visitTitle: 'The table is set.', call: 'Call us',
  },
}

function Pill({ href, children, light = false }: { href: string; children: React.ReactNode; light?: boolean }) {
  const style = light
    ? 'border-ivory/35 text-ivory hover:bg-ivory hover:text-charcoal'
    : 'border-charcoal/20 text-charcoal hover:bg-charcoal hover:text-ivory'
  return <Link href={href} className={'group inline-flex min-h-12 items-center justify-center gap-3 rounded-full border px-6 text-sm font-semibold transition-all duration-300 ' + style}>{children}<ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" /></Link>
}

function Photo({ src, alt, className, sizes }: { src: string; alt: string; className: string; sizes: string }) {
  return <figure className={'relative overflow-hidden rounded-[1.5rem] ' + className}><Image src={src} alt={alt} fill sizes={sizes} className="object-cover transition-transform duration-700 hover:scale-[1.025]" /></figure>
}

export function EditorialHome({ locale }: { locale: Locale }) {
  const t = copy[locale]
  const reserve = localePath(locale, routes.contact) + '#rezervacija'
  return (
    <div className="overflow-hidden bg-[#f3efe6] text-[#24211d]">
      <section className="min-h-[100svh] px-5 pb-10 pt-28 sm:px-8 lg:px-12 lg:pt-32">
        <div className="mx-auto grid min-h-[calc(100svh-10rem)] max-w-[92rem] grid-cols-12 gap-4">
          <div className="col-span-12 flex flex-col justify-between border-t border-charcoal/20 pt-5 lg:col-span-7">
            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-charcoal/55">{t.eyebrow}</p>
            <div className="py-14">
              <h1 className="max-w-[11ch] font-display text-[clamp(4rem,7.4vw,8.4rem)] leading-[0.84] tracking-[-0.055em]"><span className="block">{t.hello}</span><span className="block italic text-terracotta">{t.home}</span></h1>
              <div className="mt-10 grid max-w-3xl gap-8 border-t border-charcoal/20 pt-6 md:grid-cols-[1fr_auto] md:items-end"><p className="max-w-xl text-lg leading-relaxed text-charcoal/68">{t.lead}</p><div className="flex flex-wrap gap-3"><Pill href={reserve}>{t.reserve}</Pill><Pill href={localePath(locale, routes.menu)}>{t.menu}</Pill></div></div>
            </div>
            <div className="flex items-center gap-4 border-t border-charcoal/20 py-5 text-xs uppercase tracking-[0.18em] text-charcoal/55"><span className="size-2 rounded-full bg-olive" />Rakitno · od 2014.</div>
          </div>
          <div className="col-span-12 grid min-h-[38rem] grid-cols-5 grid-rows-6 gap-3 lg:col-span-5 lg:min-h-0"><Photo src={img.peka} alt={t.peka} className="col-span-5 row-span-4" sizes="40vw" /><Photo src={img.dining} alt={t.experience} className="col-span-3 row-span-2" sizes="25vw" /><Photo src={img.steak} alt={t.grill} className="col-span-2 row-span-2" sizes="18vw" /></div>
        </div>
      </section>

      <section id="prica" className="px-5 py-24 sm:px-8 lg:px-12 lg:py-36">
        <div className="mx-auto grid max-w-[92rem] grid-cols-12 gap-y-12"><p className="col-span-12 text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-charcoal/50 lg:col-span-3">{t.storyLabel}</p><div className="col-span-12 lg:col-span-8 lg:col-start-5"><h2 className="font-display text-[clamp(3rem,6vw,6.5rem)] leading-[0.92] tracking-[-0.045em]">{t.storyTitle}</h2><div className="mt-10 grid gap-10 border-t border-charcoal/20 pt-8 md:grid-cols-2"><p className="text-lg leading-relaxed text-charcoal/68">{t.story}</p><div className="grid grid-cols-2 gap-3"><div className="rounded-[1.25rem] bg-[#e4dac9] p-6"><strong className="font-display text-5xl">2014.</strong><span className="mt-10 block text-sm text-charcoal/55">{locale === 'hr' ? 'Početak priče' : 'The beginning'}</span></div><div className="rounded-[1.25rem] bg-olive p-6 text-ivory"><strong className="font-display text-5xl">100+</strong><span className="mt-10 block text-sm text-ivory/65">{locale === 'hr' ? 'Mjesta za goste' : 'Seats for guests'}</span></div></div></div></div></div>
      </section>

      <section className="bg-[#221f1b] px-5 py-24 text-ivory sm:px-8 lg:px-12 lg:py-32">
        <div className="mx-auto max-w-[92rem]"><div className="grid grid-cols-12 gap-y-8 border-b border-ivory/15 pb-12"><p className="col-span-12 text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-ivory/50 lg:col-span-3">{t.kitchen}</p><h2 className="col-span-12 font-display text-[clamp(3rem,6vw,6.8rem)] leading-[0.9] tracking-[-0.045em] lg:col-span-9">{t.kitchenTitle}</h2></div>
          <div className="mt-6 grid gap-4 lg:grid-cols-12"><article className="lg:col-span-5"><Photo src={img.pans} alt={t.peka} className="aspect-[4/5]" sizes="40vw" /><h3 className="mt-5 font-display text-4xl">{t.peka}</h3></article><article className="lg:col-span-3 lg:pt-28"><Photo src={img.steak} alt={t.grill} className="aspect-[3/4]" sizes="25vw" /><h3 className="mt-5 font-display text-4xl">{t.grill}</h3></article><article className="lg:col-span-4 lg:pt-12"><Photo src={img.charcuterie} alt={t.sharing} className="aspect-[4/3]" sizes="34vw" /><h3 className="mt-5 font-display text-4xl">{t.sharing}</h3><Photo src={img.dessert} alt="Dessert" className="mt-12 aspect-square rounded-full" sizes="28vw" /></article></div><div className="mt-14 flex justify-end"><Pill href={localePath(locale, routes.menu)} light>{t.menu}</Pill></div>
        </div>
      </section>

      <section className="px-5 py-24 sm:px-8 lg:px-12 lg:py-36">
        <div className="mx-auto max-w-[92rem]"><div className="grid grid-cols-12 gap-y-10"><p className="col-span-12 text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-charcoal/50 lg:col-span-3">{t.experience}</p><div className="col-span-12 lg:col-span-8 lg:col-start-5"><h2 className="font-display text-[clamp(3rem,5.7vw,6.5rem)] leading-[0.92] tracking-[-0.045em]">{t.experienceTitle}</h2><p className="mt-8 max-w-2xl text-lg leading-relaxed text-charcoal/65">{t.experienceBody}</p></div></div>
          <div className="mt-16 grid auto-rows-[10rem] grid-cols-2 gap-3 md:auto-rows-[13rem] md:grid-cols-4"><Photo src={img.terrace} alt={t.experience} className="col-span-2 row-span-3" sizes="50vw" /><Photo src={img.music} alt={t.experience} className="row-span-2" sizes="25vw" /><Photo src={img.drinks} alt={t.experience} className="row-span-2" sizes="25vw" /><Photo src={img.celebration} alt={t.experience} className="col-span-2 row-span-2" sizes="50vw" /></div><div className="mt-10 flex justify-end"><Pill href={localePath(locale, routes.gallery)}>{t.gallery}</Pill></div>
        </div>
      </section>

      <section className="px-5 pb-5 sm:px-8 lg:px-12 lg:pb-12"><div className="relative mx-auto min-h-[38rem] max-w-[92rem] overflow-hidden rounded-[2rem] bg-terracotta text-ivory"><Image src={img.exterior} alt="Restoran Mašić" fill sizes="100vw" className="object-cover opacity-30 mix-blend-multiply" /><div className="absolute inset-0 bg-gradient-to-r from-terracotta via-terracotta/90 to-transparent" /><div className="relative flex min-h-[38rem] max-w-3xl flex-col justify-between p-8 sm:p-12 lg:p-16"><p className="text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-ivory/65">{t.visit}</p><div><h2 className="font-display text-[clamp(4rem,8vw,8rem)] leading-[0.85] tracking-[-0.05em]">{t.visitTitle}</h2><p className="mt-7 text-lg text-ivory/70">Poklečani, Rakitno · {site.contact.phone.display}</p><div className="mt-9 flex flex-wrap gap-3"><Link href={reserve} className="inline-flex min-h-12 items-center gap-3 rounded-full bg-ivory px-6 text-sm font-semibold text-charcoal">{t.reserve}<ArrowUpRight className="size-4" /></Link><a href={site.contact.phone.href} className="inline-flex min-h-12 items-center gap-3 rounded-full border border-ivory/40 px-6 text-sm font-semibold"><Phone className="size-4" />{t.call}</a><a href={site.contact.mapUrl} target="_blank" rel="noreferrer" className="inline-flex min-h-12 items-center gap-3 rounded-full border border-ivory/40 px-6 text-sm font-semibold"><MapPin className="size-4" />Rakitno</a></div></div></div></div></section>
    </div>
  )
}
