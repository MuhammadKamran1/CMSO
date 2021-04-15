import React,{Component} from 'react'
<<<<<<< Updated upstream
import {View, Text, StyleSheet,Button} from 'react-native';
=======
import {TouchableOpacity,TextInput,View, Text, StyleSheet,Button} from 'react-native';
import { red100 } from 'react-native-paper/lib/typescript/styles/colors';
import { useState } from 'react/cjs/react.development';
>>>>>>> Stashed changes
import Logo from '../screens/Logo';
import SignupForm from '../App/SignupForm';

const Signup = ({navigation}) =>{
<<<<<<< Updated upstream
=======

    const[name,setName]=useState("")
    const[mobilenumber,setMobileNumber]=useState("")
    const[email,setEmail]=useState("")
    const[password,setPassword]=useState("")

    const[nameError,setNameError]=useState(false)
    const[mobilenumberError,setMobileNumberError]=useState(false)
    const[emailError,setEmailError]=useState(false)
    const[passwordError,setPasswordError]=useState(false)

    const HandlSignup=()=>{
        
       if(name.length<3  || name.length==0){
           setNameError(true)
       }

       if(!mobilenumber.length==11){
        setMobileNumberError(true)
    }

    if(email.length<7  || email.length==0){
        setEmailError(true)
    }

    if(password.length<=8){
        setPasswordError(true)
    }

}
>>>>>>> Stashed changes
    
    return(
        <View style={style.cointainer}>
            <Logo/>
<<<<<<< Updated upstream
            <SignupForm type="Signup"/>
                <View style={style.signupTextCont}>
                    <Text style={style.signupText}> Already have an Account?  </Text>
=======
            <View style={styles.cointainer}>
                <TextInput style={styles.inputBox} 
                   placeholder="Full Name"
                   placeholderTextColor="#ffffff"
                   selectionColor='red'
                   value={name}
                   onChangeText={setName}
                />

                { nameError   && <Text style={styles.invalidInput}>Enter Valid Name</Text>}

                <TextInput style={styles.inputBox} 
                   placeholder="Mobile Number"
                   keyboardType = 'numeric'
                   placeholderTextColor="#ffffff"
                   selectionColor='red'
                   value={mobilenumber}
                   onChangeText={setMobileNumber}
                />
                { mobilenumberError   &&<Text style={styles.invalidInput}>Invalid Number</Text>}
                <TextInput style={styles.inputBox} 
                   placeholder="Email"
                   placeholderTextColor="#ffffff"
                   selectionColor='red'
                   value={email}
                   onChangeText={setEmail}

                />

                 { emailError   &&<Text style={styles.invalidInput}>Invalid Email</Text>}
                <TextInput style={styles.inputBox} 
                   placeholder="Password"
                   secureTextEntry={true}
                   placeholderTextColor="#ffffff"
                   value={password}
                   onChangeText={setPassword}
                /> 

                 { passwordError   &&<Text style={styles.invalidInput}>Password length Must Atleast be 8</Text>}
                <TouchableOpacity onPress={HandlSignup} style={styles.button}>
                    <Text style={styles.buttonText}>Signup</Text>
                </TouchableOpacity>
            </View>
                <View style={styles.signupTextCont}>
                    <Text style={styles.signupText}> Already have an Account?  </Text>
>>>>>>> Stashed changes
                    <Button 
                    style={style.signupButton}
                    title='Login' 
                    onPress={() => navigation.pop( )}

                    />    
            </View>    
        </View>
    );
}

export default Signup;

<<<<<<< Updated upstream
const style= StyleSheet.create({
  cointainer:{
=======


const styles= StyleSheet.create({
  cointainer1:{
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
  }
=======
  },
  cointainer:{
    flexGrow: 1, 
    justifyContent:'center',
    //alignItems:'center',
  },
  inputBox:{
      width:300,
      backgroundColor:'rgba(255,255,255,0.3)',
      borderRadius: 25, 
      paddingHorizontal:16,
      fontSize:16,
      color:'#ffffff',
      marginVertical:10,
  },
  button:{
      backgroundColor:'#1c313a',
      borderRadius: 25, 
      width:300,
      marginVertical:13,


  },
  buttonText:{

      fontSize:16,
      fontWeight:'500',
      color:'#ffffff',
      textAlign:'center',
      paddingVertical:12,
      

  },
  invalidInput:{
    textAlign:"left",
    color: 'red',
  },
>>>>>>> Stashed changes


});