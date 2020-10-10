import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput, Button} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const CustomTitle = ({ title }) => {
  
  const [username, setUsername] = useState('');
  const [loading, setLoading] = useState(true);

  return (
    <View>
      <Text style={styles.title}>{title}</Text>
      { loading ?
        <TextInput
        style={styles.username}
        onChangeText={(username) => setUsername(username)}
        defaultValue={username}
        placeholder="Please, enter your name"
      /> :
      <Text>Nothing to show</Text>}
      
      <Button
        title="OK"
        onPress={() => {
          setLoading(!loading);
          alert(username);
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    color: Colors.dark,
    fontWeight: '800',
    fontSize: 26,
    padding: 15,
  },
  username: {
    color: Colors.primary,
    height: 50,
    width: 300,
    borderRadius: 6,
    marginLeft: 50,
    borderColor: Colors.primary,
    borderWidth: 2,
    padding: 2,
  },
});

export default CustomTitle;
