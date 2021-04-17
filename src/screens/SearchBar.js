import React, {Component} from 'react';
import {View, Text, StyleSheet, TextInput, Image} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';


const SearchBar = () => {
  return (
    <View style={{flex: 1}}>
      <View
        style={{
          height: 60,
          backgroundColor: 'black',
          justifyContent: 'center',
          paddingHorizontal: 15,
        }}>
        <View 
            style={{
              height: 45, 
              backgroundColor: '#ffffff',
              flexDirection:'row',
              padding:5,
              alignItems:'center'
              }}>
        
          <Icon name="search" size={24} />
          <TextInput placeholder="Search" style={{fontSize: 20, paddingVertical:5, width:90,flex:1}} />
        </View>
      </View>
    </View>
  );
}
    
export default SearchBar;
      


const styles = StyleSheet.create({

  searchInput: {
    backgroundColor: '#BFBFBF',
    width: '100%',
    borderRadius: 5,
    fontSize: 20,
    fontWeight: 'bold',
    paddingHorizontal: 10,
    //flexGrow:10,
  },

  
});
