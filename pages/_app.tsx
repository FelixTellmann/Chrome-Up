import App, { AppProps } from 'next/app';
import React from 'react';
import fetch from 'isomorphic-unfetch';
import './_app.scss';
import theme from 'components/_theme';
import { useState } from "react";
import { Border } from "components/Border";


export type Props = AppProps

function Layout({ pageProps, Component }: Props) {

  return (
    <div className="popup" >
      <Component {...pageProps} />
    </div>
  );
}

export default Layout;