import { images } from './images'
import type { AboutContent } from './types'

export const about: AboutContent = {
  seo: {
    title: { hr: 'O nama', en: 'About us' },
    description: {
      hr: 'Priča Restorana Mašić s Rakitna: obitelj Mašić, domaće meso iz kraja, peka, roštilj i vlastita pekarna od 2014. godine.',
      en: 'The story of Restoran Mašić in Rakitno: the Mašić family, local meat, peka, charcoal grill and their own bakery since 2014.',
    },
    image: images.stol,
  },
  eyebrow: { hr: 'O nama', en: 'About us' },
  title: {
    hr: 'Ovdje smo sebi napravili dom.',
    en: 'We built our home right here.',
  },
  lead: {
    hr: 'Mašić je obiteljska kuća na Rakitnu, u hercegovačkim Alpama, gdje su domaća hrana, ljudi i vrijeme za stolom jednako važni.',
    en: 'Mašić is a family house in Rakitno, in the Herzegovinian Alps, where home-style food, people and time at the table matter equally.',
  },
  sections: [
    {
      id: 'prica',
      eyebrow: { hr: 'Priča', en: 'Story' },
      title: { hr: 'Sve je počelo 2014.', en: 'It all began in 2014.' },
      body: {
        hr: [
          'Ante i Kristina vjenčali su se 2014. i odlučili — šta god bilo — otvoriti restoran. Umjesto odlaska u inozemstvo, ostali su na Rakitnu i ovdje sebi napravili život.',
          'Mali grill uz cestu za Blidinje prerastao je u uređen restoran s pekarnom. Danas imamo pet zaposlenih i goste koji dolaze ciljano, a ne samo usput.',
        ],
        en: [
          'Ante and Kristina married in 2014 and decided — come what may — to open a restaurant. Instead of leaving to work abroad, they stayed in Rakitno and built their life here.',
          'A small grill on the road to Blidinje grew into a proper restaurant with its own bakery. Today we have five staff and guests who come here on purpose, not just in passing.',
        ],
      },
      image: images.vanjski,
    },
    {
      id: 'kuhinja',
      eyebrow: { hr: 'Kuhinja', en: 'Kitchen' },
      title: { hr: 'Hercegovački, bez prečaca.', en: 'Herzegovinian, no shortcuts.' },
      body: {
        hr: [
          'Kuhamo ono što ovaj kraj zna najbolje — peku s domaćom teletinom i svinjetinom, roštilj na drvenom ugljenu, uštipke, pite i kuhana jela dana.',
          'Kruh pečemo u vlastitoj pekarni, a onaj najbolji — ispod peke. Uz jelo nudimo domaće crno i bijelo vino iz Čitluka.',
        ],
        en: [
          'We cook what this region knows best — peka with local veal and pork, charcoal grill, uštipci, pies and a cooked dish of the day.',
          'We bake bread in our own bakery, and the best of it under the peka. With your meal, we pour house red and white wine from Čitluk.',
        ],
      },
      image: images.steak,
    },
    {
      id: 'namirnice',
      eyebrow: { hr: 'Namirnice', en: 'Ingredients' },
      title: { hr: 'Meso iz cijelog Rakitna.', en: 'Meat from all over Rakitno.' },
      body: {
        hr: [
          'Rakitno je oduvijek kraj stočara. Teletinu i svinjetinu kupujemo od domaćih ljudi po cijelom mjestu — i upravo to goste vraća k nama.',
          'Pršut, sir, kajmak i povrće dolaze iz okolice. Dobra, fina, svježa i obilna porcija — to je cijela tajna.',
        ],
        en: [
          'Rakitno has always been cattle country. We buy our veal and pork from local farmers all over the village — and that is exactly what brings guests back.',
          'Prosciutto, cheese, kajmak and vegetables come from nearby. A good, tasty, fresh and generous portion — that is the whole secret.',
        ],
      },
      image: images.plata,
    },
    {
      id: 'gostoprimstvo',
      eyebrow: { hr: 'Gostoprimstvo', en: 'Hospitality' },
      title: { hr: 'Za dvoje ili za pedeset.', en: 'For two or for fifty.' },
      body: {
        hr: [
          'Svijetla blagovaonica prima više od stotinu gostiju, a ostakljena terasa grije i zimi. Jednako je ugodno doći u dvoje ili proslaviti krizmu i krštenje s cijelom obitelji.',
          'Bilo da ste na putu za Blidinje ili dolazite baš k nama — dobro došli. Osjećajte se kao kod kuće.',
        ],
        en: [
          'The bright dining room seats more than a hundred guests, and the glass-enclosed terrace stays warm even in winter. It is just as cosy to come as a couple as it is to celebrate a christening with the whole family.',
          'Whether you are on your way to Blidinje or coming especially to see us — welcome. Make yourself at home.',
        ],
      },
      image: images.terasa,
    },
  ],
  values: [
    {
      title: { hr: 'Domaće meso', en: 'Local meat' },
      body: {
        hr: 'Teletina i svinjetina s Rakitna.',
        en: 'Veal and pork from Rakitno farms.',
      },
    },
    {
      title: { hr: 'Vlastita pekarna', en: 'Our own bakery' },
      body: {
        hr: 'Kruh, pite i kolači iz naše pećnice.',
        en: 'Bread, pies and cakes from our own oven.',
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
