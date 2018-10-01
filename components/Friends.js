import React, { Component} from 'react';
import { FlatList }  from 'react-native';
import { ActivityIndicator }  from 'react-native';
import { Text }  from 'react-native';
import { View } from 'react-native';
import { Button, StyleSheet, Image,TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-vector-icons/FontAwesome';
import * as Progress from 'react-native-progress';

import { createStackNavigator } from 'react-navigation'; // Version can be specified in package.json

//YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);

export default class Friends extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isVisible: false,
            isLoggedIn: false,
            username: "",
            password: "",
            calories: {},
            water: {},
            isLoading: true
        };
    }

    componentDidMount(){
            const { navigation } = this.props;
            this.setState({isLoggedIn: navigation.getParam('isLoggedIn', true)});

            const user = navigation.getParam('username', 'username');
            const pass = navigation.getParam('password', 'password');

            const base64 = require('base-64');
            fetch('http://192.168.1.15:8080/main/getHome', {
                    method: 'POST',
                  headers: new Headers({
                   'Authorization': 'Basic ' + base64.encode(user+":"+pass),
                   'Content-Type': 'application/json'
                  }),
                  body: JSON.stringify({
                       date: '25-07-2018',
                    })
            })
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({ calories: responseJson["calories"], water: responseJson["water"], isLoading:false })

            })
            .catch((error) =>{
                console.error(error);
            });


            this.setState({username: user})
            this.setState({password: pass})
        }


    render() {

        if(this.state.isLoading){
            return <View><Text>Loading...</Text></View>
        }

        return (
            <View style={styles.container}>
                <View style={styles.logoContainer}>
                    <Image style={styles.logo}
                        source={require('../images/logo.png')}/>
                </View>

                <Text style={styles.instructions}>
                  Friends
                </Text>
                <Text style={styles.instructions}>
                  Coming Soon
                </Text>

                <View style={styles.downMenuContainer}>

                    <TouchableOpacity activeOpacity = { .5 } onPress={() => {

                         this.props.navigation.navigate('Home', {
                           isLoggedIn: true,
                           username: this.state.username,
                           password: this.state.password,
                         });
                        }}>
                        <Image
                            style={styles.downMenu}
                            source={require('../images/home.png')}/>
                    </TouchableOpacity>

                    <TouchableOpacity activeOpacity = { .5 } onPress={() => {
                         this.props.navigation.navigate('Food', {
                           isLoggedIn: true,
                           username: this.state.username,
                           password: this.state.password,
                         });
                        }}>
                        <Image
                            style={styles.downMenu}
                            source={require('../images/food.png')}/>
                    </TouchableOpacity>

                    <TouchableOpacity activeOpacity = { .5 } onPress={() => {
                                             /* 1. Navigate to the Details route with params */
                                             this.props.navigation.navigate('Trainings', {
                                               isLoggedIn: true,
                                               username: this.state.username,
                                               password: this.state.password,
                                             });
                                            }}>
                        <Image
                            style={styles.downMenu}
                            source={require('../images/dumbbell.png')}/>
                    </TouchableOpacity>

                    <TouchableOpacity activeOpacity = { .5 } onPress={() => {
                         this.props.navigation.navigate('Challenge', {
                           isLoggedIn: true,
                           username: this.state.username,
                           password: this.state.password,
                         });
                        }}>
                        <Image
                            style={styles.downMenu}
                            source={require('../images/challenge.png')}/>
                    </TouchableOpacity>

                    <TouchableOpacity activeOpacity = { .5 } onPress={() => {
                         /* 1. Navigate to the Details route with params */
                         this.props.navigation.navigate('Friends', {
                           isLoggedIn: true,
                           username: this.state.username,
                           password: this.state.password,
                         });
                        }}>
                        <Image
                            style={styles.downMenuNow}
                            source={require('../images/friends.png')}/>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }


}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgb(255,255,255)',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    logoContainer:{
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        flex: 0.6,
        //backgroundColor: "green"
    },
    logo: {
        width: 230,
        //TODO edit this shit
        height: 80
    },
    downMenuContainer:{
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
        flex: 0.4,
        flexDirection: "row",
        //backgroundColor: "red"
    },
    downMenu: {
        marginLeft: 2,
        marginRight: 2,
        width: 70,
        //TODO edit this shit
        height: 70,
        justifyContent: 'flex-start',
    },
    downMenu: {
        marginLeft: 2,
        marginRight: 2,
        width: 70,
        //TODO edit this shit
        height: 70,
        justifyContent: 'flex-start',
        opacity: 0.5
    },
    downMenuNow: {
        marginLeft: 2,
        marginRight: 2,
        width: 70,
        //TODO edit this shit
        height: 70,
        justifyContent: 'flex-start',
    },
});