import Document, { Main, NextScript } from 'next/document';
import Helmet from 'react-helmet';
import React from 'react';
import { ServerStyleSheet } from 'styled-components';

export default class CustomDocument extends Document {
  static async getInitialProps(context) {
    const initialProps = await Document.getInitialProps(context);
    const sheet = new ServerStyleSheet();
    const page = context.renderPage(App => props =>
      sheet.collectStyles(<App {...props} />),
    );
    const styleTags = sheet.getStyleElement();

    return {
      ...initialProps,
      ...page,
      styleTags,
      helmet: Helmet.renderStatic(),
    };
  }

  render() {
    const { htmlAttributes, bodyAttributes, ...helmet } = this.props.helmet;
    const htmlAttrs = htmlAttributes.toComponent();
    const bodyAttrs = bodyAttributes.toComponent();
    return (
      <html lang="ko" dir="ltr" {...htmlAttrs}>
        <head>
          <link href="/static/reset.css" rel="stylesheet" />
          {this.props.styleTags}
          <meta charSet="utf-8" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, viewport-fit=cover"
          />
          <title>fivenantial</title>
          <meta
            name="description"
            content="fivenantial"
          />
          <meta property="og:type" content="website" />
          <meta
            property="og:url"
            content="https://github.com/Yuni-Q/fivenantial"
          />
          <meta property="og:title" content="fivenantial" />
          <meta
            property="og:description"
            content="fivenantial"
          />
          <meta property="og:site_name" content="fivenantial" />
          <meta property="og:locale" content="ko" />
          {Object.values(helmet).map(el => el.toComponent())}
          <link rel="manifest" href="/static/manifest.json" />
          <meta name="theme-color" content="black" />
        </head>
        <body {...bodyAttrs}>
          <Main />
          {process.env.NODE_ENV === 'production' && (
            <script src="https://polyfill.io/v3/polyfill.min.js?features=es6,es7,es8,es9,NodeList.prototype.forEach&flags=gated" />
          )}
          <NextScript />
        </body>
      </html>
    );
  }
}
