import { images } from './images'
import type { GalleryImage } from './types'

export const galleryImages: GalleryImage[] = [
  {
    id: 'steak',
    image: images.steak,
    caption: { hr: 'Ramstek s gradele', en: 'Grilled rump steak' },
  },
  {
    id: 'plata',
    image: images.plata,
    caption: { hr: 'Hercegovačka plata s uštipcima', en: 'Herzegovinian platter with uštipci' },
  },
  {
    id: 'stol',
    image: images.stol,
    caption: { hr: 'Stol spreman za proslavu', en: 'A table ready for a celebration' },
  },
  {
    id: 'terasa',
    image: images.terasa,
    caption: { hr: 'Ostakljena terasa u sumrak', en: 'The glass terrace at dusk' },
  },
  {
    id: 'peka',
    image: images.peka,
    caption: { hr: 'Domaća teletina ispod peke', en: 'Local veal under the peka' },
  },
  {
    id: 'vanjski',
    image: images.vanjski,
    caption: { hr: 'Dobro došli u Mašić', en: 'Welcome to Mašić' },
  },
  {
    id: 'koktel',
    image: images.koktel,
    caption: { hr: 'Osvježenje na terasi', en: 'Refreshments on the terrace' },
  },
  {
    id: 'cevapi',
    image: images.cevapi,
    caption: { hr: 'Ćevapi u somunu', en: 'Ćevapi in somun' },
  },
  {
    id: 'zima',
    image: images.zima,
    caption: { hr: 'Rakitno pod snijegom', en: 'Rakitno under snow' },
  },
  {
    id: 'sok',
    image: images.sok,
    caption: { hr: 'Domaći sok od nara', en: 'Homemade pomegranate juice' },
  },
  {
    id: 'kitchen',
    image: images.kitchen,
    caption: { hr: 'Pravi žar, svaki dan', en: 'Real charcoal, every day' },
  },
  {
    id: 'dessert',
    image: images.dessert,
    caption: { hr: 'Domaći desert i kava', en: 'Homemade dessert and coffee' },
  },
]

export function getGalleryImages(ids: string[]): GalleryImage[] {
  return ids
    .map((id) => galleryImages.find((entry) => entry.id === id))
    .filter((entry): entry is GalleryImage => Boolean(entry))
}
