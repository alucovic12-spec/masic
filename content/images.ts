import type { ImageAsset } from './types'

/**
 * Central image registry. Every photo on the site is referenced from here,
 * so replacing a placeholder with a real restaurant photo means changing one
 * entry (src, dimensions and alt text). With Sanity, these become image assets.
 */
export const images = {
  hero: {
    src: '/images/hero.webp',
    width: 1376,
    height: 768,
    alt: {
      hr: 'Orada s gradele s blitvom, crno vino i svijeće na drvenom stolu u toplo osvijetljenoj blagovaonici',
      en: 'Grilled sea bream with Swiss chard, red wine and candles on a wooden table in a warmly lit dining room',
    },
  },
  cevapi: {
    src: '/images/dish-cevapi.webp',
    width: 1024,
    height: 1024,
    alt: {
      hr: 'Ćevapi u somunu s kajmakom, ajvarom i nasjeckanim lukom',
      en: 'Ćevapi in somun flatbread with kajmak, ajvar and chopped onion',
    },
  },
  fish: {
    src: '/images/dish-fish.webp',
    width: 1024,
    height: 1024,
    alt: {
      hr: 'File brancina s gradele s limunom, peršinom i blitvom',
      en: 'Grilled sea bass fillet with lemon, parsley and Swiss chard',
    },
  },
  risotto: {
    src: '/images/dish-risotto.webp',
    width: 928,
    height: 1152,
    alt: {
      hr: 'Crni rižot od sipe u keramičkoj zdjeli uz čašu bijelog vina',
      en: 'Black cuttlefish risotto in a ceramic bowl beside a glass of white wine',
    },
  },
  peka: {
    src: '/images/dish-peka.webp',
    width: 928,
    height: 1152,
    alt: {
      hr: 'Teletina i krumpir s ružmarinom ispod peke, uz žar',
      en: 'Veal and potatoes with rosemary slow-roasted under the peka bell',
    },
  },
  dessert: {
    src: '/images/dessert.webp',
    width: 1024,
    height: 1024,
    alt: {
      hr: 'Rožata s karamelom i šalica espressa na lanenom stolnjaku',
      en: 'Rožata caramel custard and an espresso on a linen tablecloth',
    },
  },
  interior: {
    src: '/images/interior.webp',
    width: 1264,
    height: 848,
    alt: {
      hr: 'Blagovaonica s drvenim stolovima, kamenim zidom i toplim svjetiljkama',
      en: 'Dining room with wooden tables, a stone wall and warm pendant lights',
    },
  },
  terrace: {
    src: '/images/terrace.webp',
    width: 928,
    height: 1152,
    alt: {
      hr: 'Terasa restorana u zlatnom satu s maslinom i lampicama',
      en: 'Restaurant terrace at golden hour with an olive tree and string lights',
    },
  },
  kitchen: {
    src: '/images/kitchen.webp',
    width: 1264,
    height: 848,
    alt: {
      hr: 'Kuhar okreće meso i povrće na roštilju na drveni ugljen',
      en: 'Chef turning meat and vegetables on a charcoal grill',
    },
  },
  ingredients: {
    src: '/images/ingredients.webp',
    width: 928,
    height: 1152,
    alt: {
      hr: 'Maslinovo ulje, rajčice, blitva, češnjak, ružmarin i domaći kruh na drvenom stolu',
      en: 'Olive oil, tomatoes, chard, garlic, rosemary and homemade bread on a wooden table',
    },
  },
} satisfies Record<string, ImageAsset>
