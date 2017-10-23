import React, { Component } from 'react';
import { AppRegistry, Text, View } from 'react-native';

class Greeting extends Component {
  render() {
    return ( <
      Text > Report { this.props.name }! < /Text>
    );
  }
}

export default class LotsOfGreetings extends Component {
  render() {
    return ( <
      View style = {
        { alignItems: 'center' }
      } >
      <
      Greeting name = 'First name' / >
      <
      Greeting name = 'Last name' / >
      <
      Greeting name = 'Prefix' / >
      <
      /View>
    );
  }
}

// skip this line if using Create React Native App
AppRegistry.registerComponent('AwesomeProject', () => LotsOfGreetings);
