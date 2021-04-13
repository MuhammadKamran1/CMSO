/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from '../CMSO/src/App/app';
import {name as CMSO} from './app.json';
import Splash from '../CMSO/src/screens/SplashScreen';
import SplashScreen from 'react-native-splash-screen';


AppRegistry.registerComponent(CMSO, () => Splash);
AppRegistry.registerComponent(CMSO, () => App);
