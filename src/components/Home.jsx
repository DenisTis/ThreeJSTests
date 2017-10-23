'use strict';
import React from 'react';
import { FormattedMessage } from 'react-intl';
import { DropdownButton, MenuItem } from 'react-bootstrap';

import { Link } from 'react-router-dom';

import LanguageHandler from '../handlers/LanguageHandler.js';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        language: LanguageHandler.getLocale()
    };
}

  dropdownSelect(eventKey, event) {
    LanguageHandler.setLocale(eventKey);
    console.log(event +" " +eventKey);
    //this will re-render current page.
    // How to force update on application itself?
//    this.forceUpdate();
//change of state triggers render method as well
    this.state = {
      language: LanguageHandler.getLocale()
  };    
  }

  render() {
    return (
      <div style={{ textAlign: 'center' }}>
        <h1 style={{ marginTop: '10px' }}>
          <FormattedMessage id="home.header" />
        </h1>
        <div>
          <DropdownButton title="Language" id="home.Dropdown" onSelect={this.dropdownSelect.bind(this)}>
            <MenuItem eventKey="en">EN</MenuItem>
            <MenuItem eventKey="ru">RU</MenuItem>
          </DropdownButton>
          <p style={{ marginTop: '10px' }}>
            <Link to="/test">
              <FormattedMessage id="home.toTest" />
            </Link>
          </p>
        </div>
      </div>
    )
  }
}
