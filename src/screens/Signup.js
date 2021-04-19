import React, {Component} from 'react';
import {
  TouchableOpacity,
  TextInput,
  View,
  ImageBackground,
  Text,
  StyleSheet,
  Button,
} from 'react-native';
import {useState} from 'react/cjs/react.development';
import Logo from '../screens/Logo';

const Signup = ({navigation}) => {
  const [name, setName] = useState('');
  const [mobilenumber, setMobileNumber] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [nameError, setNameError] = useState(false);
  const [mobilenumberError, setMobileNumberError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const HandlSignup = () => {
    if (name.length < 3 || name.length == 0) {
      setNameError(true);
    }

    if (!(mobilenumber.length == 11)) {
      setMobileNumberError(true);
    }

    if (email.length < 7 || email.length == 0) {
      setEmailError(true);
    }

    if (password.length < 8) {
      setPasswordError(true);
    }
  };

  return (
    <View style={styles.cointainer1}>
      <ImageBackground
        source={require('../assets/brickwall.jpg')}
        style={{width: 360, height: 650, flex: 1}}
      />
      <Logo />
      <View style={styles.cointainer}>
        <TextInput
          style={styles.inputBox}
          placeholder="Full Name"
          placeholderTextColor="black"
          selectionColor="red"
          value={name}
          onChangeText={setName}
        />

        {nameError && <Text style={styles.errorText}>Invalid Name</Text>}

        <TextInput
          style={styles.inputBox}
          placeholder="Mobile Number"
          keyboardType="numeric"
          placeholderTextColor="black"
          selectionColor="red"
          value={mobilenumber}
          onChangeText={setMobileNumber}
        />
        {mobilenumberError && (
          <Text style={styles.errorText}>Invalid Mobile Number</Text>
        )}
        <TextInput
          style={styles.inputBox}
          placeholder="Email"
          placeholderTextColor="black"
          selectionColor="red"
          value={email}
          onChangeText={setEmail}
        />

        {emailError && <Text style={styles.errorText}>Invalid Email</Text>}
        <TextInput
          style={styles.inputBox}
          placeholder="Password"
          secureTextEntry={true}
          placeholderTextColor="black"
          value={password}
          onChangeText={setPassword}
        />

        {passwordError && (
          <Text style={styles.errorText}>Password must have 8 characters</Text>
        )}
        <TouchableOpacity onPress={HandlSignup} style={styles.button}>
          <Text style={styles.buttonText}>Signup</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.signupTextCont}>
        <Text style={styles.signupText}> Already have an Account? </Text>
        <Button
          style={styles.signupButton}
          title="Login"
          onPress={() => navigation.navigate('MyTabs')}
        />
      </View>
    </View>
  );
};

export default Signup;

const styles = StyleSheet.create({
  cointainer1: {
    backgroundColor: '#455a64',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  signupTextCont: {
    flexGrow: 1,
    alignItems: 'flex-end',
    justifyContent: 'center',
    paddingVertical: 16,
    flexDirection: 'row',
  },
  signupText: {
    color: 'rgba(255,255,255,0.6)',
    fontSize: 16,
    marginBottom: 6,
  },
  signupButton: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '500',
  },
  cointainer: {
    flexGrow: 1,
    justifyContent: 'center',
    //alignItems:'center',
  },
  inputBox: {
    width: 300,
    backgroundColor: 'rgba(255,255,255,1)',
    borderRadius: 25,
    paddingHorizontal: 16,
    fontSize: 16,
    color: 'green',
    marginVertical: 10,
  },
  button: {
    backgroundColor: '#1c313a',
    borderRadius: 25,
    width: 300,
    marginVertical: 13,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#ffffff',
    textAlign: 'center',
    paddingVertical: 12,
  },

  errorText: {
    color: 'yellow',
    textAlign: 'left',
    fontSize: 18,
  },
});
