import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return initialProps
  }

  render() {
    return (
      <Html>
        <Head>
          {/* <link 
            rel="preconnect" 
            href="https://fonts.googleapis.com"
          /> */}
          {/* <link 
            rel="preconnect" 
            href="https://fonts.gstatic.com" 
            crossorigin
          /> */}
          {/* <link 
            href="https://fonts.googleapis.com/css2?family=Alfa+Slab+One&family=Lato:wght@700&display=swap" 
            rel="stylesheet"
          /> */}
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="true"
          />
          <link
            rel="preload"
            as="style"
            href="https://fonts.googleapis.com/css2?family=Alfa+Slab+One&family=Lato:wght@700&display=swap"
          />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Alfa+Slab+One&family=Lato:wght@700&display=swap"
            media="print"
            onLoad="this.media='all'"
          />
          <noscript>
            <link
              rel="stylesheet"
              href="https://fonts.googleapis.com/css2?family=Alfa+Slab+One&family=Lato:wght@700&display=swap"
            />
          </noscript>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument