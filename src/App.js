import React, { memo } from 'react';
import { Provider } from 'react-redux';

import { renderRoutes } from 'react-router-config';

import { HashRouter } from 'react-router-dom';
import router from './router';
import store from './store'
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

