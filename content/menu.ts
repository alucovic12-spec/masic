import type { AllergenCode, DietaryTag, MenuCategory, MenuItem } from './types'
import type { Localized } from '@/lib/i18n'

/**
 * Menu data. Prices are indicative placeholders in EUR and must be confirmed
 * by the restaurant. Allergen codes follow EU Regulation 1169/2011 (14 allergens).
 */
export const menuCategories: MenuCategory[] = [
  {
    id: 'predjela',
    title: { hr: 'Predjela', en: 'Starters' },
    intro: {
      hr: 'Za početak, uz čašu vina i topli domaći kruh.',
      en: 'To begin, with a glass of wine and warm homemade bread.',
    },
    items: [
      {
        id: 'plata-delicija',
        name: { hr: 'Plata domaćih delicija', en: 'Platter of local delicacies' },
        description: {
          hr: 'Dalmatinski pršut, zreli ovčji sir, masline i pečene paprike.',
          en: 'Dalmatian prosciutto, aged sheep’s cheese, olives and roasted peppers.',
        },
        price: 16,
        allergens: ['milk'],
        dietary: ['glutenFree'],
      },
      {
        id: 'salata-hobotnica',
        name: { hr: 'Salata od hobotnice', en: 'Octopus salad' },
        description: {
          hr: 'Kuhana hobotnica, krumpir, crveni luk, kapari i maslinovo ulje.',
          en: 'Braised octopus, potato, red onion, capers and olive oil.',
        },
        price: 15,
        allergens: ['molluscs', 'celery'],
        dietary: ['glutenFree'],
      },
      {
        id: 'ajvar-kajmak',
        name: { hr: 'Ajvar i kajmak s lepinjom', en: 'Ajvar and kajmak with flatbread' },
        description: {
          hr: 'Domaći ajvar od pečenih paprika, svježi kajmak i topla lepinja iz pećnice.',
          en: 'Homemade roasted pepper ajvar, fresh kajmak and warm flatbread from the oven.',
        },
        price: 8.5,
        allergens: ['gluten', 'milk'],
        dietary: ['vegetarian'],
      },
      {
        id: 'juha-rajcica',
        name: { hr: 'Juha od pečene rajčice', en: 'Roasted tomato soup' },
        description: {
          hr: 'Sezonske rajčice, bosiljak i kap maslinova ulja.',
          en: 'Seasonal tomatoes, basil and a drizzle of olive oil.',
        },
        price: 6.5,
        allergens: ['celery'],
        dietary: ['vegan', 'glutenFree'],
      },
    ],
  },
  {
    id: 'rostilj',
    title: { hr: 'Sa žara', en: 'From the grill' },
    intro: {
      hr: 'Meso pripremamo na pravom drvenom ugljenu, onako kako se oduvijek radilo.',
      en: 'Grilled over real charcoal, the way it has always been done.',
    },
    items: [
      {
        id: 'cevapi',
        name: { hr: 'Ćevapi u somunu', en: 'Ćevapi in somun' },
        description: {
          hr: 'Deset ćevapa od junetine u toplom somunu, s kajmakom, ajvarom i lukom.',
          en: 'Ten beef ćevapi in warm somun flatbread, with kajmak, ajvar and onion.',
        },
        price: 13,
        allergens: ['gluten', 'milk'],
        dietary: [],
        signature: true,
      },
      {
        id: 'pljeskavica',
        name: { hr: 'Pljeskavica punjena sirom', en: 'Cheese-stuffed pljeskavica' },
        description: {
          hr: 'Sočna pljeskavica punjena sirom, uz pečeni krumpir i salatu od kupusa.',
          en: 'Juicy pljeskavica filled with cheese, with roast potatoes and cabbage salad.',
        },
        price: 14.5,
        allergens: ['gluten', 'milk'],
        dietary: [],
      },
      {
        id: 'mijesano-meso',
        name: { hr: 'Miješano meso Mašić', en: 'Mašić mixed grill' },
        description: {
          hr: 'Ćevapi, pljeskavica, pileći file, kobasica i ražnjići, s prilozima.',
          en: 'Ćevapi, pljeskavica, chicken fillet, sausage and skewers, with sides.',
        },
        price: 38,
        unit: { hr: 'za dvoje', en: 'for two' },
        allergens: ['gluten', 'milk', 'mustard'],
        dietary: [],
      },
      {
        id: 'ramstek',
        name: { hr: 'Ramstek s pečenim povrćem', en: 'Rump steak with roasted vegetables' },
        description: {
          hr: 'Juneći ramstek s gradele, sezonsko povrće i maslac sa začinskim biljem.',
          en: 'Grilled beef rump steak, seasonal vegetables and herb butter.',
        },
        price: 26,
        allergens: ['milk'],
        dietary: ['glutenFree'],
      },
      {
        id: 'ljuta-kobasica',
        name: { hr: 'Domaća ljuta kobasica', en: 'Spicy house sausage' },
        description: {
          hr: 'Kobasica s ljutom paprikom, senf i pečeni krumpir.',
          en: 'Sausage with hot paprika, mustard and roast potatoes.',
        },
        price: 12.5,
        allergens: ['mustard'],
        dietary: ['spicy', 'glutenFree'],
      },
    ],
  },
  {
    id: 'more',
    title: { hr: 'Iz mora', en: 'From the sea' },
    intro: {
      hr: 'Riba i plodovi mora prema dnevnom ulovu — pitajte za preporuku.',
      en: 'Fish and seafood according to the daily catch — ask us for today’s recommendation.',
    },
    items: [
      {
        id: 'orada',
        name: { hr: 'Orada s gradele', en: 'Grilled sea bream' },
        description: {
          hr: 'Cijela orada s gradele, blitva s krumpirom i maslinovo ulje s češnjakom.',
          en: 'Whole grilled sea bream, Swiss chard with potatoes and garlic olive oil.',
        },
        price: 22,
        allergens: ['fish'],
        dietary: ['glutenFree'],
        signature: true,
      },
      {
        id: 'crni-rizot',
        name: { hr: 'Crni rižot od sipe', en: 'Black cuttlefish risotto' },
        description: {
          hr: 'Kremasti rižot sa sipom i njezinim crnilom, peršin i korica limuna.',
          en: 'Creamy risotto with cuttlefish and its ink, parsley and lemon zest.',
        },
        price: 17,
        allergens: ['molluscs', 'milk', 'sulphites', 'celery'],
        dietary: ['glutenFree'],
        signature: true,
      },
      {
        id: 'lignje',
        name: { hr: 'Lignje na žaru', en: 'Grilled squid' },
        description: {
          hr: 'Jadranske lignje, blitva, limun i domaće maslinovo ulje.',
          en: 'Adriatic squid, Swiss chard, lemon and local olive oil.',
        },
        price: 18,
        allergens: ['molluscs'],
        dietary: ['glutenFree'],
      },
      {
        id: 'brudet',
        name: { hr: 'Riblji brudet s palentom', en: 'Fish brudet with polenta' },
        description: {
          hr: 'Polagano kuhani gulaš od nekoliko vrsta ribe i škampa, uz mekanu palentu.',
          en: 'Slow-cooked stew of mixed fish and langoustines, served with soft polenta.',
        },
        price: 21,
        allergens: ['fish', 'crustaceans', 'celery', 'sulphites'],
        dietary: ['glutenFree'],
      },
    ],
  },
  {
    id: 'domaca-kuhinja',
    title: { hr: 'Domaća kuhinja', en: 'Home cooking' },
    intro: {
      hr: 'Jela koja traže vrijeme i strpljenje — baš kao kod kuće.',
      en: 'Dishes that take time and patience — just like at home.',
    },
    items: [
      {
        id: 'peka',
        name: { hr: 'Teletina ispod peke', en: 'Veal under the peka' },
        description: {
          hr: 'Teletina i krumpir s ružmarinom, pečeni ispod željeznog zvona na žaru. Najava 24 sata unaprijed.',
          en: 'Veal and potatoes with rosemary, slow-roasted under an iron bell in embers. Please order 24 hours ahead.',
        },
        price: 48,
        unit: { hr: 'za dvoje', en: 'for two' },
        allergens: [],
        dietary: ['glutenFree'],
        signature: true,
      },
      {
        id: 'gulas',
        name: { hr: 'Junetina u umaku s njokima', en: 'Braised beef with gnocchi' },
        description: {
          hr: 'Polagano pirjana junetina u umaku od crnog vina, uz domaće njoke.',
          en: 'Beef braised slowly in red wine sauce, with homemade gnocchi.',
        },
        price: 15.5,
        allergens: ['gluten', 'eggs', 'celery', 'sulphites'],
        dietary: [],
      },
      {
        id: 'punjene-paprike',
        name: { hr: 'Punjene paprike', en: 'Stuffed peppers' },
        description: {
          hr: 'Paprike punjene mesom i rižom, u umaku od rajčice, uz pire krumpir.',
          en: 'Peppers filled with meat and rice in tomato sauce, with mashed potatoes.',
        },
        price: 14,
        allergens: ['milk', 'celery'],
        dietary: ['glutenFree'],
      },
      {
        id: 'tjestenina-povrce',
        name: { hr: 'Tjestenina sa sezonskim povrćem', en: 'Pasta with seasonal vegetables' },
        description: {
          hr: 'Tjestenina, pečeno povrće, češnjak, čili i maslinovo ulje.',
          en: 'Pasta, roasted vegetables, garlic, chilli and olive oil.',
        },
        price: 12,
        allergens: ['gluten'],
        dietary: ['vegan'],
      },
    ],
  },
  {
    id: 'prilozi',
    title: { hr: 'Prilozi', en: 'Sides' },
    items: [
      {
        id: 'blitva',
        name: { hr: 'Blitva s krumpirom', en: 'Swiss chard with potatoes' },
        description: { hr: 'S maslinovim uljem i češnjakom.', en: 'With olive oil and garlic.' },
        price: 5,
        allergens: [],
        dietary: ['vegan', 'glutenFree'],
      },
      {
        id: 'peceno-povrce',
        name: { hr: 'Pečeno sezonsko povrće', en: 'Roasted seasonal vegetables' },
        description: { hr: 'Povrće s gradele i začinsko bilje.', en: 'Grilled vegetables with herbs.' },
        price: 5.5,
        allergens: [],
        dietary: ['vegan', 'glutenFree'],
      },
      {
        id: 'pomfrit',
        name: { hr: 'Domaći pomfrit', en: 'Hand-cut fries' },
        description: { hr: 'Ručno rezan krumpir i morska sol.', en: 'Hand-cut potatoes and sea salt.' },
        price: 4,
        allergens: [],
        dietary: ['vegan', 'glutenFree'],
      },
      {
        id: 'kruh',
        name: { hr: 'Domaći kruh', en: 'Homemade bread' },
        description: { hr: 'Pečen svako jutro.', en: 'Baked fresh every morning.' },
        price: 2.5,
        allergens: ['gluten'],
        dietary: ['vegan'],
      },
    ],
  },
  {
    id: 'deserti',
    title: { hr: 'Deserti', en: 'Desserts' },
    intro: {
      hr: 'Sve slastice pripremamo sami, svaki dan.',
      en: 'All of our desserts are made in-house, every day.',
    },
    items: [
      {
        id: 'rozata',
        name: { hr: 'Rožata', en: 'Rožata' },
        description: {
          hr: 'Dubrovačka krema od jaja s karamelom i notom ruže.',
          en: 'Dubrovnik-style caramel custard with a hint of rose.',
        },
        price: 6.5,
        allergens: ['eggs', 'milk'],
        dietary: ['vegetarian', 'glutenFree'],
      },
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
          hr: 'Tanko lisnato tijesto, orasi i sirup od limuna.',
          en: 'Thin filo pastry, walnuts and lemon syrup.',
        },
        price: 6,
        allergens: ['gluten', 'nuts', 'milk'],
        dietary: ['vegetarian'],
      },
    ],
  },
]

export const allMenuItems: MenuItem[] = menuCategories.flatMap((category) => category.items)

export function getMenuItem(id: string): MenuItem | undefined {
  return allMenuItems.find((item) => item.id === id)
}

export const allergenOrder: AllergenCode[] = [
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
