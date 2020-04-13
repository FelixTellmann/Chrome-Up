import React, { useState } from 'react';
import App, { AppProps } from 'next/app';
import fetch from 'isomorphic-unfetch';
import './index.scss';
import { Border } from 'components';


export type Props = AppProps

/*
https://s2.googleusercontent.com/s2/favicons?domain=www.stackoverflow.com

        chrome.storage.sync.set({key: value}, function() {
          console.log('Value is set to ' + value);
        });

        chrome.storage.sync.get(['key'], function(result) {
          console.log('Value currently is ' + result.key);
        });



*/

function Index(ctx) {
  const [value, setValue] = useState(0);

  return (
    <div className="popup">
      <Border />
      <header className="popup__section header">
        Felix Tellmann - Web Development
      </header>
      <hr />
      <section className="popup__section shortcuts">
        <button
          onClick={e => chrome.storage?.sync.set({ key: value + 1 }, function () {
            console.log('Value is set to ' + value);
          })}>Up 1
        </button>
        <button onClick={e => chrome.storage.sync.get(['key'], function (r) {
          setValue(r.key);
        })}>get Result
        </button>
        <div>{value}</div>
      </section>
    </div>
  );
}

Index.getInitialProps = async ctx => {
  return {};
};

export default Index;