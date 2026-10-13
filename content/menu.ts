import type { MenuCategory, MenuItem } from './types'

/**
 * Menu data. Dishes follow the restaurant's known offer (press and Instagram);
 * prices are indicative in KM (BAM) and must be confirmed by the restaurant.
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
      },
      {
        id: 'jaja-sir',
        name: { hr: 'Jaja sa svježim sirom', en: 'Eggs with fresh cheese' },
        description: {
          hr: 'Domaća jaja zapečena sa svježim sirom, uz kruh iz naše pekarne.',
          en: 'Farm eggs baked with fresh cheese, with bread from our own bakery.',
        },
        price: 8,
      },
      {
        id: 'teleca-corba',
        name: { hr: 'Teleća čorba', en: 'Veal soup' },
        description: {
          hr: 'Gusta domaća juha od teletine i povrća.',
          en: 'A hearty home-style soup of veal and vegetables.',
        },
        price: 6,
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
      },
      {
        id: 'raznjici',
        name: { hr: 'Svinjski ražnjići', en: 'Pork skewers' },
        description: {
          hr: 'Domaća svinjetina na ražnju, pečeni krumpir i ajvar.',
          en: 'Local pork on skewers, roast potatoes and ajvar.',
        },
        price: 15,
      },
      {
        id: 'ljuta-kobasica',
        name: { hr: 'Domaća kobasica', en: 'House sausage' },
        description: {
          hr: 'Domaća kobasica s gradele, senf i pečeni krumpir. Može i ljuta.',
          en: 'Grilled house sausage, mustard and roast potatoes. Also available spicy.',
        },
        price: 12,
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
      },
      {
        id: 'kruh-peka',
        name: { hr: 'Domaći kruh ispod peke', en: 'Bread baked under the peka' },
        description: {
          hr: 'Kruh kakav su pekle naše bake — hrskave kore i mekane sredine.',
          en: 'Bread the way our grandmothers baked it — crisp crust, soft inside.',
        },
        price: 5,
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
      },
      {
        id: 'becki-odrezak',
        name: { hr: 'Bečki odrezak', en: 'Wiener schnitzel' },
        description: {
          hr: 'Pohana teletina, pomfrit i sezonska salata.',
          en: 'Breaded veal, fries and seasonal salad.',
        },
        price: 18,
      },
      {
        id: 'zapeceni-makaroni',
        name: { hr: 'Zapečeni makaroni', en: 'Baked macaroni' },
        description: {
          hr: 'Makaroni zapečeni s mljevenim mesom, jajima i sirom.',
          en: 'Macaroni baked with minced meat, eggs and cheese.',
        },
        price: 12,
      },
      {
        id: 'pite',
        name: { hr: 'Domaće pite', en: 'Homemade pies' },
        description: {
          hr: 'Krumpiruša, sirnica ili zeljanica od ručno razvučenog tijesta.',
          en: 'Potato, cheese or spinach pie made from hand-stretched pastry.',
        },
        price: 8,
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
      },
      {
        id: 'gljive-povrce',
        name: { hr: 'Gljive i povrće s gradele', en: 'Grilled mushrooms and vegetables' },
        description: { hr: 'Šampinjoni i paprike sa žara.', en: 'Mushrooms and peppers from the grill.' },
        price: 6,
      },
      {
        id: 'salata',
        name: { hr: 'Sezonska salata', en: 'Seasonal salad' },
        description: { hr: 'Domaće povrće iz okolice.', en: 'Local vegetables from nearby.' },
        price: 4,
      },
      {
        id: 'kruh',
        name: { hr: 'Kruh iz naše pekarne', en: 'Bread from our bakery' },
        description: { hr: 'Pečen svako jutro.', en: 'Baked fresh every morning.' },
        price: 2,
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
      },
      {
        id: 'baklava',
        name: { hr: 'Baklava', en: 'Baklava' },
        description: {
          hr: 'Tanko tijesto, orasi i sirup.',
          en: 'Thin pastry, walnuts and syrup.',
        },
        price: 5,
      },
      {
        id: 'kolac-dana',
        name: { hr: 'Domaći kolač dana', en: 'Homemade cake of the day' },
        description: {
          hr: 'Pitajte što je danas izašlo iz naše pećnice.',
          en: 'Ask what came out of our oven today.',
        },
        price: 5,
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
      },
      {
        id: 'blatina',
        name: { hr: 'Domaća Blatina', en: 'House Blatina' },
        description: { hr: 'Crno vino iz Čitluka. Čaša 0,2 l.', en: 'Red wine from Čitluk. Glass, 0.2 l.' },
        price: 4,
      },
      {
        id: 'gemist',
        name: { hr: 'Gemišt ili bevanda', en: 'Gemišt or bevanda' },
        description: {
          hr: 'Domaće vino s mineralnom ili običnom vodom.',
          en: 'House wine with sparkling or still water.',
        },
        price: 3,
      },
      {
        id: 'sok-nar',
        name: { hr: 'Domaći sok od nara', en: 'Homemade pomegranate juice' },
        description: { hr: 'Sezonski, prema dostupnosti.', en: 'Seasonal, while available.' },
        price: 5,
      },
    ],
  },
]

export const allMenuItems: MenuItem[] = menuCategories.flatMap((category) => category.items)

export function getMenuItem(id: string): MenuItem | undefined {
  return allMenuItems.find((item) => item.id === id)
}

