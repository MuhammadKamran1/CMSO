import React,{Component} from 'react'
import {View, Text, StyleSheet,StatusBar} from 'react-native';
import Login from '../screens/Login';
import Signup from '../screens/Signup';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator,TransitionSpecs, HeaderStyleInterpolators } from '@react-navigation/stack';
import { ScreenStackHeaderBackButtonImage } from 'react-native-screens';
import SplashScreen from 'react-native-splash-screen';


/*const MyTransition = {
    gestureDirection: 'horizontal',
    transitionSpec: {
      open: TransitionSpecs.TransitionIOSSpec,
      close: TransitionSpecs.TransitionIOSSpec,
    },
    headerStyleInterpolator: HeaderStyleInterpolators.forFade,
    cardStyleInterpolator: ({ current, next, layouts }) => {
      return {
        cardStyle: {
          transform: [
            {
              translateX: current.progress.interpolate({
                inputRange: [0, 1],
                outputRange: [layouts.screen.width, 0],
              }),
            },
            {
              rotate: current.progress.interpolate({
                inputRange: [0, 1],
                outputRange: ["0deg", "0deg"],
              }),
            },
            {
              scale: next
                ? next.progress.interpolate({
                    inputRange: [0, 1],
                    outputRange: [1, 0.9],
                  })
                : 1,
            },
          ],
        },
        overlayStyle: {
          opacity: current.progress.interpolate({
            inputRange: [0, 1],
            outputRange: [0, 0.5],
          }),
        },
      };
    },
  };*/
  

const Stack = createStackNavigator();

const App = () => {

    return(
        <NavigationContainer>
            <Stack.Navigator 
            initialRouteName='Login'
            /*</NavigationContainer>screenOptions={{
                cardOverlayEnabled: true,
                gestureEnabled: true,
            
                ...MyTransition,}}*/
            >
                <Stack.Screen name="LoginScreen" component={Login} options={{headerShown: false}}/>
                <Stack.Screen name="SignupScreen" component={Signup} options={{headerShown: false}}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}


export default App;


const styles = StyleSheet.create({
    cointainer:{
        backgroundColor:'#455a64',
        flex: 1,
        alignItems: 'center',
        justifyContent:'center',
    }
        
});
