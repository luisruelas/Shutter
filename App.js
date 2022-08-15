/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type { Node } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from './src/navigation/Login'
import CashierScreen from './src/navigation/Cashier'
import CashOutScreen from './src/navigation/CashOut'
import CheckoutScreen from './src/navigation/Checkout'
import ConfigScreen from './src/navigation/Config'
import ReportsScreen from './src/navigation/Reports'
import SaleScreen from './src/navigation/Sale'

const Stack = createNativeStackNavigator();

const App: () => Node = () => {

  return (
    <NavigationContainer>
        <Stack.Navigator>
              <Stack.Screen name="Login" component={LoginScreen} />
              <Stack.Screen name="Cashier" component={CashierScreen} />
              <Stack.Screen name="CashOut" component={CashOutScreen} />
              <Stack.Screen name="Checkout" component={CheckoutScreen} />
              <Stack.Screen name="Config" component={ConfigScreen} />
              <Stack.Screen name="Reports" component={ReportsScreen} />
              <Stack.Screen name="Sale" component={SaleScreen} />
        </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
