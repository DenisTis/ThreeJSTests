'use strict';
import React from 'react';
import { FormattedMessage } from 'react-intl';
import { DropdownButton, MenuItem } from 'react-bootstrap';

import { Link } from 'react-router-dom';

export default class Home extends React.Component {
  dropdownSelect(eventKey, event) {
    console.log(event +" " +eventKey);
  }

  render() {
    return (
      <div style={{ textAlign: 'center' }}>
        <h1 style={{ marginTop: '10px' }}>
          <FormattedMessage id="home.header" />
        </h1>
        <div>
          <DropdownButton title="Language" id="home.Dropdown" onSelect={this.dropdownSelect}>
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
