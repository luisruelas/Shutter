import React from 'react';
import {
    Text,
    ScrollView,
    View,
    TouchableOpacity
} from 'react-native';
import CommonStyleSheet from '../styles/common'
import CashierBox from '../components/CashierBoxComponent'
//import DocumentPicker from 'react-native-document-picker'

export default class Cashier extends React.Component {

    constructor(props) {
        super(props)
        console.log("propsCashir", props)
        this._addStyles()
        this.state = {
            user: {
                full_name: 'Luis Ruelas'
            }
        }
    }

    _addStyles() {
        CommonStyleSheet['title-text'] = {
            color: 'blue',
            borderWidth: 5,
            fontSize: 30,
            fontWeight: "bold"
        }
        CommonStyleSheet['box-title-text'] = {
            borderColor: 'black',
            paddingLeft: 20,
            paddingRight: 15,
            borderWidth: 5
        }
    }

    navigateTo(screenName) {
        this.props.navigation.push(screenName);
    }

    render() {
        return (
            <ScrollView style={{ flex: 1 }}
                contentContainerStyle={{ alignItems: 'center' }}
            >
                <View style={{ alignItems: 'flex-end', width: "100%" }}>
                    <TouchableOpacity
                        style={CommonStyleSheet['box-title-text']}
                        onPress= { () => this.navigateTo('Config') }
                    >
                        <Text>Configuration</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={ CommonStyleSheet['box-title-text'] }>
                    <Text style={ CommonStyleSheet['title-text'] }>Cahier Screen</Text>
                </TouchableOpacity>
                <View style={{ flexDirection: 'row' }}>
                    <CashierBox style={{ flex: 2, marginTop: 20 }} title="Venta" />
                    <CashierBox style={{ flex: 2, marginTop: 20 }} title="Caja" />
                    <CashierBox style={{ flex: 2, marginTop: 20 }} title="Reporte" />
                </View>
                <TouchableOpacity style={CommonStyleSheet['box-title-text']}>
                    <Text style={CommonStyleSheet['title-text']}>{this.state?.user.full_name || ''}</Text>
                </TouchableOpacity>
                <View style={{ alignItems: 'flex-end', width: "100%" }}>
                    <TouchableOpacity style={CommonStyleSheet['box-title-text']}>
                        <Text>Sync</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        );
    }
}