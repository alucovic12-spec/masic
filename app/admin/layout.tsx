import '../globals.css'

export const metadata = {
  title: 'Mašić Studio',
  robots: { index: false, follow: false },
}

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="hr">
      <head>
        <link rel="stylesheet" href="https://unpkg.com/grapesjs@0.23.6/dist/css/grapes.min.css" />
      </head>
      <body>{children}</body>
    </html>
  )
}
