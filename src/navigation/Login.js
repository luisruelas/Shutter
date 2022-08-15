import React from 'react';
import {
    TextInput,
    View,
    Text,
    Image,
    TouchableOpacity
} from 'react-native';
import CommonStyleSheet from '../styles/common'

export default class Login extends React.Component {

    navigateTo(screenName) {
        this.props.navigation.push(screenName)
    }

    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', margin: 100 }}>
                <Image source={require('../images/common/logo.png')} />
                <TextInput
                    style={CommonStyleSheet['form-control']}
                    placeholder="User"
                />
                <TextInput
                    style={CommonStyleSheet['form-control']}
                    placeholder="Password"
                />
                <TouchableOpacity
                    onPress={() => this.navigateTo('Cashier')}
                    style={CommonStyleSheet.btn}
                >
                    <Text>Login</Text>
                </TouchableOpacity>
            </View>
        );
    }
}