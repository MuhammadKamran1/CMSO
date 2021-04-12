import React,{Component} from 'react'
import {View, Text, StyleSheet,Button} from 'react-native';
import Logo from '../screens/Logo';
import SignupForm from '../App/SignupForm';

const Signup = ({navigation}) =>{
    
    return(
        <View style={style.cointainer}>
            <Logo/>
            <SignupForm type="Signup"/>
                <View style={style.signupTextCont}>
                    <Text style={style.signupText}> Already have an Account?  </Text>
                    <Button 
                    style={style.signupButton}
                    title='Login' 
                    onPress={() => navigation.pop()}

                    />    
            </View>    
        </View>
    );
}


export default Signup;

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