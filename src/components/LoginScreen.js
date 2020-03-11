import React from 'react';
import { Text, StyleSheet, View, ScrollView, TouchableOpacity } from 'react-native';
import {Avatar} from 'react-native-elements';
import FloatLabelTextInput from 'react-native-floating-label-text-input';

class LoginScreen extends React.Component {
    static navigationOptions = {
        headerShown: false
    }
    render() {
        return (
            <View style={styles.parentViewStyle}>
                <ScrollView style={{ flex:1}}>
                    <View style={styles.avatarViewStyle}>
                        <Avatar rounded size="large" activeOpacity={0.7} title="A" />
                    </View>
                    <View style={styles.textViewStyle}>
                        <Text style={styles.loginStyle}>Login </Text>
                        <View style={styles.textInputStyle}>
                            <FloatLabelTextInput placeholder={"Email"} />
                            <FloatLabelTextInput placeholder="Password" secureTextEntry={true} />
                        </View>
                        <TouchableOpacity 
                        style={styles.submit}
                        onPress={this._onPressButton}>
                            <Text style={styles.submitText}>GO!</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
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
    avatarViewStyle : {
        flex: 3,
        justifyContent: "center",
        alignItems: 'center',
        height: "30%"
    },
    textViewStyle: {
        flex: 2,
        backgroundColor: 'white',
        marginTop: 10,
        marginBottom: 10,
        marginLeft:10,
        marginRight:10,
        borderRadius: 10,
        height: "70%"
    },
    loginStyle:{
        fontSize : 20,
        fontWeight: 'bold',
        fontStyle: 'normal',
        textAlign: 'center',
        marginTop: 10,
        marginBottom: 10,
        paddingBottom: 20
    },
    textInputStyle:{
        marginLeft:20,
        marginRight:20
    },
    submit:{
        marginRight:40,
        marginLeft:40,
        marginTop:40,
        paddingTop:20,
        paddingBottom:20,
        backgroundColor:'#68a0cf',
        borderRadius:20,
        borderWidth: 1,
        borderColor: '#fff'
      },
      submitText:{
          color:'#fff',
          textAlign:'center',
      }
});

export default LoginScreen;