import React, { Component } from 'react';
import { AppRegistry } from 'react-native';

class NativeWeb extends Component {
  render() {
    return ( < div > Some text < /div> );
    }
  }

  AppRegistry.registerComponent('nativeWeb', () => NativeWeb);
