import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
        <div className="fb-customerchat"
          attribution="page_inbox"
          page_id="109453607947921">
        </div>
      </Html>
    )
  }
}

export default MyDocument