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
 * Global settings. Phone and location are verified (restaurant sign and press);
 * email and opening hours still need confirmation — see `isPlaceholder`.
 */
export const site: SiteSettings = {
  name: 'Restoran Mašić',
  shortName: 'Mašić',
  tagline: {
    hr: 'Dobro došli. Osjećajte se kao kod kuće.',
    en: 'Welcome. Make yourself at home.',
  },
  description: {
    hr: 'Obiteljski restoran i pekarna na Rakitnu, na putu za Blidinje: domaća hercegovačka jela, peka, roštilj sa žara i kruh ispod peke.',
    en: 'A family restaurant and bakery in Rakitno, on the road to Blidinje: home-style Herzegovinian food, peka, charcoal grill and bread baked under the bell.',
  },
  siteUrl: (process.env.NEXT_PUBLIC_SITE_URL ?? 'https://restoran-masic.com').replace(/\/$/, ''),
  instagram: {
    handle: '@restaurant_masic',
    url: 'https://www.instagram.com/restaurant_masic',
  },
  priceRange: '$$',
  cuisines: {
    hr: ['Hercegovačka kuhinja', 'Roštilj', 'Peka', 'Domaća kuhinja'],
    en: ['Herzegovinian', 'Grill', 'Peka', 'Home cooking'],
  },
  contact: {
    phone: { display: '+387 39 692 482', href: 'tel:+38739692482' },
    email: 'info@restoran-masic.com',
    address: {
      street: { hr: 'Poklečani, Rakitno', en: 'Poklečani, Rakitno' },
      postalCode: '88240',
      city: { hr: 'Posušje', en: 'Posušje' },
      country: { hr: 'Bosna i Hercegovina', en: 'Bosnia and Herzegovina' },
      countryCode: 'BA',
    },
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=Restoran+Ma%C5%A1i%C4%87+Rakitno',
    isPlaceholder: true,
  },
  openingHours: [
    {
      days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      label: { hr: 'Ponedjeljak – Petak', en: 'Monday – Friday' },
      opens: '08:00',
      closes: '23:00',
    },
    {
      days: ['Saturday', 'Sunday'],
      label: { hr: 'Subota – Nedjelja', en: 'Saturday – Sunday' },
      opens: '08:00',
      closes: '24:00',
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
      hr: 'Jelovnik Restorana Mašić: hercegovačka plata, uštipci, ćevapi i roštilj sa žara, teletina ispod peke, pite i domaći kruh — s cijenama.',
      en: 'The Restoran Mašić menu: Herzegovinian platter, uštipci, ćevapi and charcoal grill, veal under the peka, pies and homemade bread — with prices.',
    },
    image: images.plata,
  },
  gallery: {
    title: { hr: 'Galerija', en: 'Gallery' },
    description: {
      hr: 'Pogledajte jela, blagovaonicu i terasu Restorana Mašić na Rakitnu.',
      en: 'See the dishes, dining room and terrace at Restoran Mašić in Rakitno.',
    },
    image: images.stol,
  },
  contact: {
    title: { hr: 'Kontakt i rezervacije', en: 'Contact & reservations' },
    description: {
      hr: 'Rezervirajte stol u Restoranu Mašić na Rakitnu. Nazovite +387 39 692 482. Radno vrijeme i upute za dolazak.',
      en: 'Reserve a table at Restoran Mašić in Rakitno. Call +387 39 692 482. Opening hours and directions.',
    },
    image: images.vanjski,
  },
}
