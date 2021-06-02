<<<<<<< Updated upstream
import React,{Component} from 'react'
import {View, Text, StyleSheet,StatusBar, Button} from 'react-native';
import Logo from '../screens/Logo';
import Form from '../App/Form';

const Login = ({navigation}) =>{
    return(
        <View style={style.cointainer}>
            <Logo/>
            <Form type="Login"/>
            <View style={style.signupTextCont}>
                    <Text style={style.signupText}>Do not have an account yet? </Text>
                    <Text style={style.signupButton}> 
                    <Button
                        title='Signup'
                        onPress={() => navigation.push('SignupScreen')}
                    />
                    </Text>
            </View>  
        </View>
    );
}

=======
import React, {useState, useContext} from 'react';
import {
  ImageBackground,
  View,
  Text,
  StyleSheet,
  StatusBar,
  Button,
  TextInput,
  TouchableOpacity,
  Alert
} from 'react-native';

import Logo from '../screens/Logo';
import EntypoIcons from 'react-native-vector-icons/Entypo';
import {AuthContext} from '../screens/navigation/AuthProvider';
import ForgotPassword from '../screens/ForgotPassword';

const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  //const [emailError, setEmailError] = useState(false);
  //const [passwordError, setPasswordError] = useState(false);
  const [show, setShow] = useState(false);
  
  const [visible, setVisible] = useState(true);
  // const[validated, setValidated]=useState(false);


  const {login} = useContext(AuthContext);

  // const handleLogin = () => {
  //   if (email.length < 4 || email.length == 0) {
  //     setEmailError(true);
  //   }

  //   if (password.length < 4 || password.length == 0) {
  //     setPasswordError(true);
  //   }
  // };

  const handleLogin = () => {
    
      if (email.length == 0 || password.length==0) {
         Alert.alert('Error','Invalid Email or Password')
      }
        else{
          login(email,password)
        }
       
   
  };

  const LocalLogin = () => {
    handleLogin()
    
      
    
    };
   
  


  return (
    <View style={styles.cointainer}>
      <ImageBackground
        source={require('../assets/brickwall.jpg')}
        style={{width: 360, height: 650, flex: 1, opacity: 1}}
      />
      <Logo />
      <Text style={{fontSize:20,color:'white',fontStyle:'italic'}}>Build With Us</Text>
      <View style={styles.cointainer1}>
        <TextInput
          style={styles.inputBox}
          placeholder="Email"
          placeholderTextColor="black"
          selectionColor="red"
          value={email}
          onChangeText={text => {
            setEmail(text);
          }}
        />
        {/* { emailError && <Text style={styles.errorText}>There is error</Text>} */}
        <TextInput
          style={styles.inputBox}
          placeholder="Password"
          secureTextEntry={visible}
          placeholderTextColor="black"
          value={password}
          onChangeText={setPassword}
        />
        <TouchableOpacity
          style={styles.btnEye}
          onPress={() => {
            setVisible(!visible);
            setShow(!show);
          }}>
          <EntypoIcons
            name={show === false ? 'eye' : 'eye-with-line'}
            size={26}
            color="black"
          />
        </TouchableOpacity>
        {passwordError && (
          <Text style={styles.errorText}>Incorrect Password or Email</Text>
        )}
        <TouchableOpacity
          onPress={()=> LocalLogin()}
          style={styles.button}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity onPress={()=>navigation.navigate('ForgotPassword')}>
        <Text style={{color:'white',fontSize:18}}>Forgot Password?</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.signupTextCont}>
        <Text style={styles.signupText}>Do not have an account yet? </Text>
        <Text style={styles.signupButton}>
          <Button
            title="Signup"
            onPress={() => navigation.navigate('SignupScreen')}
          />
        </Text>
      </View>
    </View>
  );
};
>>>>>>> Stashed changes

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