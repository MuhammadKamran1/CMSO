import React, {Component} from 'react';
// import {StyleSheet, AppRegistry, View} from 'react-native';

import Routes from '../screens/navigation/Routes';
import AuthProvider from '../screens/navigation/AuthProvider';

const Provider = () => {
  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  );
};

export default Provider;

// const styles = StyleSheet.create({
//   cointainer: {
//     backgroundColor: '#455a64',
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },

//   tabNamesContainer: {
//     flexDirection: 'row',
//   },
// });
