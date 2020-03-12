import React from 'react';
import { Text, StyleSheet, View, ScrollView, TouchableOpacity, KeyboardAvoidingView, TextInput } from 'react-native';
import { Avatar } from 'react-native-elements';
import FloatLabelTextInput from 'react-native-floating-label-text-input';

class LoginScreen extends React.Component {
    static navigationOptions = {
        headerShown: false
    }

    state = {
    };

    render() {
        return (
            <View style={styles.parentViewStyle}>
                <View style={styles.avatarViewStyle}>
                    <Avatar rounded size="large" activeOpacity={0.7} title="A" overlayContainerStyle={{ backgroundColor: 'white' }} />
                </View>
                <View style={styles.textViewStyle}>
                    <KeyboardAvoidingView behavior="padding" enabled>
                        <Text style={styles.loginStyle}>Login </Text>
                        <View style={styles.textInputViewStyle}>
                            <TextInput style={styles.textInputStyle} placeholder={"Email"}
                            />
                            <TextInput style={styles.textInputStyle} placeholder="Password" secureTextEntry={true}
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