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

        <div class="fb-customerchat"
          attribution="setup_tool"
          page_id="100207341700762"
          theme_color="#ff5ca1"
          logged_in_greeting="Chào bạn!"
          logged_out_greeting="Chào bạn!">
        </div>
        </body>
      </Html>
    )
  }
}