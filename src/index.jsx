'use strict';

// Import React base modules
import React from 'react';
import ReactDom from 'react-dom';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
//Double check if native app can use only NativeRouter

import Bootstrap from 'bootstrap/dist/css/bootstrap.css';

//Internationalization
import { addLocaleData, IntlProvider } from 'react-intl';

let ruLocaleData = require('react-intl/locale-data/ru');
addLocaleData(ruLocaleData);
let i18nConfig = {
  locale: 'ru',
  messages: {
    "home.header": "Стартовая страница",
    "home.toTest": "К тестовой странице",
    "test.header": "Начало тестовой страницы",
    "test.button": "Нажать"
  }
};

//Views
import Home from './components/Home.jsx';
import Test from './components/Test.jsx';

ReactDom.render((
  <IntlProvider locale={i18nConfig.locale} messages={i18nConfig.messages}>
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/test" component={Test} />
    </Switch>
  </BrowserRouter>
  </IntlProvider>
),
  document.getElementById('root')
);