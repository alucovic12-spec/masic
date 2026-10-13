import { images } from './images'
import type { HomeContent } from './types'

export const home: HomeContent = {
  seo: {
    title: {
      hr: 'Restoran Mašić — Dobro došli. Osjećajte se kao kod kuće.',
      en: 'Restoran Mašić — Welcome. Make yourself at home.',
    },
    description: {
      hr: 'Obiteljski restoran Mašić: ćevapi i roštilj sa žara, riba s Jadrana, peka i domaći deserti. Rezervirajte stol.',
      en: 'Restoran Mašić, a family restaurant in Croatia: ćevapi and fire-grilled meats, Adriatic fish, peka and homemade desserts. Reserve a table.',
    },
    image: images.hero,
  },
  hero: {
    eyebrow: { hr: 'Obiteljski restoran · Hrvatska', en: 'Family restaurant · Croatia' },
    titleLine1: { hr: 'Dobro došli.', en: 'Welcome.' },
    titleLine2: { hr: 'Osjećajte se kao kod kuće.', en: 'Make yourself at home.' },
    lead: {
      hr: 'Roštilj s pravog žara, riba s Jadrana i jela koja se kuhaju polako — poslužena toplo, iskreno i bez žurbe.',
      en: 'Charcoal-grilled classics, fish from the Adriatic and slow-cooked dishes — served warmly, honestly and never in a hurry.',
    },
    image: images.hero,
  },
  story: {
    eyebrow: { hr: 'Naša priča', en: 'Our story' },
    title: {
      hr: 'Kuhinja koja okuplja ljude za stolom.',
      en: 'A kitchen that brings people to the table.',
    },
    body: {
      hr: [
        'Mašić je obiteljski restoran u kojem se kuha polako, poslužuje iskreno i svakoga dočekuje kao dragog gosta. Za našim stolom susreću se okusi roštilja, Jadrana i domaće kuhinje.',
        'Ne trudimo se biti najglasniji. Trudimo se da se vratite — zbog ćevapa sa žara, zbog ribe koja je jutros bila u moru i zbog osjećaja da vas ovdje netko čeka.',
      ],
      en: [
        'Mašić is a family restaurant where food is cooked slowly, served honestly and every guest is welcomed like an old friend. Our table brings together the flavours of the grill, the Adriatic and home cooking.',
        'We don’t try to be the loudest. We try to make you come back — for the charcoal-grilled ćevapi, for fish that was in the sea this morning, and for the feeling that someone here is expecting you.',
      ],
    },
    cta: { hr: 'Upoznajte nas', en: 'Get to know us' },
    image: images.interior,
    facts: [
      {
        value: { hr: 'Domaće', en: 'Homemade' },
        label: { hr: 'kruh, umaci i deserti', en: 'bread, sauces and desserts' },
      },
      {
        value: { hr: 'Lokalno', en: 'Local' },
        label: { hr: 'meso, povrće i riba', en: 'meat, produce and fish' },
      },
      {
        value: { hr: 'Polako', en: 'Slow' },
        label: { hr: 'peka i jela iz lonca', en: 'peka and one-pot dishes' },
      },
    ],
  },
  signature: {
    eyebrow: { hr: 'Jela kuće', en: 'Signature dishes' },
    title: { hr: 'Ono po čemu nas pamte.', en: 'What our guests remember.' },
    intro: {
      hr: 'Četiri jela koja najbolje pričaju našu priču — od žara do mora.',
      en: 'Four dishes that tell our story best — from the grill to the sea.',
    },
    dishes: [
      { menuItemId: 'cevapi', image: images.cevapi },
      { menuItemId: 'orada', image: images.fish },
      { menuItemId: 'crni-rizot', image: images.risotto },
      { menuItemId: 'peka', image: images.peka },
    ],
  },
  menuPreview: {
    eyebrow: { hr: 'Iz jelovnika', en: 'From the menu' },
    title: { hr: 'Jednostavno, sezonski, iskreno.', en: 'Simple, seasonal, honest.' },
    intro: {
      hr: 'Jelovnik pratimo prema godišnjem dobu i dnevnom ulovu. Ovo je tek kratak odabir.',
      en: 'Our menu follows the seasons and the daily catch. Here is a short selection.',
    },
    menuItemIds: ['plata-delicija', 'salata-hobotnica', 'mijesano-meso', 'lignje', 'gulas', 'rozata'],
    cta: { hr: 'Cijeli jelovnik', en: 'Full menu' },
    image: images.ingredients,
  },
  atmosphere: {
    eyebrow: { hr: 'Atmosfera', en: 'Atmosphere' },
    title: { hr: 'Topao kutak za svaku priliku.', en: 'A warm corner for every occasion.' },
    intro: {
      hr: 'Ručak s obitelji, večera u dvoje ili proslava s prijateljima — u blagovaonici ili na terasi.',
      en: 'Family lunch, dinner for two or a celebration with friends — in the dining room or out on the terrace.',
    },
    galleryImageIds: ['interior', 'terrace', 'kitchen'],
    cta: { hr: 'Pogledaj galeriju', en: 'View the gallery' },
  },
  reviews: {
    eyebrow: { hr: 'Dojmovi gostiju', en: 'Guest impressions' },
    title: { hr: 'Gosti se vraćaju. To govori sve.', en: 'Guests come back. That says it all.' },
    isPlaceholder: true,
    items: [
      {
        quote: {
          hr: 'Osjećali smo se kao na nedjeljnom ručku kod prijatelja. Ćevapi su bili savršeni, a usluga nenametljivo topla.',
          en: 'It felt like Sunday lunch at a friend’s house. The ćevapi were perfect and the service quietly warm.',
        },
        author: { hr: 'Gost restorana', en: 'Restaurant guest' },
        context: { hr: 'Obiteljski ručak', en: 'Family lunch' },
      },
      {
        quote: {
          hr: 'Orada s gradele i blitva — jednostavno i besprijekorno. Vratit ćemo se čim opet budemo u blizini.',
          en: 'Grilled sea bream with chard — simple and flawless. We will be back as soon as we are nearby again.',
        },
        author: { hr: 'Gost restorana', en: 'Restaurant guest' },
        context: { hr: 'Večera u dvoje', en: 'Dinner for two' },
      },
      {
        quote: {
          hr: 'Naručili smo peku dan ranije i isplatilo se. Topla atmosfera i domaćini koji znaju ugostiti.',
          en: 'We ordered the peka a day ahead and it was worth it. A warm atmosphere and hosts who know hospitality.',
        },
        author: { hr: 'Gost restorana', en: 'Restaurant guest' },
        context: { hr: 'Proslava s prijateljima', en: 'Celebration with friends' },
      },
    ],
  },
  visit: {
    eyebrow: { hr: 'Posjetite nas', en: 'Visit us' },
    title: { hr: 'Stol je postavljen.', en: 'The table is set.' },
    intro: {
      hr: 'Svratite na ručak ili večeru. Za veće skupine i peku preporučujemo rezervaciju unaprijed.',
      en: 'Drop by for lunch or dinner. For larger groups and peka, we recommend booking ahead.',
    },
  },
  reservation: {
    eyebrow: { hr: 'Rezervacije', en: 'Reservations' },
    title: { hr: 'Vaš stol vas čeka.', en: 'Your table is waiting.' },
    body: {
      hr: 'Rezervirajte online ili nas nazovite — rado ćemo vam pripremiti mjesto i preporučiti jelo dana.',
      en: 'Book online or give us a call — we’ll gladly save you a seat and recommend the dish of the day.',
    },
  },
  instagram: {
    eyebrow: { hr: 'Instagram', en: 'Instagram' },
    title: { hr: 'Iz naše kuhinje, svaki dan.', en: 'From our kitchen, every day.' },
    intro: {
      hr: 'Jela dana, sezonske novosti i trenuci iza kulisa.',
      en: 'Dishes of the day, seasonal news and moments behind the scenes.',
    },
    galleryImageIds: ['cevapi', 'kitchen', 'risotto', 'dessert'],
  },
}
