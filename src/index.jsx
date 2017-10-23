'use strict';

// Import React base modules
import React from 'react';
import ReactDom from 'react-dom';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
//Double check if native app can use only NativeRouter

import Bootstrap from 'bootstrap/dist/css/bootstrap.css';

//Internationalization
import LanguageHandler from './handlers/LanguageHandler.js';
import { IntlProvider } from 'react-intl';

//Views
import Home from './components/Home.jsx';
import Test from './components/Test.jsx';

// rebuild this part with function which could be re-triggered
ReactDom.render((
  <IntlProvider locale={LanguageHandler.getLocale()} messages={LanguageHandler.getMessages()}>
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

//Example 2 from net
//questions - how to set datastore?

// let ApplicationClass = class Home extends React.Component{
//    render() {
//       //make use of this.props.state...
//    }
//   };
//   let locale = "";
//   let dataStore = {};
  
//   let ApplicationComponent = React.createElement(
//     ApplicationClass,
//   {state : dataStore.getState()}
// );

// dataStore.onChange(function(){
//   ReactDOM.render(ApplicationComponent, document.getElementById('root'));
// });
