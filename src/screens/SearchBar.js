import React, {Component} from 'react';
import {View, Text, StyleSheet, TextInput, Image} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

const SearchBar = () => {
  return (
    <View style={{flex: 1}}>
      <View
        style={{
          height: 45,
          backgroundColor: 'black',
          justifyContent: 'center',
          paddingHorizontal: 20,
        }}>
        <View
          style={{
            height: 30,
            backgroundColor: '#ffffff',
            flexDirection: 'row',
            // padding:2,
            alignItems: 'center',
          }}>
          <Icon name="search" size={20} />
          <TextInput
            placeholder="Search"
            style={{fontSize: 18, paddingVertical: 5, width: 90, flex: 1}}
          />
        </View>
      </View>
    </View>
  );
};

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
