import type { ImageAsset } from './types'

/**
 * Central image registry. Files prefixed `masic-` are the restaurant's own
 * photos (credited "Foto: Restoran Mašić"). No generated or stock imagery is used.
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
} satisfies Record<string, ImageAsset>
