import './globals.css'
import { Open_Sans } from 'next/font/google'

const inter = Open_Sans({ subsets: ['latin'] })

export const metadata = {
  title: 'Saluang Oyak',
  description: 'Kami dengan gembira mengundang Anda untuk hadir dalam acara istimewa kami, "Saluang Oyak, Samalam Suntuak" yang akan diadakan dalam rangka memperingati Ulang Tahun Indonesia yang ke- 78. Acara ini akan menjadi perayaan kekayaan budaya dan semangat persatuan Indonesia melalui seni musik tradisional Saluang Oyak.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
