import './globals.css'
import { Inter, DM_Sans } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
const dmSans = DM_Sans({
  weight: "400", 
  subsets: ['latin'],
  variable: '--font-dm-sans'
})

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${dmSans.variable}`}>
      <body className={dmSans.className}>{children}</body>
    </html>
  )
}
