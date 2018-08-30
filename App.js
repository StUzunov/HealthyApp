import React from 'react';
import { Button, View, Text,KeyboardAvoidingView,TextInput, YellowBox } from 'react-native';
import { createStackNavigator } from 'react-navigation'; // Version can be specified in package.json
import {  } from 'react-native';
import Login from './components/Login'
import Secured from './components/Secured'

YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);

const RootStack = createStackNavigator(
  {
    Login: Login,
    Secured: Secured,
  },
  {
    initialRouteName: 'Login',
  }
);

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}
