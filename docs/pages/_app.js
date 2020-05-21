import App from 'next/app'
import React from 'react'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import theme from '../utils/theme'

const GlobalStyle = createGlobalStyle`
    @font-face {
          font-family: 'Inter';
          src: url('/fonts/Inter-Thin.ttf');
          font-weight: 100;
          font-style: normal;
      }
    @font-face {
          font-family: 'Inter';
          src: url('/fonts/Inter-ExtraLight.ttf');
          font-weight: 200;
          font-style: normal;
      }
    @font-face {
        font-family: 'Inter';
        src: url('/fonts/Inter-Light.ttf');
        font-weight: 300;
        font-style: normal;
    }
    @font-face {
        font-family: 'Inter';
        src: url('/fonts/Inter-Regular.ttf');
        font-weight: 400;
        font-style: normal;
    }
    @font-face {
        font-family: 'Inter';
        src: url('/fonts/Inter-Medium.ttf');
        font-weight: 500;
        font-style: normal;
    }
    @font-face {
        font-family: 'Inter';
        src: url('/fonts/Inter-SemiBold.ttf');
        font-weight: 600;
        font-style: normal;
    }
    @font-face {
        font-family: 'Inter';
        src: url('/fonts/Inter-Bold.ttf');
        font-weight: 700;
        font-style: normal;
    }
    @font-face {
        font-family: 'Inter';
        src: url('/fonts/Inter-ExtraBold.ttf');
        font-weight: 800;
        font-style: normal;
    }
    @font-face {
        font-family: 'Inter';
        src: url('/fonts/Inter-Black.ttf');
        font-weight: 900;
        font-style: normal;
    }
    body {
        margin: 0;
        padding: 0;
        font-family: 'Inter';
    }
`

export default class MyApp extends App {
  static async getInitialProps ({ Component, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }

  render () {
    const { Component, pageProps } = this.props
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle/>
            <Component {...pageProps} />
        </ThemeProvider>
    )
  }
}