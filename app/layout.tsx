import type { Metadata } from 'next'
import './globals.css'



export const metadata: Metadata = {
  title: 'Ebenezer Silva',
  description: 'Portifolio de desenvolvedor front-and, Ebenezer. A qui apresento os projetos que desenvolvi além das tecnologias utilizada',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body>{children}</body>
    </html>
  )
}
