import { images } from './images'
import type { HomeContent } from './types'

export const home: HomeContent = {
  seo: {
    title: {
      hr: 'Restoran Mašić, Rakitno — domaća hercegovačka kuhinja',
      en: 'Restoran Mašić, Rakitno — home-style Herzegovinian food',
    },
    description: {
      hr: 'Obiteljski restoran i pekarna na Rakitnu, na putu za Blidinje: peka s domaćom teletinom, roštilj sa žara, uštipci, pite i domaće vino. Rezervirajte stol.',
      en: 'A family restaurant and bakery in Rakitno, on the road to Blidinje: local veal under the peka, charcoal grill, uštipci, pies and house wine. Reserve a table.',
    },
    image: images.hero,
  },
  hero: {
    eyebrow: { hr: 'Restoran i pekarna · Rakitno, Hercegovina', en: 'Restaurant & bakery · Rakitno, Herzegovina' },
    titleLine1: { hr: 'Dobro došli.', en: 'Welcome.' },
    titleLine2: { hr: 'Osjećajte se kao kod kuće.', en: 'Make yourself at home.' },
    lead: {
      hr: 'Domaće meso s Rakitna, peka, roštilj sa žara i kruh iz vlastite pekarne — obilno, svježe i od srca, u hercegovačkim Alpama.',
      en: 'Local Rakitno meat, peka, charcoal grill and bread from our own bakery — generous, fresh and from the heart, in the Herzegovinian Alps.',
    },
    image: images.hero,
  },
  story: {
    eyebrow: { hr: 'Naša priča', en: 'Our story' },
    title: {
      hr: 'Od malog grilla do obiteljskog restorana.',
      en: 'From a small grill to a family restaurant.',
    },
    body: {
      hr: [
        'Ante i Kristina Mašić 2014. godine odlučili su ostati na Rakitnu i stvoriti nešto svoje. Ono što je počelo kao grill uz cestu za Blidinje, danas je uređen obiteljski restoran s pekarnom, u kojem stane i više od stotinu gostiju.',
        'Rakitno je kraj stočara, a mi meso kupujemo od domaćih ljudi po cijelom mjestu. Zato su nam porcije obilne, a okusi pravi — dobra, fina i svježa domaća hrana.',
      ],
      en: [
        'In 2014, Ante and Kristina Mašić decided to stay in Rakitno and build something of their own. What began as a roadside grill on the way to Blidinje is now a family restaurant with its own bakery, seating more than a hundred guests.',
        'Rakitno is cattle country, and we buy our meat from local farmers all around the village. That is why our portions are generous and the flavours honest — good, fresh, home-style food.',
      ],
    },
    cta: { hr: 'Upoznajte nas', en: 'Get to know us' },
    image: images.stol,
    facts: [
      {
        value: { hr: 'Od 2014.', en: 'Since 2014' },
        label: { hr: 'obiteljski, iz Rakitna', en: 'family-run, in Rakitno' },
      },
      {
        value: { hr: '100+', en: '100+' },
        label: { hr: 'mjesta za proslave', en: 'seats for celebrations' },
      },
      {
        value: { hr: 'Domaće', en: 'Local' },
        label: { hr: 'teletina, svinjetina i kruh', en: 'veal, pork and bread' },
      },
    ],
  },
  signature: {
    eyebrow: { hr: 'Jela kuće', en: 'Signature dishes' },
    title: { hr: 'Ono po čemu nas pamte.', en: 'What our guests remember.' },
    intro: {
      hr: 'Četiri jela koja najbolje pričaju priču Hercegovine — od plate do peke.',
      en: 'Four dishes that tell the story of Herzegovina best — from the platter to the peka.',
    },
    dishes: [
      { menuItemId: 'hercegovacka-plata', image: images.plata },
      { menuItemId: 'ramstek', image: images.steak },
      { menuItemId: 'teletina-peka', image: images.peka },
      { menuItemId: 'cevapi', image: images.cevapi },
    ],
  },
  menuPreview: {
    eyebrow: { hr: 'Iz jelovnika', en: 'From the menu' },
    title: { hr: 'Domaće, obilno, iskreno.', en: 'Homemade, generous, honest.' },
    intro: {
      hr: 'Hercegovačka jela, roštilj i kuhana jela dana. Ovo je tek kratak odabir.',
      en: 'Herzegovinian dishes, grill and daily cooked meals. Here is a short selection.',
    },
    menuItemIds: ['ustipci', 'mijesano-meso', 'svinjetina-peka', 'becki-odrezak', 'pite', 'blatina'],
    cta: { hr: 'Cijeli jelovnik', en: 'Full menu' },
    image: images.plata,
  },
  atmosphere: {
    eyebrow: { hr: 'Atmosfera', en: 'Atmosphere' },
    title: { hr: 'Topao kutak za svaku priliku.', en: 'A warm corner for every occasion.' },
    intro: {
      hr: 'Ručak na putu za Blidinje, večera u dvoje ili krizma, krštenje i proslava za 50 gostiju — u svijetloj blagovaonici ili na ostakljenoj terasi.',
      en: 'Lunch on the way to Blidinje, dinner for two, or a christening or family celebration for 50 — in the bright dining room or on the glass-enclosed terrace.',
    },
    galleryImageIds: ['stol', 'terasa', 'vanjski'],
    cta: { hr: 'Pogledaj galeriju', en: 'View the gallery' },
  },
  reviews: {
    eyebrow: { hr: 'Dojmovi gostiju', en: 'Guest impressions' },
    title: { hr: 'Gosti se vraćaju. To govori sve.', en: 'Guests come back. That says it all.' },
    isPlaceholder: true,
    items: [
      {
        quote: {
          hr: 'Obilne porcije, domaće meso i ljubazno osoblje. Svaki put kad idemo na Blidinje, stajemo kod Mašića.',
          en: 'Generous portions, local meat and friendly staff. Every time we head to Blidinje, we stop at Mašić.',
        },
        author: { hr: 'Gost restorana', en: 'Restaurant guest' },
        context: { hr: 'Usput prema Blidinju', en: 'On the way to Blidinje' },
      },
      {
        quote: {
          hr: 'Teletina ispod peke kakvu se rijetko gdje jede. Naručili smo dan ranije i isplatilo se.',
          en: 'Veal under the peka like you rarely find anywhere. We ordered a day ahead and it was worth it.',
        },
        author: { hr: 'Gost restorana', en: 'Restaurant guest' },
        context: { hr: 'Obiteljski ručak', en: 'Family lunch' },
      },
      {
        quote: {
          hr: 'Krštenje za pedeset ljudi — sve je bilo besprijekorno, od plate do kolača. Domaćini znaju ugostiti.',
          en: 'A christening for fifty people — everything was flawless, from the platter to the cake. The hosts know hospitality.',
        },
        author: { hr: 'Gost restorana', en: 'Restaurant guest' },
        context: { hr: 'Obiteljska proslava', en: 'Family celebration' },
      },
    ],
  },
  visit: {
    eyebrow: { hr: 'Posjetite nas', en: 'Visit us' },
    title: { hr: 'Stol je postavljen.', en: 'The table is set.' },
    intro: {
      hr: 'Nalazimo se tik uz cestu za Blidinje, s velikim parkiralištem — oko sat vremena vožnje od Makarske. Za peku i veće skupine nazovite unaprijed.',
      en: 'We are right on the road to Blidinje, with ample parking — about an hour’s drive from Makarska. For peka and larger groups, please call ahead.',
    },
  },
  reservation: {
    eyebrow: { hr: 'Rezervacije', en: 'Reservations' },
    title: { hr: 'Vaš stol vas čeka.', en: 'Your table is waiting.' },
    body: {
      hr: 'Rezervirajte online ili nas nazovite na 039 692 482 — rado ćemo pripremiti stol, peku ili cijelu proslavu.',
      en: 'Book online or call us on +387 39 692 482 — we’ll gladly prepare a table, a peka or a whole celebration.',
    },
  },
  instagram: {
    eyebrow: { hr: 'Instagram', en: 'Instagram' },
    title: { hr: 'Iz naše kuhinje, svaki dan.', en: 'From our kitchen, every day.' },
    intro: {
      hr: 'Jela dana, sezonske novosti i Rakitno kroz godišnja doba.',
      en: 'Dishes of the day, seasonal news and Rakitno through the seasons.',
    },
    galleryImageIds: ['plata', 'koktel', 'zima', 'sok'],
  },
}
