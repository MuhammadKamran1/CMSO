/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from '../CMSO/src/App/app';
import {name as appName} from './app.json';
import Splash from'../CMSO/src/screens/SplashScreen';

AppRegistry.registerComponent(appName, () => App);
