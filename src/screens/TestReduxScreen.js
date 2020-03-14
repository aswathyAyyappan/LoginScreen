import React from 'react';
import { View, StyleSheet } from 'react-native';
import TextButtonComponent from '../components/TextButtonComponent';
import TextComponent from '../components/TextComponent';
import reducer from '../reducers/reducer';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

var store = createStore(reducer);
class TestReduxScreen extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <View style={{ flex: 1, justifyContent: "center" }}>
                    <TextButtonComponent></TextButtonComponent>
                    <TextComponent></TextComponent>
                </View>
            </Provider>
        );
    }
}

const styles = StyleSheet.create({});
export default TestReduxScreen;