import React,{useState} from 'react'
import {ImageBackground,View, Text, StyleSheet,StatusBar, Button, TextInput, TouchableOpacity} from 'react-native';
import Logo from '../screens/Logo';

const Login = ({navigation}) =>{
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const[emailError, setEmailError]= useState(false)
  const[passwordError, setPasswordError]= useState(false)

  const handleLogin = () =>{
    if (email.length<4 || email.length==0){
        setEmailError(true)
    }

    if (password.length<4 || password.length==0){
      setPasswordError(true)
  }
  }
    return(
        <View style={styles.cointainer}>
           <ImageBackground 
                  source={require('../assets/brickwall.jpg')}
                  style={{width: 360, height: 650 ,flex:1}} 
             />
            <Logo/>
            <View style={styles.cointainer1}>
              <TextInput
                style={styles.inputBox}
                placeholder="Email"
                placeholderTextColor="#ffffff"
                selectionColor="red"
                value={email}
                onChangeText={(text) => {setEmail(text)}}
              />
              { emailError && <Text>There is error</Text>}
              <TextInput
                style={styles.inputBox}
                placeholder="Password"
                secureTextEntry={true}
                placeholderTextColor="#ffffff"
                value={password}
                onChangeText={setPassword}
              />
               { passwordError && <Text>Invalid Password</Text>}
              <TouchableOpacity onPress={handleLogin} style={styles.button}>
                <Text style={styles.buttonText}>Login</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.signupTextCont}>
                    <Text style={styles.signupText}>Do not have an account yet? </Text>
                    <Text style={styles.signupButton}> 
                    <Button
                        title='Signup'
                        onPress={() => navigation.navigate('SignupScreen')}/>
                    </Text>
            </View>  
        </View>
    );
}


export default Login;

const styles= StyleSheet.create({
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
  },
  cointainer1: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputBox: {
    width: 300,
    backgroundColor: 'rgba(255,255,255,0.3)',
    borderRadius: 25,
    paddingHorizontal: 16,
    fontSize: 16,
    color: '#ffffff',
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


});