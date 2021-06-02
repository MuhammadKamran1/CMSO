<<<<<<< Updated upstream
import React,{Component} from 'react'
import {View, Text, StyleSheet,Button} from 'react-native';
=======
import React, {useContext} from 'react';
import {
  TouchableOpacity,
  TextInput,
  View,
  ImageBackground,
  Text,
  StyleSheet,
  Button,
  Alert,
  ScrollView
} from 'react-native';
import {useState} from 'react/cjs/react.development';
>>>>>>> Stashed changes
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
                    onPress={() => navigation.pop( )}

                    />    
            </View>    
        </View>
    );
}


<<<<<<< Updated upstream
=======
const Signup = ({navigation}) => {
  const [name, setName] = useState('');
  const [mobilenumber, setMobileNumber] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // const [nameError, setNameError] = useState(false);
  // const [mobilenumberError, setMobileNumberError] = useState(false);
  // const [emailError, setEmailError] = useState(false);
  // const [passwordError, setPasswordError] = useState(false);
  const [show, setShow] = useState(false);
  const [visible, setVisible] = useState(true);
  // const[validated, setValidated]=useState(false);
  const HandlSignup = () => {
    if (name.length == 0 || email.length == 0 || mobilenumber.length == 0 || password.length ==0) {
      //setNameError(true);
      Alert.alert('Error','Invalid Credential')
    }
    // if (email.length < 7 || email.length == 0) {
    //   //setEmailError(true);
    //    alert('Invalid Email')
    //  }

    // if (mobilenumber.length == 0 ) {
    //   //setMobileNumberError(true);
    //   alert('Invalid Mobile Number')
    // }
     
    //  if (password.length < 8) {
    //     //setPasswordError(true);
    //     alert('Invalid Password')
    //   }
    
    else{
        signup(email, password)
        saveUserDb()
    }
  };

  // const LocalSignup = () => {
  //   HandlSignup()
   
  // }

  const saveUserDb= async()=>{
     await AsyncStorage.setItem('Mobile', mobilenumber)
    database()
    .ref(`/CMSO/Users/${mobilenumber}/`)
    .set({
    Name: name,
    Mobile: mobilenumber,
    Email: email
  })
    .then(() => console.log('Data set.'));
  }

  const {signup} = useContext(AuthContext);

  return (

    <View style={styles.cointainer1}>
      <ImageBackground
        source={require('../assets/brickwall.jpg')}
        style={{width: 360, height: 650, flex: 1}}
      />
      <Logo />
      <Text style={{fontSize:20,color:'white',fontStyle:'italic'}}>Build With Us</Text>

      <View style={styles.cointainer}>
        <Text style={{color:'white', fontSize:18, paddingHorizontal:12}}>Create an Account</Text>
        <TextInput
          style={styles.inputBox}
          placeholder="Full Name"
          keyboardType='ascii-capable'
          placeholderTextColor="black"
          selectionColor="red"
          value={name}
          onChangeText={setName}
        />

        {/* {nameError && <Text style={styles.errorText}>Invalid Name</Text>} */}

        <TextInput
          style={styles.inputBox}
          placeholder="Mobile Number"
          keyboardType="numeric"
          placeholderTextColor="black"
          selectionColor="red"
          value={mobilenumber}
          onChangeText={setMobileNumber}
        />
        {/* {mobilenumberError && (
          <Text style={styles.errorText}>Invalid Mobile Number</Text>
        )} */}
        <TextInput
          style={styles.inputBox}
          placeholder="Email"
          keyboardType='email-address'
          placeholderTextColor="black"
          selectionColor="red"
          value={email}
          onChangeText={setEmail}
        />

        {/* {emailError && <Text style={styles.errorText}>Invalid Email</Text>} */}
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
          <EntypoIcons name={show === false ? 'eye' : 'eye-with-line'}size={26}color="black"/>
        </TouchableOpacity>
{/* {passwordError && (<Text style={styles.errorText}>Password must have 6 characters</Text>)} */}
        
        <TouchableOpacity
          onPress={HandlSignup}
          style={styles.button}>
          <Text style={styles.buttonText}>Signup</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.signupTextCont}>
        <Text style={styles.signupText}> Already have an Account? </Text>
        <Button
          style={styles.signupButton}
          title="Login"
          onPress={() => navigation.goBack('login')}
        />
      </View>
    </View>
  );
};

>>>>>>> Stashed changes
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

<<<<<<< Updated upstream

});
=======
  errorText: {
    color: 'yellow',
    textAlign: 'left',
    fontSize: 13,
  },
  btnEye: {
    //position: 'absolute',
    left: 260,
    top: -50,
  },
});
>>>>>>> Stashed changes
