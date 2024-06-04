import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import MainNavbar from '@/app/ui/mainNavbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Note app',
  description: 'A note and todo app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en' data-theme='dim'>
      <body className={inter.className}>
        <main className='pt-0'>{children}</main>
      </body>
    </html>
  )
}
