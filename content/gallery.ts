import { images } from './images'
import type { GalleryImage } from './types'

export const galleryImages: GalleryImage[] = [
  {
    id: 'interior',
    image: images.interior,
    caption: { hr: 'Blagovaonica u večernjem svjetlu', en: 'The dining room in evening light' },
  },
  {
    id: 'cevapi',
    image: images.cevapi,
    caption: { hr: 'Ćevapi u somunu — jelo kuće', en: 'Ćevapi in somun — our signature' },
  },
  {
    id: 'terrace',
    image: images.terrace,
    caption: { hr: 'Terasa u zlatnom satu', en: 'The terrace at golden hour' },
  },
  {
    id: 'kitchen',
    image: images.kitchen,
    caption: { hr: 'Pravi žar, svaki dan', en: 'Real charcoal, every day' },
  },
  {
    id: 'risotto',
    image: images.risotto,
    caption: { hr: 'Crni rižot od sipe', en: 'Black cuttlefish risotto' },
  },
  {
    id: 'fish',
    image: images.fish,
    caption: { hr: 'Riba s gradele i blitva', en: 'Grilled fish with Swiss chard' },
  },
  {
    id: 'peka',
    image: images.peka,
    caption: { hr: 'Teletina ispod peke', en: 'Veal under the peka' },
  },
  {
    id: 'ingredients',
    image: images.ingredients,
    caption: { hr: 'Domaće namirnice i maslinovo ulje', en: 'Local produce and olive oil' },
  },
  {
    id: 'hero',
    image: images.hero,
    caption: { hr: 'Večera uz svijeće', en: 'Dinner by candlelight' },
  },
  {
    id: 'dessert',
    image: images.dessert,
    caption: { hr: 'Rožata i espresso', en: 'Rožata and espresso' },
  },
]

export function getGalleryImages(ids: string[]): GalleryImage[] {
  return ids
    .map((id) => galleryImages.find((entry) => entry.id === id))
    .filter((entry): entry is GalleryImage => Boolean(entry))
}
