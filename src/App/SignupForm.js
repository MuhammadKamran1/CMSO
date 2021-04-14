import React,{Component} from 'react'
import {TouchableOpacity,TextInput,View, Text, StyleSheet,StatusBar} from 'react-native';

const SignupForm=({})=>{
    
    
        return(
            <View style={styles.cointainer}>
                <TextInput style={styles.inputBox} 
                   placeholder="Full Name"
                   placeholderTextColor="#ffffff"
                   selectionColor='red'
                />
                <TextInput style={styles.inputBox} 
                   placeholder="Mobile Number"
                   keyboardType = 'numeric'
                   placeholderTextColor="#ffffff"
                   selectionColor='red'
                />
                <TextInput style={styles.inputBox} 
                   placeholder="Email"
                   placeholderTextColor="#ffffff"
                   selectionColor='red'
                   onSubmitEditing={()=>this.password.focus()}

                />
                <TextInput style={styles.inputBox} 
                   placeholder="Password"
                   secureTextEntry={true}
                   placeholderTextColor="#ffffff"
                   ref={(input)=>this.password=input}
                /> 
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Signup</Text>
                </TouchableOpacity>
            </View>

        );
    
}


export default SignupForm;

const styles= StyleSheet.create({
    cointainer:{
      flexGrow: 1, 
      justifyContent:'center',
      alignItems:'center',
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
        

    }
    
});