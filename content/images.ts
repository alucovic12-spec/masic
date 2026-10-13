import type { ImageAsset } from './types'

/**
 * Central image registry. Files prefixed `masic-` are the restaurant's own
 * photos (credited "Foto: Restoran Mašić"); the rest are stand-ins to replace
 * with real photos when available.
 */
export const images = {
  hero: {
    src: '/images/masic-steak.webp',
    width: 1600,
    height: 1200,
    alt: {
      hr: 'Ramstek s gradele na drvenoj dasci s pečenim krumpirom, gljivama, paprikama i domaćim umacima',
      en: 'Grilled rump steak on a wooden board with roast potatoes, mushrooms, peppers and homemade sauces',
    },
  },
  steak: {
    src: '/images/masic-steak.webp',
    width: 1600,
    height: 1200,
    alt: {
      hr: 'Ramstek s gradele s krumpirom, gljivama i paprikama na drvenoj dasci',
      en: 'Grilled rump steak with potatoes, mushrooms and peppers on a wooden board',
    },
  },
  plata: {
    src: '/images/masic-plata.webp',
    width: 1600,
    height: 2000,
    alt: {
      hr: 'Hercegovačke plate s pršutom, slaninom, sirom, kajmakom, maslinama i uštipcima',
      en: 'Herzegovinian platters with prosciutto, bacon, cheese, kajmak, olives and uštipci',
    },
  },
  stol: {
    src: '/images/masic-stol.webp',
    width: 1600,
    height: 1067,
    alt: {
      hr: 'Svečano postavljen stol s cvijećem, kristalnim čašama i složenim salvetama',
      en: 'A festively set table with flowers, crystal glasses and folded napkins',
    },
  },
  terasa: {
    src: '/images/masic-terasa.webp',
    width: 1600,
    height: 2000,
    alt: {
      hr: 'Ostakljena terasa s visećom foteljom i lampicama u sumrak',
      en: 'Glass-enclosed terrace with a hanging egg chair and fairy lights at dusk',
    },
  },
  vanjski: {
    src: '/images/masic-vanjski.webp',
    width: 1600,
    height: 2000,
    alt: {
      hr: 'Ulaz u Restoran Mašić noću, s kamenim gabionima i svijećama',
      en: 'The entrance of Restoran Mašić at night, with stone gabions and candles',
    },
  },
  zima: {
    src: '/images/masic-zima.webp',
    width: 1600,
    height: 1200,
    alt: {
      hr: 'Snijegom prekriven putokaz "Restoran Pekarna Mašić" na Rakitnu',
      en: 'Snow-covered "Restoran Pekarna Mašić" sign in Rakitno',
    },
  },
  koktel: {
    src: '/images/masic-koktel.webp',
    width: 1600,
    height: 2000,
    alt: {
      hr: 'Dva osvježavajuća pića s jagodama na terasi restorana',
      en: 'Two refreshing strawberry drinks on the restaurant terrace',
    },
  },
  sok: {
    src: '/images/masic-sok.webp',
    width: 1600,
    height: 2000,
    alt: {
      hr: 'Domaći sok od nara u bokalu, uz jesenske tikve i lišće',
      en: 'Homemade pomegranate juice in a carafe with autumn squash and leaves',
    },
  },
  cevapi: {
    src: '/images/dish-cevapi.webp',
    width: 1024,
    height: 1024,
    alt: {
      hr: 'Ćevapi u somunu s kajmakom i nasjeckanim lukom',
      en: 'Ćevapi in somun flatbread with kajmak and chopped onion',
    },
  },
  peka: {
    src: '/images/dish-peka.webp',
    width: 928,
    height: 1152,
    alt: {
      hr: 'Domaća teletina i krumpir ispod peke, uz žar',
      en: 'Local veal and potatoes slow-roasted under the peka bell',
    },
  },
  dessert: {
    src: '/images/dessert.webp',
    width: 1024,
    height: 1024,
    alt: {
      hr: 'Domaća krem karamel i šalica kave',
      en: 'Homemade crème caramel and a cup of coffee',
    },
  },
  kitchen: {
    src: '/images/kitchen.webp',
    width: 1264,
    height: 848,
    alt: {
      hr: 'Meso i povrće na roštilju na drveni ugljen',
      en: 'Meat and vegetables on a charcoal grill',
    },
  },
} satisfies Record<string, ImageAsset>
