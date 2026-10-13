import type { AllergenCode, DietaryTag, MenuCategory, MenuItem } from './types'
import type { Localized } from '@/lib/i18n'

/**
 * Menu data. Dishes follow the restaurant's known offer (press and Instagram);
 * prices are indicative in KM (BAM) and must be confirmed by the restaurant.
 * Allergen codes follow the 14 standard allergens.
 */
export const menuCategories: MenuCategory[] = [
  {
    id: 'predjela',
    title: { hr: 'Predjela', en: 'Starters' },
    intro: {
      hr: 'Za početak — domaće, obilno i uz toplu riječ dobrodošlice.',
      en: 'To begin — homemade, generous and with a warm welcome.',
    },
    items: [
      {
        id: 'hercegovacka-plata',
        name: { hr: 'Hercegovačka plata', en: 'Herzegovinian platter' },
        description: {
          hr: 'Domaći pršut, suha slanina i kobasica, sir, kajmak, masline, orasi i topli uštipci.',
          en: 'Local prosciutto, dry-cured bacon and sausage, cheese, kajmak, olives, walnuts and warm uštipci.',
        },
        price: 30,
        unit: { hr: 'za dvoje', en: 'for two' },
        allergens: ['gluten', 'milk', 'nuts'],
        dietary: [],
        signature: true,
      },
      {
        id: 'ustipci',
        name: { hr: 'Uštipci s kajmakom i sirom', en: 'Uštipci with kajmak and cheese' },
        description: {
          hr: 'Hrskavi domaći uštipci, svježi kajmak i mladi sir.',
          en: 'Crisp homemade fried dough with fresh kajmak and young cheese.',
        },
        price: 9,
        allergens: ['gluten', 'milk'],
        dietary: ['vegetarian'],
      },
      {
        id: 'jaja-sir',
        name: { hr: 'Jaja sa svježim sirom', en: 'Eggs with fresh cheese' },
        description: {
          hr: 'Domaća jaja zapečena sa svježim sirom, uz kruh iz naše pekarne.',
          en: 'Farm eggs baked with fresh cheese, with bread from our own bakery.',
        },
        price: 8,
        allergens: ['eggs', 'milk', 'gluten'],
        dietary: ['vegetarian'],
      },
      {
        id: 'teleca-corba',
        name: { hr: 'Teleća čorba', en: 'Veal soup' },
        description: {
          hr: 'Gusta domaća juha od teletine i povrća.',
          en: 'A hearty home-style soup of veal and vegetables.',
        },
        price: 6,
        allergens: ['celery', 'gluten'],
        dietary: [],
      },
    ],
  },
  {
    id: 'rostilj',
    title: { hr: 'Sa žara', en: 'From the grill' },
    intro: {
      hr: 'Domaće meso s Rakitna, pečeno na pravom drvenom ugljenu — obilne porcije, bez prečaca.',
      en: 'Local Rakitno meat over real charcoal — generous portions, no shortcuts.',
    },
    items: [
      {
        id: 'cevapi',
        name: { hr: 'Ćevapi u somunu', en: 'Ćevapi in somun' },
        description: {
          hr: 'Deset ćevapa u toplom somunu, s kajmakom i lukom.',
          en: 'Ten ćevapi in warm somun flatbread, with kajmak and onion.',
        },
        price: 11,
        allergens: ['gluten', 'milk'],
        dietary: [],
        signature: true,
      },
      {
        id: 'ramstek',
        name: { hr: 'Ramstek s gradele', en: 'Grilled rump steak' },
        description: {
          hr: 'Junetina s gradele, pečeni krumpir, gljive i paprike, uz domaće umake.',
          en: 'Grilled beef rump, roast potato wedges, mushrooms and peppers, with homemade sauces.',
        },
        price: 32,
        allergens: ['mustard'],
        dietary: ['glutenFree'],
        signature: true,
      },
      {
        id: 'pljeskavica',
        name: { hr: 'Punjena pljeskavica', en: 'Stuffed pljeskavica' },
        description: {
          hr: 'Sočna pljeskavica punjena sirom i kajmakom, uz pomfrit i salatu.',
          en: 'Juicy pljeskavica filled with cheese and kajmak, with fries and salad.',
        },
        price: 14,
        allergens: ['gluten', 'milk'],
        dietary: [],
      },
      {
        id: 'mijesano-meso',
        name: { hr: 'Miješano meso Mašić', en: 'Mašić mixed grill' },
        description: {
          hr: 'Ćevapi, pljeskavica, ražnjići, pileći file, domaća kobasica i slanina, s prilozima.',
          en: 'Ćevapi, pljeskavica, skewers, chicken fillet, house sausage and bacon, with sides.',
        },
        price: 45,
        unit: { hr: 'za dvoje', en: 'for two' },
        allergens: ['gluten', 'milk', 'mustard'],
        dietary: [],
      },
      {
        id: 'raznjici',
        name: { hr: 'Svinjski ražnjići', en: 'Pork skewers' },
        description: {
          hr: 'Domaća svinjetina na ražnju, pečeni krumpir i ajvar.',
          en: 'Local pork on skewers, roast potatoes and ajvar.',
        },
        price: 15,
        allergens: [],
        dietary: ['glutenFree'],
      },
      {
        id: 'ljuta-kobasica',
        name: { hr: 'Domaća kobasica', en: 'House sausage' },
        description: {
          hr: 'Domaća kobasica s gradele, senf i pečeni krumpir. Može i ljuta.',
          en: 'Grilled house sausage, mustard and roast potatoes. Also available spicy.',
        },
        price: 12,
        allergens: ['mustard'],
        dietary: ['spicy', 'glutenFree'],
      },
    ],
  },
  {
    id: 'peka',
    title: { hr: 'Ispod peke', en: 'Under the peka' },
    intro: {
      hr: 'Najstariji hercegovački način pripreme — polako, ispod željeznog zvona i žara. Molimo najavu dan ranije.',
      en: 'The oldest Herzegovinian way of cooking — slowly, under an iron bell covered in embers. Please order a day ahead.',
    },
    items: [
      {
        id: 'teletina-peka',
        name: { hr: 'Domaća teletina ispod peke', en: 'Local veal under the peka' },
        description: {
          hr: 'Teletina s Rakitna i krumpir, pečeni satima ispod peke.',
          en: 'Rakitno veal and potatoes, roasted for hours under the bell.',
        },
        price: 70,
        unit: { hr: 'za dvoje', en: 'for two' },
        allergens: [],
        dietary: ['glutenFree'],
        signature: true,
      },
      {
        id: 'svinjetina-peka',
        name: { hr: 'Svinjetina ispod peke', en: 'Pork under the peka' },
        description: {
          hr: 'Domaća svinjetina s krumpirom i povrćem, ispod peke.',
          en: 'Local pork with potatoes and vegetables, under the peka.',
        },
        price: 60,
        unit: { hr: 'za dvoje', en: 'for two' },
        allergens: [],
        dietary: ['glutenFree'],
      },
      {
        id: 'kruh-peka',
        name: { hr: 'Domaći kruh ispod peke', en: 'Bread baked under the peka' },
        description: {
          hr: 'Kruh kakav su pekle naše bake — hrskave kore i mekane sredine.',
          en: 'Bread the way our grandmothers baked it — crisp crust, soft inside.',
        },
        price: 5,
        allergens: ['gluten'],
        dietary: ['vegan'],
      },
    ],
  },
  {
    id: 'domaca-kuhinja',
    title: { hr: 'Domaća kuhinja', en: 'Home cooking' },
    intro: {
      hr: 'Kuhana jela i pite — za one koji žele nešto domaće, toplo i brzo.',
      en: 'Cooked dishes and pies — for those who want something homemade, warm and quick.',
    },
    items: [
      {
        id: 'jelo-dana',
        name: { hr: 'Kuhano jelo dana', en: 'Cooked dish of the day' },
        description: {
          hr: 'Svaki dan drugo domaće jelo iz lonca — pitajte konobara.',
          en: 'A different home-cooked stew every day — ask your server.',
        },
        price: 12,
        allergens: ['celery'],
        dietary: [],
      },
      {
        id: 'becki-odrezak',
        name: { hr: 'Bečki odrezak', en: 'Wiener schnitzel' },
        description: {
          hr: 'Pohana teletina, pomfrit i sezonska salata.',
          en: 'Breaded veal, fries and seasonal salad.',
        },
        price: 18,
        allergens: ['gluten', 'eggs', 'milk'],
        dietary: [],
      },
      {
        id: 'zapeceni-makaroni',
        name: { hr: 'Zapečeni makaroni', en: 'Baked macaroni' },
        description: {
          hr: 'Makaroni zapečeni s mljevenim mesom, jajima i sirom.',
          en: 'Macaroni baked with minced meat, eggs and cheese.',
        },
        price: 12,
        allergens: ['gluten', 'eggs', 'milk'],
        dietary: [],
      },
      {
        id: 'pite',
        name: { hr: 'Domaće pite', en: 'Homemade pies' },
        description: {
          hr: 'Krumpiruša, sirnica ili zeljanica od ručno razvučenog tijesta.',
          en: 'Potato, cheese or spinach pie made from hand-stretched pastry.',
        },
        price: 8,
        allergens: ['gluten', 'milk', 'eggs'],
        dietary: ['vegetarian'],
      },
    ],
  },
  {
    id: 'prilozi',
    title: { hr: 'Prilozi', en: 'Sides' },
    items: [
      {
        id: 'krumpir',
        name: { hr: 'Pečeni krumpir', en: 'Roast potato wedges' },
        description: { hr: 'Sa začinskim biljem.', en: 'With herbs.' },
        price: 5,
        allergens: [],
        dietary: ['vegan', 'glutenFree'],
      },
      {
        id: 'gljive-povrce',
        name: { hr: 'Gljive i povrće s gradele', en: 'Grilled mushrooms and vegetables' },
        description: { hr: 'Šampinjoni i paprike sa žara.', en: 'Mushrooms and peppers from the grill.' },
        price: 6,
        allergens: [],
        dietary: ['vegan', 'glutenFree'],
      },
      {
        id: 'salata',
        name: { hr: 'Sezonska salata', en: 'Seasonal salad' },
        description: { hr: 'Domaće povrće iz okolice.', en: 'Local vegetables from nearby.' },
        price: 4,
        allergens: [],
        dietary: ['vegan', 'glutenFree'],
      },
      {
        id: 'kruh',
        name: { hr: 'Kruh iz naše pekarne', en: 'Bread from our bakery' },
        description: { hr: 'Pečen svako jutro.', en: 'Baked fresh every morning.' },
        price: 2,
        allergens: ['gluten'],
        dietary: ['vegan'],
      },
    ],
  },
  {
    id: 'deserti',
    title: { hr: 'Deserti', en: 'Desserts' },
    intro: {
      hr: 'Slatki kraj, domaći kao i sve ostalo.',
      en: 'A sweet ending, homemade like everything else.',
    },
    items: [
      {
        id: 'palacinke',
        name: { hr: 'Palačinke s orasima', en: 'Crêpes with walnuts' },
        description: {
          hr: 'Tanke palačinke s mljevenim orasima i domaćim pekmezom.',
          en: 'Thin crêpes with ground walnuts and homemade jam.',
        },
        price: 6,
        allergens: ['gluten', 'eggs', 'milk', 'nuts'],
        dietary: ['vegetarian'],
      },
      {
        id: 'baklava',
        name: { hr: 'Baklava', en: 'Baklava' },
        description: {
          hr: 'Tanko tijesto, orasi i sirup.',
          en: 'Thin pastry, walnuts and syrup.',
        },
        price: 5,
        allergens: ['gluten', 'nuts', 'milk'],
        dietary: ['vegetarian'],
      },
      {
        id: 'kolac-dana',
        name: { hr: 'Domaći kolač dana', en: 'Homemade cake of the day' },
        description: {
          hr: 'Pitajte što je danas izašlo iz naše pećnice.',
          en: 'Ask what came out of our oven today.',
        },
        price: 5,
        allergens: ['gluten', 'eggs', 'milk'],
        dietary: ['vegetarian'],
      },
    ],
  },
  {
    id: 'pica',
    title: { hr: 'Vina i pića', en: 'Wine & drinks' },
    intro: {
      hr: 'Domaće vino iz Čitluka, desetak vrsta piva i osvježenja za vruće dane na terasi.',
      en: 'House wine from Čitluk, around ten beers and refreshments for warm days on the terrace.',
    },
    items: [
      {
        id: 'zilavka',
        name: { hr: 'Domaća Žilavka', en: 'House Žilavka' },
        description: { hr: 'Bijelo vino iz Čitluka. Čaša 0,2 l.', en: 'White wine from Čitluk. Glass, 0.2 l.' },
        price: 4,
        allergens: ['sulphites'],
        dietary: ['vegan', 'glutenFree'],
      },
      {
        id: 'blatina',
        name: { hr: 'Domaća Blatina', en: 'House Blatina' },
        description: { hr: 'Crno vino iz Čitluka. Čaša 0,2 l.', en: 'Red wine from Čitluk. Glass, 0.2 l.' },
        price: 4,
        allergens: ['sulphites'],
        dietary: ['vegan', 'glutenFree'],
      },
      {
        id: 'gemist',
        name: { hr: 'Gemišt ili bevanda', en: 'Gemišt or bevanda' },
        description: {
          hr: 'Domaće vino s mineralnom ili običnom vodom.',
          en: 'House wine with sparkling or still water.',
        },
        price: 3,
        allergens: ['sulphites'],
        dietary: ['vegan', 'glutenFree'],
      },
      {
        id: 'sok-nar',
        name: { hr: 'Domaći sok od nara', en: 'Homemade pomegranate juice' },
        description: { hr: 'Sezonski, prema dostupnosti.', en: 'Seasonal, while available.' },
        price: 5,
        allergens: [],
        dietary: ['vegan', 'glutenFree'],
      },
    ],
  },
]

export const allMenuItems: MenuItem[] = menuCategories.flatMap((category) => category.items)

export function getMenuItem(id: string): MenuItem | undefined {
  return allMenuItems.find((item) => item.id === id)
}

const standardAllergenOrder: AllergenCode[] = [
  'gluten',
  'crustaceans',
  'eggs',
  'fish',
  'peanuts',
  'soy',
  'milk',
  'nuts',
  'celery',
  'mustard',
  'sesame',
  'sulphites',
  'lupin',
  'molluscs',
]

const usedAllergens = new Set(allMenuItems.flatMap((item) => item.allergens))

/** Only allergens that actually appear on the menu are listed in the legend. */
export const allergenOrder: AllergenCode[] = standardAllergenOrder.filter((code) => usedAllergens.has(code))

export const allergenLabels: Record<AllergenCode, Localized> = {
  gluten: { hr: 'Gluten', en: 'Gluten' },
  crustaceans: { hr: 'Rakovi', en: 'Crustaceans' },
  eggs: { hr: 'Jaja', en: 'Eggs' },
  fish: { hr: 'Riba', en: 'Fish' },
  peanuts: { hr: 'Kikiriki', en: 'Peanuts' },
  soy: { hr: 'Soja', en: 'Soy' },
  milk: { hr: 'Mlijeko', en: 'Milk' },
  nuts: { hr: 'Orašasti plodovi', en: 'Tree nuts' },
  celery: { hr: 'Celer', en: 'Celery' },
  mustard: { hr: 'Gorušica', en: 'Mustard' },
  sesame: { hr: 'Sezam', en: 'Sesame' },
  sulphites: { hr: 'Sulfiti', en: 'Sulphites' },
  lupin: { hr: 'Lupina', en: 'Lupin' },
  molluscs: { hr: 'Mekušci', en: 'Molluscs' },
}

export const dietaryLabels: Record<DietaryTag, { short: Localized; label: Localized }> = {
  vegetarian: { short: { hr: 'V', en: 'V' }, label: { hr: 'Vegetarijansko', en: 'Vegetarian' } },
  vegan: { short: { hr: 'VG', en: 'VG' }, label: { hr: 'Vegansko', en: 'Vegan' } },
  glutenFree: { short: { hr: 'BG', en: 'GF' }, label: { hr: 'Bez glutena', en: 'Gluten-free' } },
  spicy: { short: { hr: 'LJ', en: 'S' }, label: { hr: 'Ljuto', en: 'Spicy' } },
}
