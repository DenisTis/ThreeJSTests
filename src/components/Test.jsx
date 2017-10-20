import React from 'react';
import { FormattedMessage } from 'react-intl';

import { Button } from 'react-bootstrap';
const buttonsInstance = (
  <Button>Click me!</Button>
);

export default class Test extends React.Component {
  render() {
    return (
     <div style={{textAlign: 'center'}}>
        <h1>
        <FormattedMessage id="test.header" />
        </h1>
        <Button><FormattedMessage id="test.button" /></Button>
      </div>);
  }
}