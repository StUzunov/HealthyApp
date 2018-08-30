import React from 'react';
import { FlatList, ActivityIndicator, Text, View, Button, YellowBox } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {decode as atob, encode as btoa} from 'base-64';
import { createStackNavigator } from 'react-navigation'; // Version can be specified in package.json

//YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);

export default class FetchExample extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
                    isVisible: false,
                    isLoggedIn: false,
                    username: "",
                    password: "",
                    dataSource: [],
                    isLoading: true
            };
    }

    render() {
        this.doFetch(this.state.username, this.state.password)

        return (
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                <FlatList data={this.state.dataSource}
                     renderItem={({item}) => <Text>{item.username}</Text>}
                     keyExtractor={(item, index) => index.toString()} />
            </View>
        );
    }

    //load admin
    componentDidMount(){
        const { navigation } = this.props;
        this.setState({isLoggedIn: navigation.getParam('isLoggedIn', true)});
        this.setState({username: navigation.getParam('username', 'username')});
        this.setState({password: navigation.getParam('password', 'password')});

    }

    doFetch = (user, pass) => {
        const base64 = require('base-64');

        fetch('http://192.168.1.15:8080/users/all', {
              headers: new Headers({
               'Authorization': 'Basic ' + base64.encode(user+":"+pass),
               'Content-Type': 'application/x-www-form-urlencoded'
              })
            })
          .then((response) => response.json())
          .then((responseJson) => {

          this.setState({
              dataSource: responseJson
            })
          })
          .catch((error) =>{
            console.error(error);
            });
    }
}