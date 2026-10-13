import { DM_Sans, Urbanist } from 'next/font/google'

export const dmSans = DM_Sans({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-dm-sans',
  display: 'swap',
})

export const urbanist = Urbanist({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-urbanist',
  display: 'swap',
})

export const fontVariables = `${dmSans.variable} ${urbanist.variable}`
