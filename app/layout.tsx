import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'

const poppins = Poppins({ subsets: ['latin'], weight: '400' })

export const metadata: Metadata = {
  title: 'Breavance',
  description: 'A workspace for everyone to develope all kind of projects',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={poppins.className}>
        <Navbar />
        <div className='min-h-[80%] mx-5'>
          {children}
        </div>
        <Footer />
      </body>
    </html>
  )
}
