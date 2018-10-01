import React from 'react';
import { Button, View, Text,KeyboardAvoidingView,TextInput, YellowBox } from 'react-native';
import { createStackNavigator } from 'react-navigation'; // Version can be specified in package.json
import {  } from 'react-native';
import Login from './components/Login'
import Home from './components/Home'
import Food from './components/Food'
import Trainings from './components/Trainings'
import Challenge from './components/Challenge'
import Friends from './components/Friends'




YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);

const RootStack = createStackNavigator(
  {
    Login: {
       screen: Login,
       navigationOptions: {
         header: null
       },
     },
    Home: {
         screen: Home,
         navigationOptions: {
            header: null
         },
    },
    Food: {
        screen: Food,
        navigationOptions: {
          header: null
        },
    },
    Trainings: {
        screen: Trainings,
        navigationOptions: {
           header: null
        },
    },
    Challenge: {
        screen: Challenge,
        navigationOptions: {
           header: null
        },
    },
    Friends: {
        screen: Friends,
        navigationOptions: {
         header: null
        },
    },

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

