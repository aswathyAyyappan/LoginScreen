import React from 'react';
import { View, StyleSheet } from 'react-native';
import TextButtonCombine1 from '../components/TextButtonCombine1';
import TextButtonCombine2 from '../components/TextButtonCombine2';
import reducer from '../reducers/reducer';
import reducer2 from '../reducers/reducer2'
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({reducer: reducer, reducer2: reducer2});
var store = createStore(rootReducer);
class TestCombineRed extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <View style={{ flex: 1, justifyContent: "center" }}>
                    <TextButtonCombine1/>
                    <TextButtonCombine2/>
                </View>
            </Provider>
        );
    }
}

const styles = StyleSheet.create({});
export default TestCombineRed;