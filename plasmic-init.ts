import { initPlasmicLoader } from '@plasmicapp/loader-nextjs/react-server-conditional'

export const PLASMIC_PROJECT_ID = '37XrCfeyhDJn2fMcBrajhP'
export const PLASMIC_API_TOKEN = process.env.NEXT_PUBLIC_PLASMIC_API_TOKEN || ''

export const PLASMIC = initPlasmicLoader({
  projects: [
    {
      id: PLASMIC_PROJECT_ID,
      token: PLASMIC_API_TOKEN || 'plasmic-token-not-configured',
    },
  ],
  preview: process.env.VERCEL_ENV !== 'production',
})

export function isPlasmicConfigured() {
  return Boolean(PLASMIC_API_TOKEN)
}
