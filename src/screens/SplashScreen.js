import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import LottieView from 'lottie-react-native';

const Splash = ({navigation}) => {
  return (
    <LottieView
      source={require('../assets/Splash.json')}
      autoPlay
      loop={false}
      speed={0.6}
      onAnimationFinish={() => {
        console.log('Animation Finished!');
        navigation.navigate('LoginScreen');
      }}
    />
  );
};

export default Splash;