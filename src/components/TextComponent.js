import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { connect } from 'react-redux';

class TextComponent extends React.Component {

    constructor(props) {
        super(props);
    };

    render() {
        return (
            <View>
                <Text> Num = {this.props.num}</Text>
            </View>
        );
    }

} 

const mapStateFromProp = (store) => {
    return {
        num: store.num
    }
}
const styles = StyleSheet.create({});
export default connect(mapStateFromProp, null)(TextComponent);