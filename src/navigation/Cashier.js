import React from 'react';
import {
    Text,
    View,
    TouchableOpacity
} from 'react-native';
import CommonStyleSheet from '../styles/common'

export default class Login extends React.Component {

    navigateTo(screenName) {
        this.props.navigation.push(screenName);
    }

    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Cahier Screen</Text>
                <TouchableOpacity
                    onPress={() => this.navigateTo('Login')}
                    style={CommonStyleSheet.btn}
                >
                    <Text>Go Back</Text>
                </TouchableOpacity>
            </View>
        );
    }
}