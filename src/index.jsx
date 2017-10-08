'use strict';

// Import React base modules
import React from 'react';
import ReactDom from 'react-dom';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
//Double check if native app can use only NativeRouter

import Bootstrap from 'bootstrap/dist/css/bootstrap.css';

//Internationalization
import { addLocaleData, IntlProvider } from 'react-intl';

import en from 'react-intl/locale-data/en';
import ru from 'react-intl/locale-data/ru';
addLocaleData(en);
addLocaleData(ru);
console.log(navigator.language);
let messages = {
ru: require('./i18n/ru.json'),
en: require('./i18n/en.json')  
};
//Languages as "en-US" make Intl fail, not clear why
// I think I found why. reason is, all messages from all languages have to be put to one file
let locale = navigator.language.substr(0,2);

//Views
import Home from './components/Home.jsx';
import Test from './components/Test.jsx';

ReactDom.render((
  <IntlProvider locale={locale} messages={messages[locale]}>
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