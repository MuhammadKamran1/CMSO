<<<<<<< Updated upstream
import React,{Component} from 'react'
import {Image,View, Text, StyleSheet} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

class Logo extends Component{
    render(){
        return(
             <View style={style.cointainer}>
                <Image style={{width:150, height:60}}
                    source={require('../assets/log2.jpg')}/>
                    <Text style={style.logoText}>Welcome To My App</Text>
             </View>
            
        );
    }
=======
import React, {Component} from 'react';
import {Image, View, Text, StyleSheet} from 'react-native';
//import {Colors} from 'react-native/Libraries/NewAppScreen';

class Logo extends Component {
  render() {
    return (
      <View row style={styles.cointainer}>
        <Image
          style={{ width:100,height:50,resizeMode:'stretch'}}
          source={require('../assets/logo.png')}
        />
        {/* <Text style={styles.logoText}>Build With Us</Text> */}
      </View>
    );
  }
>>>>>>> Stashed changes
}


export default Logo;

const style= StyleSheet.create({
    cointainer:{
      flexGrow: 1, 
      justifyContent:'flex-end',
      alignItems:'center',
    },
    logoText:{
        marginVertical:15,
        fontSize:18,
        color:'rgba(255,255,255,0.7)',
    }
});