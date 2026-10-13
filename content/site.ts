import { images } from './images'
import type { NavItem, RouteKey, SeoFields, SiteSettings } from './types'

export const routes: Record<RouteKey, string> = {
  home: '',
  menu: '/menu',
  gallery: '/gallery',
  about: '/about',
  contact: '/contact',
  privacy: '/privacy',
  cookies: '/cookies',
}

/**
 * Global settings. Fields marked as placeholders (phone, email, address, hours)
 * must be replaced with verified data before launch — search the codebase for
 * `isPlaceholder` to find every place that surfaces them.
 */
export const site: SiteSettings = {
  name: 'Restoran Mašić',
  shortName: 'Mašić',
  tagline: {
    hr: 'Dobro došli. Osjećajte se kao kod kuće.',
    en: 'Welcome. Make yourself at home.',
  },
  description: {
    hr: 'Obiteljski restoran u Hrvatskoj: roštilj sa žara, riba s Jadrana i domaća jela koja se kuhaju polako.',
    en: 'A family restaurant in Croatia: fire-grilled classics, Adriatic fish and slow-cooked home cooking.',
  },
  siteUrl: (process.env.NEXT_PUBLIC_SITE_URL ?? 'https://restoran-masic.hr').replace(/\/$/, ''),
  instagram: {
    handle: '@restaurant_masic',
    url: 'https://www.instagram.com/restaurant_masic',
  },
  priceRange: '€€',
  cuisines: {
    hr: ['Hrvatska kuhinja', 'Roštilj', 'Riba i plodovi mora'],
    en: ['Croatian', 'Grill', 'Seafood'],
  },
  contact: {
    phone: { display: '+385 00 000 0000', href: 'tel:+385000000000' },
    email: 'info@restoran-masic.hr',
    address: {
      street: { hr: 'Adresa restorana (potvrditi)', en: 'Restaurant address (to be confirmed)' },
      postalCode: '00000',
      city: { hr: 'Hrvatska', en: 'Croatia' },
      country: { hr: 'Hrvatska', en: 'Croatia' },
      countryCode: 'HR',
    },
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=Restoran+Ma%C5%A1i%C4%87',
    isPlaceholder: true,
  },
  openingHours: [
    {
      days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday'],
      label: { hr: 'Ponedjeljak – Četvrtak', en: 'Monday – Thursday' },
      opens: '11:00',
      closes: '23:00',
    },
    {
      days: ['Friday', 'Saturday'],
      label: { hr: 'Petak – Subota', en: 'Friday – Saturday' },
      opens: '11:00',
      closes: '24:00',
    },
    {
      days: ['Sunday'],
      label: { hr: 'Nedjelja', en: 'Sunday' },
      opens: '12:00',
      closes: '22:00',
    },
  ],
  openingHoursIsPlaceholder: true,
  defaultImage: images.hero,
}

export const navigation: NavItem[] = [
  { route: 'home', label: { hr: 'Početna', en: 'Home' } },
  { route: 'menu', label: { hr: 'Jelovnik', en: 'Menu' } },
  { route: 'gallery', label: { hr: 'Galerija', en: 'Gallery' } },
  { route: 'about', label: { hr: 'O nama', en: 'About' } },
  { route: 'contact', label: { hr: 'Kontakt', en: 'Contact' } },
]

export const legalNavigation: NavItem[] = [
  { route: 'privacy', label: { hr: 'Politika privatnosti', en: 'Privacy policy' } },
  { route: 'cookies', label: { hr: 'Politika kolačića', en: 'Cookie policy' } },
]

export const pageSeo: Record<'menu' | 'gallery' | 'contact', SeoFields> = {
  menu: {
    title: { hr: 'Jelovnik', en: 'Menu' },
    description: {
      hr: 'Jelovnik Restorana Mašić: ćevapi i roštilj sa žara, riba s gradele, crni rižot, peka i domaći deserti — s oznakama alergena i cijenama.',
      en: 'The Restoran Mašić menu: ćevapi and fire-grilled meats, grilled fish, black risotto, peka and homemade desserts — with allergens and prices.',
    },
    image: images.cevapi,
  },
  gallery: {
    title: { hr: 'Galerija', en: 'Gallery' },
    description: {
      hr: 'Pogledajte jela, blagovaonicu i terasu Restorana Mašić.',
      en: 'See the dishes, dining room and terrace at Restoran Mašić.',
    },
    image: images.interior,
  },
  contact: {
    title: { hr: 'Kontakt i rezervacije', en: 'Contact & reservations' },
    description: {
      hr: 'Rezervirajte stol u Restoranu Mašić. Radno vrijeme, kontakt i upute za dolazak.',
      en: 'Reserve a table at Restoran Mašić. Opening hours, contact details and directions.',
    },
    image: images.terrace,
  },
}
