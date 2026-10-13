import { images } from './images'
import type { AboutContent } from './types'

export const about: AboutContent = {
  seo: {
    title: { hr: 'O nama', en: 'About us' },
    description: {
      hr: 'Priča Restorana Mašić: obiteljsko gostoprimstvo, kuhanje na žaru, lokalne namirnice i jela koja se kuhaju polako.',
      en: 'The story of Restoran Mašić: family hospitality, charcoal cooking, local ingredients and slow-cooked dishes.',
    },
    image: images.interior,
  },
  eyebrow: { hr: 'O nama', en: 'About us' },
  title: {
    hr: 'Gostoprimstvo koje se ne uči napamet.',
    en: 'Hospitality you can’t learn by heart.',
  },
  lead: {
    hr: 'Mašić je obiteljska kuća u kojoj su hrana, ljudi i vrijeme za stolom jednako važni.',
    en: 'Mašić is a family house where food, people and time at the table matter equally.',
  },
  sections: [
    {
      id: 'prica',
      eyebrow: { hr: 'Priča', en: 'Story' },
      title: { hr: 'Počelo je za obiteljskim stolom.', en: 'It started at the family table.' },
      body: {
        hr: [
          'Ideja o restoranu nastala je tamo gdje nastaju najbolje stvari — za velikim stolom, uz roštilj, razgovor i ljude koji se ne žure kući.',
          'Taj osjećaj željeli smo podijeliti sa svima. Zato je Mašić mjesto gdje se gosti pozdravljaju po imenu, a jela poslužuju onako kako bismo ih poslužili vlastitoj obitelji.',
        ],
        en: [
          'The idea for the restaurant was born where the best things are — around a big table, with the grill going, good conversation and people in no hurry to go home.',
          'We wanted to share that feeling with everyone. That’s why Mašić is a place where guests are greeted by name and dishes are served the way we would serve our own family.',
        ],
      },
      image: images.interior,
    },
    {
      id: 'filozofija',
      eyebrow: { hr: 'Filozofija', en: 'Philosophy' },
      title: { hr: 'Manje, ali bolje.', en: 'Less, but better.' },
      body: {
        hr: [
          'Ne vjerujemo u beskrajne jelovnike. Kuhamo ono što znamo dobro — roštilj na drvenom ugljenu, ribu s gradele i domaća jela koja traže vremena.',
          'Svako jelo mora proći jednostavan test: bismo li ga s ponosom stavili na vlastiti stol?',
        ],
        en: [
          'We don’t believe in endless menus. We cook what we know well — charcoal grilling, fish from the grill and home-style dishes that need time.',
          'Every dish has to pass one simple test: would we proudly put it on our own table?',
        ],
      },
      image: images.kitchen,
    },
    {
      id: 'namirnice',
      eyebrow: { hr: 'Namirnice', en: 'Ingredients' },
      title: { hr: 'Iz blizine, prema sezoni.', en: 'From nearby, by the season.' },
      body: {
        hr: [
          'Meso nabavljamo od provjerenih lokalnih dobavljača, ribu prema dnevnom ulovu, a povrće i začinsko bilje od malih proizvođača iz okolice.',
          'Kruh, umake, ajvar i deserte pripremamo sami. Kad nešto nije u sezoni, jednostavno ga nema na jelovniku.',
        ],
        en: [
          'Our meat comes from trusted local suppliers, our fish from the daily catch, and our vegetables and herbs from small growers nearby.',
          'We make our own bread, sauces, ajvar and desserts. When something is out of season, it simply isn’t on the menu.',
        ],
      },
      image: images.ingredients,
    },
    {
      id: 'gostoprimstvo',
      eyebrow: { hr: 'Gostoprimstvo', en: 'Hospitality' },
      title: { hr: 'Kod nas se ne žuri.', en: 'There’s no rush here.' },
      body: {
        hr: [
          'Stol je vaš koliko god želite. Rado ćemo preporučiti vino, prilagoditi jelo ili pripremiti nešto posebno za djecu.',
          'Bilo da dolazite prvi put ili ste stalni gosti — dobro došli. Osjećajte se kao kod kuće.',
        ],
        en: [
          'The table is yours for as long as you like. We’re happy to recommend a wine, adapt a dish or prepare something special for the kids.',
          'Whether it’s your first visit or you’re a regular — welcome. Make yourself at home.',
        ],
      },
      image: images.terrace,
    },
  ],
  values: [
    {
      title: { hr: 'Pravi žar', en: 'Real fire' },
      body: {
        hr: 'Roštilj na drvenom ugljenu, bez prečaca.',
        en: 'Charcoal grilling, with no shortcuts.',
      },
    },
    {
      title: { hr: 'Domaće ruke', en: 'Made by hand' },
      body: {
        hr: 'Kruh, umaci i deserti iz naše kuhinje.',
        en: 'Bread, sauces and desserts from our own kitchen.',
      },
    },
    {
      title: { hr: 'Topla dobrodošlica', en: 'A warm welcome' },
      body: {
        hr: 'Svaki gost dočekan kao član obitelji.',
        en: 'Every guest welcomed like family.',
      },
    },
  ],
  closing: {
    hr: 'Dobro došli. Osjećajte se kao kod kuće.',
    en: 'Welcome. Make yourself at home.',
  },
}
