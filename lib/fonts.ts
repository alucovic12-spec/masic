import { Manrope } from 'next/font/google'

export const manrope = Manrope({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-manrope',
  display: 'swap',
})

export const fontVariables = manrope.variable
