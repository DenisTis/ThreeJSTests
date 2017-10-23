'use strict';

//Internationalization
import { addLocaleData, IntlProvider } from 'react-intl';
import en from 'react-intl/locale-data/en';
import ru from 'react-intl/locale-data/ru';

function LanguageHandler() {
  //Find a way how to export this function correctly with its variables
  addLocaleData(en);
  addLocaleData(ru);
  let messages = {
    ru: require('../i18n/ru.json'),
    en: require('../i18n/en.json')
  };
  let locale = navigator.language.substr(0, 2);
  this.getLocale = function() {
    return locale;
  }
  this.setLocale = function(newLocale) {
    locale = newLocale;
  };
  this.getMessages = function() {
    return messages[locale];
  }
}

export default new LanguageHandler();
