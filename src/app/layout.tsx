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
      <head>
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-R2CEZW9W0R"></script>
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-R2CEZW9W0R');
          `,
        }}
      />
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5243827457946593" crossOrigin="anonymous"></script>
      </head>
      <body className={styles.layout}>
        <Main>
          {children}
        </Main>
      </body>
    </html>
  )
}
