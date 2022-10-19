import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head title="NextGame" />
        <body>
          <div id="overlays"></div>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
