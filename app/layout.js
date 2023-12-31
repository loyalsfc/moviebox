import './globals.css'
import { Poppins, DM_Sans } from 'next/font/google'

const poppins = Poppins({ 
  subsets: ['latin'], 
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins'
})
const dmSans = DM_Sans({
  weight: "400", 
  subsets: ['latin'],
  variable: '--font-dm-sans'
})

export const metadata = {
  title: 'Movie Box',
  description: 'Next Generation movie websites',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${dmSans.variable} ${poppins.variable}`}>
      <body className={dmSans.className}>{children}</body>
    </html>
  )
}
