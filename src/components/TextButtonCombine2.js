import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { Button } from 'react-native-elements';
import { connect } from 'react-redux';

class TextButtonCombine2 extends React.Component {

    constructor(props) {
        super(props);
        this._onPressButton = this._onPressButton.bind(this);
    };

    _onPressButton(){
        this.props.increment()
    }

    render() {
        return (
            <View>
                <Text> Num = {this.props.num}</Text>
                <Button onPress={this._onPressButton} title='ADD'></Button>
            </View>
        );
    }

}
const mapStateFromProp = (store) => {
    return {
        num: store.reducer2.num
    }
}
const mapDispatchToProp = (dispatch) => {
    return {
        increment : () => dispatch({type : 'INCREMENT2'})
    }
}
const styles = StyleSheet.create({});
export default connect(mapStateFromProp,mapDispatchToProp)(TextButtonCombine2);