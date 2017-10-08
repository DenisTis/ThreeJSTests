import React from 'react';

import { Button } from 'react-bootstrap';
const buttonsInstance = (
  <Button>Click me!</Button>
);

export default class Test extends React.Component {
  render() {
    return (
     <div style={{textAlign: 'center'}}>
        <h1>Hello I am test file!</h1>
        <Button>Click me!</Button>
      </div>);
  }
}