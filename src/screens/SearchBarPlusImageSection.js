import React, {Component} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons';
import MaterialIcons from 'material-icons-react';
const SearchBar=()=>{

    return(
        <View style={{flex:1}}>
            <View style={{height:80, backgroundColor:'#455a64', justifyContent:'center', paddingHorizontal:15}}>
              <View style={{height:50, backgroundColor:'#ffffff'}}>
                   <MaterialIcons name='search' style={{fontSize:18}}/>
                   
                  <TextInput placeholder="Search" style={{fontSize:18}}/>

              </View>
            </View>


        </View>
        
            
       
    )
}

export default SearchBar;

const styles= StyleSheet.create({
    // searchView:{
    //    alignItems:'center',
    //    justifyContent:'center',
    //    flex:0.5
    // },

    searchInput:{
        backgroundColor:'#BFBFBF',
        width:'100%',
        borderRadius:5,
        fontSize:20,
        fontWeight:'bold',
        paddingHorizontal:10,
        //flexGrow:10,
        

        
    }



});