import React, {StyleSheet,useContext, useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import {AuthContext} from '../navigation/AuthProvider';

import AuthStack from '../navigation/AuthStack';
import AppStack from '../navigation/AppStack';

const Routes = () => {
    // Set an initializing state whilst Firebase connects
  const {user, setUser} = useContext(AuthContext);
  const [initializing, setInitializing] = useState(true);

    // Handle user state changes
  const onAuthStateChanged = (user) => {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);

    return subscriber;  // unsubscribe on unmount
  }, []);

  if (initializing) return null;
  console.log(user);
  return (
    <NavigationContainer>
      {user ? <AppStack/> : <AuthStack />}
    </NavigationContainer>
  );
};
export default Routes;

