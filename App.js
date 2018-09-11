import React from 'react';
import { Button, View, Text,KeyboardAvoidingView,TextInput, YellowBox } from 'react-native';
import { createStackNavigator } from 'react-navigation'; // Version can be specified in package.json
import {  } from 'react-native';
import Login from './components/Login'
import Home from './components/Home'
import Trainings from './components/Trainings'



YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);

const RootStack = createStackNavigator(
  {
    Login: Login,
    Home: Home,
    Challenge: Challenge,
    Trainings, Trainings


  },
  {
    initialRouteName: 'Login',
  }
);

export default class App extends React.Component {

    static navigationOptions = {
        header: {
            visible: false,
        }
    }

    render() {
        return <RootStack />;
    }
}
