import React, {Component} from 'react';
import {StyleSheet, AppRegistry} from 'react-native';
import Login from '../screens/Login';
import Signup from '../screens/Signup';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Splash from '../screens/SplashScreen';
import SpecificProductCategory from '../screens/product/ProductView';
import ProductCategories from '../screens/product/ProductCategories';
import ServicesCategories from '../screens/Services/ServicesCategories';
import Cart from'../screens/CartScreen';
import Account from '../screens/AccountScreen';

const App = () => {
  const Stack = createStackNavigator();
  const Tab = createBottomTabNavigator();

  const MyTabs = () => {
    return (
      <Tab.Navigator >
        <Tab.Screen name="Products" component={ProductCategories}></Tab.Screen>
        <Tab.Screen name="Services" component={ServicesCategories}></Tab.Screen>
        <Tab.Screen name="Cart" component={Cart}></Tab.Screen>
        <Tab.Screen name="Account" component={Account}></Tab.Screen>
        
      </Tab.Navigator>
      
    );
  };

  return (
    <NavigationContainer>
      {/* <HP/> */}
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen
          name="SplashScreen"
          component={Splash}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="LoginScreen"
          component={Login}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SignupScreen"
          component={Signup}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="MyTabs"
          component={MyTabs}
          options={{headerShown: false}}
        />

        {/* <Stack.Screen name="ProductScreen" component={HP} options={{headerShown: false}}/> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

AppRegistry.registerComponent('CMSO', () => Splash);
const styles = StyleSheet.create({
  cointainer: {
    backgroundColor: '#455a64',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
