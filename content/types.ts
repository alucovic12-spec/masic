/**
 * Content model for Restoran Mašić.
 *
 * Every interface here is shaped like a future Sanity document or object type.
 * Localized<T> fields correspond to Sanity field-level internationalization
 * ({ hr, en }). When migrating, replace the static imports in /content with
 * GROQ queries that return these same shapes — components do not need to change.
 */
import type { Localized } from '@/lib/i18n'

export type RouteKey = 'home' | 'menu' | 'gallery' | 'about' | 'contact' | 'privacy' | 'cookies'

/** Sanity: `image` field with a required `alt` (localized). */
export interface ImageAsset {
  src: string
  width: number
  height: number
  alt: Localized
}

/** Sanity: `seo` object embedded on each page document. */
export interface SeoFields {
  title: Localized
  description: Localized
  image?: ImageAsset
}

/** Sanity: `navigation` singleton → array of these. */
export interface NavItem {
  route: RouteKey
  label: Localized
}

export type DayOfWeek =
  | 'Monday'
  | 'Tuesday'
  | 'Wednesday'
  | 'Thursday'
  | 'Friday'
  | 'Saturday'
  | 'Sunday'

/** Sanity: `openingHours` array on `siteSettings`. `opens`/`closes` use 24h "HH:MM"; "24:00" = midnight. */
export interface OpeningHoursRow {
  days: DayOfWeek[]
  label: Localized
  opens: string | null
  closes: string | null
}

export interface ContactInfo {
  phone: { display: string; href: string }
  email: string
  address: {
    street: Localized
    postalCode: string
    city: Localized
    country: Localized
    countryCode: string
  }
  mapUrl: string
  /** True while phone, email and address are unverified placeholders. */
  isPlaceholder: boolean
}

/** Sanity: `siteSettings` singleton. */
export interface SiteSettings {
  name: string
  shortName: string
  tagline: Localized
  description: Localized
  siteUrl: string
  instagram: { handle: string; url: string }
  priceRange: string
  cuisines: Localized<string[]>
  contact: ContactInfo
  openingHours: OpeningHoursRow[]
  openingHoursIsPlaceholder: boolean
  defaultImage: ImageAsset
}

/** Sanity: `menuItem` document (referenced by categories). */
export interface MenuItem {
  id: string
  name: Localized
  description: Localized
  /** Price in KM (BAM). */
  price: number
  /** Optional qualifier, e.g. "for two" or "per kg". */
  unit?: Localized
  signature?: boolean
}

/** Sanity: `menuCategory` document with ordered references to menu items. */
export interface MenuCategory {
  id: string
  title: Localized
  intro?: Localized
  items: MenuItem[]
}

/** Sanity: `galleryImage` document. */
export interface GalleryImage {
  id: string
  image: ImageAsset
  caption: Localized
}

export interface Review {
  quote: Localized
  author: Localized
  context: Localized
}

export interface SectionIntro {
  eyebrow: Localized
  title: Localized
  intro?: Localized
}

/** Sanity: `homePage` singleton. */
export interface HomeContent {
  seo: SeoFields
  hero: {
    eyebrow: Localized
    titleLine1: Localized
    titleLine2: Localized
    lead: Localized
    image: ImageAsset
  }
  story: SectionIntro & {
    body: Localized<string[]>
    cta: Localized
    image: ImageAsset
    facts: { value: Localized; label: Localized }[]
  }
  signature: SectionIntro & {
    dishes: { menuItemId: string; image?: ImageAsset }[]
  }
  menuPreview: SectionIntro & {
    menuItemIds: string[]
    cta: Localized
    image: ImageAsset
  }
  atmosphere: SectionIntro & {
    galleryImageIds: string[]
    cta: Localized
  }
  reviews: SectionIntro & {
    items: Review[]
    /** True while quotes are illustrative placeholders, not verified reviews. */
    isPlaceholder: boolean
  }
  visit: SectionIntro
  reservation: SectionIntro & { body: Localized }
  instagram: SectionIntro & { galleryImageIds: string[] }
}

export interface PageIntro {
  seo: SeoFields
  eyebrow: Localized
  title: Localized
  lead: Localized
}

/** Sanity: `aboutPage` singleton. */
export interface AboutContent extends PageIntro {
  sections: {
    id: string
    eyebrow: Localized
    title: Localized
    body: Localized<string[]>
    image: ImageAsset
  }[]
  values: { title: Localized; body: Localized }[]
  closing: Localized
}

/** Sanity: `legalPage` document (privacy, cookies). */
export interface LegalDocument {
  seo: SeoFields
  title: Localized
  updated: string
  intro: Localized
  sections: { heading: Localized; body: Localized<string[]> }[]
}
