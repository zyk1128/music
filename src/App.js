import React, { memo } from 'react';
import { renderRoutes } from 'react-router-config';
import { Provider } from 'react-redux';

import { HashRouter } from 'react-router-dom';
import store from './store';
import router from './router';

import JustinAppHeader from '@/components/app-header';
import JustinAppFooter from '@/components/app-footer';


export default memo(function App() {
  return (
    <Provider store={store}>
      <HashRouter>
        <JustinAppHeader/>
        { renderRoutes(router) }
        <JustinAppFooter/>
      </HashRouter>
    </Provider>
  )
})

