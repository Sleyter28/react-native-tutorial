import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import CustomTitle from '../../components/atoms/CustomTitle';

const HomeScene = ({ navigation }) => {
  const username = "sancha"
  return (
    <View>
      <Button 
        styles= {styles.buttonLogin}
        title="See my Profile"
        onPress = {() => navigation.navigate('Profile')}
      />
      <Button
        title="Go to Login"
        // pass parameter or state to another component
        onPress={() => navigation.navigate('Login', { username })}
      />
      <Text>Hello</Text>
      <CustomTitle title={"Hola"} />
  </View>);
}

const styles = StyleSheet.create({
  body: {
    backgroundColor: Colors.white,
  },
  buttonLogin: {
    width: 250,
    height: 35,
    color: Colors.primary
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
 
export default HomeScene;