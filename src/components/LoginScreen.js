import React from 'react';
import { Text, StyleSheet, View, ScrollView, TouchableOpacity, KeyboardAvoidingView, TextInput } from 'react-native';
import { Avatar } from 'react-native-elements';
import FloatLabelTextInput from 'react-native-floating-label-text-input';

class LoginScreen extends React.Component {
    static navigationOptions = {
        headerShown: false
    }

    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            password: ''
        };
        this._onPressButton = this._onPressButton.bind(this);
    };

    _onPressButton(){
        alert('userName = '+this.state.userName+' password = '+this.state.password);
    }

    render() {
        return (
            <View style={styles.parentViewStyle} behavior="padding">
                <View style={styles.avatarViewStyle}>
                    <Avatar rounded size="large" activeOpacity={0.7} title="A" titleStyle={{color:'#68a0cf'}} overlayContainerStyle={{ backgroundColor: 'white' }} />
                </View>
                <KeyboardAvoidingView style={styles.textViewStyle} behavior="padding">
                        <Text style={styles.loginStyle}>Login </Text>
                        <View style={styles.textInputViewStyle}>
                            <TextInput style={styles.textInputStyle} placeholder={"Email"}
                            onChangeText={(text) => this.setState({userName: text})}
                            />
                            <TextInput style={styles.textInputStyle} placeholder="Password" secureTextEntry={true}
                            onChangeText={(text) => this.setState({password: text})}
                            />
                            {/* <FloatLabelTextInput placeholder={"Email"} />
                            <FloatLabelTextInput placeholder="Password" secureTextEntry={true} /> */}
                        </View>
                        <TouchableOpacity
                            style={styles.submit}
                            onPress={this._onPressButton}>
                            <Text style={styles.submitText}>GO!</Text>
                        </TouchableOpacity>
                </KeyboardAvoidingView>
            </View>
        );
    }

}


const styles = StyleSheet.create({
    parentViewStyle: {
        flex: 1,
        // marginTop: 30,
        backgroundColor: `rgb(84, 147, 247)`
    },
    avatarViewStyle: {
        flex: 2,
        justifyContent: "center",
        alignItems: 'center'
    },
    textViewStyle: {
        flex: 2,
        backgroundColor: 'white',
        marginTop: 10,
        marginBottom: 40,
        marginLeft: 10,
        marginRight: 10,
        borderRadius: 10
    },
    loginStyle: {
        fontSize: 20,
        fontWeight: 'bold',
        fontStyle: 'normal',
        textAlign: 'center',
        marginTop: 10,
        marginBottom: 10,
        paddingBottom: 20
    },
    textInputViewStyle: {
        marginLeft: 20,
        marginRight: 20
    },
    textInputStyle: {
        height: 40, 
        borderColor: 'gray', 
        borderBottomWidth:1
    },
    submit: {
        marginRight: 40,
        marginLeft: 40,
        marginTop: 40,
        paddingTop: 10,
        paddingBottom: 10,
        backgroundColor: '#68a0cf',
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#fff'
    },
    submitText: {
        color: '#fff',
        textAlign: 'center',
    }
});

export default LoginScreen;