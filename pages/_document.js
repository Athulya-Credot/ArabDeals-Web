import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <base href="/" />
          {process.env.NODE_ENV === "production" ? (
            <title>Arab Deals</title>
          ) : (
            ""
          )}
          <link rel="icon" href="bannerlogo.svg" />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Open+Sans:200,300,400,500,600,700,800,400italic,800italic%7CPoppins:200,300,400,500,600,700,800%7COswald:300,400,600,700,800%7CNanum+Brush+Script:400,700,800"
            defer
          />
          <link
            rel="stylesheet"
            type="text/css"
            href="vendor/bootstrap.min.css"
          />
          <link
            rel="stylesheet"
            type="text/css"
            href="vendor/fontawesome-free/css/all.min.css"
          />
          <link
            rel="stylesheet"
            type="text/css"
            href="vendor/simple-line-icons/css/simple-line-icons.min.css"
          />
          <link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
<link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@200;300;400;500;600;700;800&display=swap" rel="stylesheet"/>
        </Head>
        <body>
          <Main />
          <script src="js/jquery.min.js"></script>
          <NextScript />
        </body>
      </Html>
    );
  }
}
