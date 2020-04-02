import React from 'react';
import App, { AppProps } from 'next/app';
import fetch from 'isomorphic-unfetch';
import './index.scss';

export type Props = AppProps

function Index(ctx) {
  return (
    <div>test</div>
  );
}

Index.getInitialProps = async ctx => {
  return {};
};

export default Index;