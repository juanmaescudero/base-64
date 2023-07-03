import Main from './Main'
import './globals.css'
import styles from "./layout.module.css"

export const metadata = {
  title: 'Decode 64 base - Simplifying Data Encoding and Decoding',
  description: "Simplify data encoding and decoding with our website's powerful tool. Decode 64 base effortlessly and securely. Convert binary data into a readable format. Try it now!"
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={styles.layout}>
        <Main children={children}/>
      </body>
    </html>
  )
}
