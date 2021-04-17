import React, {Component} from 'react';
import {StyleSheet, AppRegistry, View} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import EntypoIcons from 'react-native-vector-icons/Entypo';

import Login from '../screens/Login';
import Signup from '../screens/Signup';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Splash from '../screens/SplashScreen';
import SpecificProductCategory from '../screens/product/ProductView';
import ProductCategories from '../screens/product/ProductCategories';
import ServicesCategories from '../screens/Services/ServicesCategories';
import Cart from '../screens/CartScreen';
import ProfileScreen from '../screens/ProfileScreen';

const App = () => {
  const Stack = createStackNavigator();
  const Tab = createBottomTabNavigator();

  const MyTabs = () => {
    return (
     
      <Tab.Navigator>
        <Tab.Screen
          name="Products"
          component={ProductCategories}
          options={{
            tabBarLabel: 'Products',
            tabBarIcon: ({color}) => (
              <EntypoIcons name="home" color={color} size={30} /> 
            ),
          }}></Tab.Screen>
        <Tab.Screen
          name="Services"
          component={ServicesCategories}
          options={{
            tabBarLabel: 'Services',
            tabBarIcon: ({color}) => (
              <EntypoIcons name="tools" color={color} size={30} />
            ),
          }}></Tab.Screen>
        <Tab.Screen
          name="Cart"
          component={Cart}
          options={{
            tabBarLabel: 'Cart',
            tabBarIcon: ({color}) => (
              <Icon name="shopping-cart" color={color} size={30} />
            ),
          }}></Tab.Screen>
        <Tab.Screen
          name="ProfileScreen"
          component={ProfileScreen}
          options={{
            tabBarLabel: 'ProfileScreen',
            tabBarIcon: ({color}) => (
              <MaterialIcon name="account" color={color} size={30}/>
            ),
          }}></Tab.Screen>
      </Tab.Navigator>
     
    );
  };

  return (
    <NavigationContainer style={styles.tabNamesContainer}>
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

  tabNamesContainer: {
    flexDirection: 'row',
  },

  
});
