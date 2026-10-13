import type { Metadata } from 'next'
import '../globals.css'
import { site } from '@/content/site'

export const metadata: Metadata = {
  title: site.name,
  robots: { index: false, follow: true },
}

export default function RedirectLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="hr">
      <body className="bg-charcoal font-sans text-ivory antialiased">{children}</body>
    </html>
  )
}
