'use strict';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';

import React from 'react';
import ReactDom from 'react-dom';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
//Double check if native app can use only NativeRouter

import Home from './components/Home.jsx';
import Test from './components/Test.jsx';

ReactDom.render((
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/test" component={Test} />
    </Switch>
  </BrowserRouter>
),
  document.getElementById('root')
);