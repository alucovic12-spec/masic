/**
 * Consent-first analytics placeholder. No tracker is loaded.
 *
 * To enable analytics later, pick a privacy-focused provider (e.g. Plausible,
 * Umami or Cloudflare Web Analytics), load it inside `loadAnalytics()`, and it
 * will only run after the visitor clicks "Allow analytics" in the consent banner.
 */
export type ConsentValue = 'granted' | 'denied'

export const CONSENT_STORAGE_KEY = 'masic-consent'
export const OPEN_CONSENT_EVENT = 'masic:open-consent'

export function readConsent(): ConsentValue | null {
  try {
    const value = window.localStorage.getItem(CONSENT_STORAGE_KEY)
    return value === 'granted' || value === 'denied' ? value : null
  } catch {
    return null
  }
}

export function writeConsent(value: ConsentValue) {
  try {
    window.localStorage.setItem(CONSENT_STORAGE_KEY, value)
  } catch {
    // Storage can be unavailable (private mode); the choice then lasts for this page view only.
  }
  if (value === 'granted') loadAnalytics()
}

let loaded = false

export function loadAnalytics() {
  if (loaded) return
  loaded = true
  // Intentionally empty: plug in a privacy-friendly analytics script here.
}

export function trackEvent(name: string, props?: Record<string, string | number>) {
  if (!loaded) return
  void name
  void props
}

export function openConsentSettings() {
  window.dispatchEvent(new Event(OPEN_CONSENT_EVENT))
}
