
import React, { Component} from 'react';
import { StyleSheet, Text, View, Image, TouchableWithoutFeedback, StatusBar,
TextInput, SafeAndView, Keyboard, TouchableOpacity, KeyboardAvoidingView, Button} from 'react-native';
import AutoHeightImage from 'react-native-auto-height-image';


export default class Login extends Component{
    state = {
        isLoggedIn: false,
        username: '',
        password: ''
    }

    render() {
        return (
            <KeyboardAvoidingView style={styles.container}>
                <View style={styles.container}>
                    <View style={styles.logoContainer}>
                        <Image style={styles.logo}
                            source={require('../images/logo.png')}/>
                    <Text style={styles.title}>Account Information</Text>
                    </View>
                    <View style={styles.infoContainer}>
                        <TextInput
                                style={styles.info}
                                placeholder='Username'
                                returnKeyType='next'
                                autoCorrect={false}
                                underlineColorAndroid='rgba(0,0,0,0)'
                                onChangeText={(username) => this.setState({username})}
                                value={this.state.username}
                        />
                         <TextInput
                                style={styles.info}
                                placeholder='Enter Pass'
                                returnKeyType='go'
                                autoCorrect={false}
                                underlineColorAndroid='rgba(0,0,0,0)'
                                onChangeText={(password) => this.setState({password})}
                                value={this.state.password}
                                secureTextEntry={true}
                        />
                        <Button
                            style={styles.info}
                            disabled={!this.state.username||!this.state.password}
                            onPress={() => {
                                    /* 1. Navigate to the Details route with params */
                                    this.props.navigation.navigate('Home', {
                                      isLoggedIn: true,
                                      username: this.state.username,
                                      password: this.state.password,
                                    });
                                }}
                            title="Submit"
                        />
                    </View>
                </View>
            </KeyboardAvoidingView>
        )
    }


}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: 'rgb(255,255,255)',
        flexDirection: 'column'
    },
    logoContainer:{
        alignItems: 'center',
        justifyContent: 'flex-start',
        flex: 1,
    },
    logo: {
        width: 230,
        //TODO edit this shit
        height: 80,
        marginTop: 20,
    },
    title: {
        color: 'magenta',
        fontSize: 18,
        textAlign: 'center',
        marginTop: 1,
        opacity: 0.6
    },
    infoContainer: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        height: 200,
        padding: 20,
        //backgroundColor: "red"
    },
    info: {
        height: 45,
        backgroundColor: "rgba(00,255,00, 0.2)",
        marginBottom: 10,
        borderRadius: 20
    }
})