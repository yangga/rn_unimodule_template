/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

import {AppLoading, Constants} from 'expo';
import Localize from 'localize';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  state = {
    isLoadingComplete: false,
  };

  render() {
    return (
      <AppLoading
        startAsync={this._load}
        onError={this._handleLoadingError}
        onFinish={this._handleFinishLoading}
      />
    );
  }

  renderContent = () => (
    <View style={styles.container}>
        <Text style={styles.welcome}>{Localize.t('hello')}</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Text style={styles.instructions}>{instructions}</Text>
        <Text style={styles.instructions}>{Constants.deviceName}</Text>
      </View>
  )

  _load = async () => {
    await Localize.initAsync();
  }

  _handleLoadingError = error => {
    // In this case, you might want to report the error to your error
    // reporting service, for example Sentry    
    if (__DEV__){
      console.error('@ _handleLoadingError', error);
    }
    else {
      console.error('@ _handleLoadingError', error);
    }
  };

  _handleFinishLoading = () => {
    this.render = this.renderContent;
    this.setState({ isLoadingComplete: true });
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
