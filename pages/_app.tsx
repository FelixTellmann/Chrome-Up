import App, { AppProps } from 'next/app';
import React from 'react';
import fetch from 'isomorphic-unfetch';
import './_app.scss';

export type Props = AppProps

function Layout({ pageProps, Component }: Props) {
  return (
    <div>
      <Component {...pageProps} />
    </div>
  );
}

Layout.getInitialProps = async (appContext) => {
  // calls page's `getInitialProps` and fills `appProps.pageProps`
  const appProps = await App.getInitialProps(appContext);
  return { ...appProps };
};


export default Layout;