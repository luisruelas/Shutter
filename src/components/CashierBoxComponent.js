import React from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity
} from 'react-native';
import CommonStyleSheet from '../styles/common'

export default class CashierBoxComponent extends React.Component {

    constructor(props) {
        super(props)
        CommonStyleSheet['box'] = {
            borderWidth: 5,
            borderColor: "green",
            alignItems: "center",
            backgroundColor: "black"
        }

        CommonStyleSheet['box-text'] = {
            fontWeight: "bold",
            alignItems: "center",
            color: "grey",
            fontSize: 20,
        }
    }

    navigateTo(screenName) {
        this.props.navigation.push(screenName)
    }

    render() {
        return (
            <View style={this.props.style}>
                <TouchableOpacity style={CommonStyleSheet.box}>
                    <Image source={require('../images/common/logo.png')} />
                    <Text style={CommonStyleSheet["box-text"]}>{this.props?.title || ""}</Text>
                </TouchableOpacity>
            </View>
        );
    }
}