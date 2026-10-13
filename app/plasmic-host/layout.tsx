import '../globals.css'

export const metadata = {
  title: 'Mašić · Plasmic host',
  robots: { index: false, follow: false },
}

export default function PlasmicHostLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="hr">
      <body>{children}</body>
    </html>
  )
}
