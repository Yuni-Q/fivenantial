import { applyMiddleware, compose, createStore } from 'redux';
import App from 'next/app';
import createSagaMiddleware from 'redux-saga';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import React from 'react';
import withRedux from 'next-redux-wrapper';
import withReduxSaga from 'next-redux-saga';

import reducer from '../reducers';
import rootSaga from '../sagas';

import Header from '../components/Header'
import Footer from '../components/Footer'

import { headerHeight, footerHeight, bodyHeight } from '../common/values'

class MyApp extends App {
  componentDidMount() {
    if (process.env.NODE_ENV === 'production' && 'serviceWorker' in navigator) {
      navigator.serviceWorker
        .register('/service-worker.js')
        .then(result => {
          console.log('service worker registration successful', result);
        })
        .catch(err => {
          console.log('service worker registration failed', err.message);
        });
    }
  }
  render() {
    const { Component, store, pageProps } = this.props;
    return (
      <Provider store={store}>
        <Helmet
          title="fivenantial"
          htmlAttributes={{ lang: 'ko' }}
          meta={[
            {
              name: 'viewport',
              content:
                'width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=yes,viewport-fit=cover',
            },
            {
              'http-equiv': 'X-UA-Compatible',
              content: 'IE=edge',
            },
            {
              name: 'description',
              content: 'fivenantial',
            },
            {
              property: 'og:type',
              content: 'website',
            },
          ]}
          link={[{
            rel: 'shortcut icon', href: '/favicon.ico',
          }, {
            rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/antd/3.16.2/antd.css',
          }]}
        />
        <Header />
        <div style={{
          height: bodyHeight,
          marginTop: headerHeight,
          marginBottom: footerHeight,
          overflow: 'scroll'
        }}>
          <Component {...pageProps} />
        </div>
        <Footer />
      </Provider>
    );
  }
}

const configureStore = (initialState, options) => {
  const sagaMiddleware = createSagaMiddleware();
  const middlewares = [
    sagaMiddleware,
    store => next => action => {
      if (process.env.NODE_ENV !== 'production') {
        console.log(store, action);
      }
      next(action);
    },
  ];
  const enhancer =
    process.env.NODE_ENV === 'development'
      ? compose(
        applyMiddleware(...middlewares),
        !options.isServer &&
          typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined'
          ? window.__REDUX_DEVTOOLS_EXTENSION__()
          : f => f,
      )
      : compose(applyMiddleware(...middlewares));
  const store = createStore(reducer, initialState, enhancer);
  store.sagaTask = sagaMiddleware.run(rootSaga);
  return store;
};

MyApp.getInitialProps = async context => {
  return;
};

MyApp.propTypes = {
  Component: PropTypes.any.isRequired,
  store: PropTypes.any.isRequired,
  pageProps: PropTypes.any,
};

MyApp.defaultProps = {
  pageProps: {},
};

export default withRedux(configureStore)(withReduxSaga(MyApp));
