import React from 'react';
import {
    Text,
    View,
    TextInput,
    TouchableOpacity
} from 'react-native';
import CommonStyleSheet from '../styles/common'

export default class Login extends React.Component {
    constructor(props) {
        super(props)
    }
    navigateTo(screenName) {
        this.props.navigation.push(screenName);
    }
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={{ flex: 2 }}>Nombre:</Text>
                    <TextInput style={{ flex: 5, ...CommonStyleSheet['form-control'] }} />
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={{ flex: 2 }}>Tipo de Cambio:</Text>
                    <TextInput style={{ flex: 5, ...CommonStyleSheet['form-control'] }} />
                </View>
                <View style={{ flexDirection: "row" }}>
                    <TouchableOpacity
                        onPress={() => this.navigateTo('Cashier') }
                        style={{ width: 150, ...CommonStyleSheet['btn-danger'] }}>
                        <Text style={{ color: "white", fontWeight: "bold" }}>
                            CANCEL
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{ width: 150, ...CommonStyleSheet['btn-primary'] }}
                        onPress={() => this.navigateTo('Cashier')}
                    >
                        <Text style={{ color: "white", fontWeight: "bold" }}>
                            OK
                        </Text>
                     </TouchableOpacity>
                </View>
            </View>
        );
    }
}