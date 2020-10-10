/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Fragment} from 'react';
import { SafeAreaView, StyleSheet, Text, StatusBar } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {CustomTitle} from '_atoms';
import HomeScene from '../scenes/home/index';
import ProfileScene from '../scenes/profiles/index';
import LoginScene from '../scenes/login/index';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScene} options={{ title: 'Home' }} />
        <Stack.Screen name="Profile" component={ProfileScene} options={{ title: 'Profile' }} />
        <Stack.Screen name="Login" component={LoginScene} options={{title: 'Login'}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    padding: 20,
    fontSize: 24,
    fontWeight: '600',
    color: Colors.primary,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
