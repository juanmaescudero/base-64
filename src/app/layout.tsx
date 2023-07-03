import Main from './Main'
import './globals.css'
import styles from "./layout.module.css"

export const metadata = {
  title: 'Decode 64 base',
  description: 'Tool to encode and decode base 64',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={styles.layout}>
        <Main children={children}/>
      </body>
    </html>
  )
}
