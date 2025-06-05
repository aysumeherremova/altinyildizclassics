import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Erkek Giyime Dair Her Şey | Altin Yildiz Classics',
  icons: {
    icon: '/favicon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
