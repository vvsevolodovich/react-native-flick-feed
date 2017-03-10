import React, { Component } from 'react';
import {
  AppRegistry,
  View
} from 'react-native';


import Feed from './src/Feed';

export default class FlikrFeed extends Component {
  render() {
    return (
      <Feed/>
    );
  }
}

AppRegistry.registerComponent('FlikrFeed', () => FlikrFeed);
