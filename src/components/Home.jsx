'use strict';
import React from 'react';
import { FormattedMessage } from 'react-intl';

import { Link } from 'react-router-dom';

export default class Home extends React.Component {
  render() {
    return (
      <div>
        <h1>
        <FormattedMessage id="home.header" />
        </h1>
        <ul role="nav">
          <li><Link to="/test">
          <FormattedMessage id="home.toTest" />
          </Link></li>
        </ul>
      </div>
    )
  }
}