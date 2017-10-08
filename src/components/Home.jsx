'use strict';
import React from 'react';
import { Link } from 'react-router-dom';

export default class Home extends React.Component {
  render() {
    return (
      <div>
        <h1>This is a homepage</h1>
        <ul role="nav">
          <li><Link to="/test">Test</Link></li>
        </ul>
      </div>
    )
  }
}