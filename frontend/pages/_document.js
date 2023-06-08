import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className='App'>
        <Main />
        <NextScript />
      </body>
      {/* fontawesome */}
      <script src="https://kit.fontawesome.com/5a981e61cb.js"
        crossOrigin="anonymous"></script>
    </Html>
  )
}
