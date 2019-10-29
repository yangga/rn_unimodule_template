/**
 * @format
 */

import {AppRegistry, YellowBox} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

YellowBox.ignoreWarnings(['-[RCTRootView cancelTouches]']);
console.ignoredYellowBox = ['-[RCTRootView cancelTouches]'];

AppRegistry.registerComponent(appName, () => App);
