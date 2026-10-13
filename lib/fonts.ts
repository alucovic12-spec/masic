import { Manrope, Newsreader } from 'next/font/google'

export const manrope = Manrope({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-manrope',
  display: 'swap',
})

export const newsreader = Newsreader({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-newsreader',
  display: 'swap',
})

export const fontVariables = `${manrope.variable} ${newsreader.variable}`
