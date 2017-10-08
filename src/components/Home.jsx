'use strict';
import React from 'react';
import { FormattedMessage } from 'react-intl';
import { DropdownButton, MenuItem } from 'react-bootstrap';

import { Link } from 'react-router-dom';

export default class Home extends React.Component {
  render() {
    return (
      <div style={{ textAlign: 'center' }}>
        <h1 style={{ marginTop: '10px' }}>
          <FormattedMessage id="home.header" />
        </h1>
        <div>
          <DropdownButton title="Language" id="home.Dropdown" >
            <MenuItem eventKey="1">EN</MenuItem>
            <MenuItem eventKey="2">RU</MenuItem>
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