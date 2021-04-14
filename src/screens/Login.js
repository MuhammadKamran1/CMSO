import React,{Component} from 'react'
import {View, Text, StyleSheet,StatusBar, Button} from 'react-native';
import Logo from '../screens/Logo';
import LoginForm from '../App/Form';

const Login = ({navigation}) =>{
    return(
        <View style={style.cointainer}>
            <Logo/>
            <LoginForm type="Login"/>
            <View style={style.signupTextCont}>
                    <Text style={style.signupText}>Do not have an account yet? </Text>
                    <Text style={style.signupButton}> 
                    <Button
                        title='Signup'
                        onPress={() => navigation.navigate('SignupScreen')}
                    />
                    </Text>
            </View>  
        </View>
    );
}


export default Login;

const style= StyleSheet.create({
  cointainer:{
    backgroundColor: '#455a64',
    flex: 1,
    alignItems: 'center',
    justifyContent:'center',

  },
  signupTextCont:{
    flexGrow: 1,
    alignItems: 'flex-end',
    justifyContent:'center',
    paddingVertical:16,
    flexDirection:'row',
  },
  signupText:{
      color:'rgba(255,255,255,0.6)',
      fontSize: 16,
      marginBottom:6,
  },
  signupButton:{
      color:'#ffffff',
      fontSize:16,
      fontWeight:'500',
  }


});