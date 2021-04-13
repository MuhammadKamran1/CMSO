import React,{Component} from 'react'
import {StyleSheet,AppRegistry} from 'react-native';
import Login from '../screens/Login';
import Signup from '../screens/Signup';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Splash from '../screens/SplashScreen';

  
//AppRegistry.registerComponent( 'CMSO',()=> Splash);
const Stack = createStackNavigator();

const App = () => {
  

    return(
        <NavigationContainer>
            <Stack.Navigator 
            //initialRouteName='Splash'
            >   
                <Stack.Screen name="SplashScreen" component={Splash} options={{headerShown: false}}/>
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
