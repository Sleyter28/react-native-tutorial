import React from 'react';
import { Text, View } from 'react-native';

const LoginScene = ({ route }) => {
  // The next line allows to read the parameter from the parent component
  const { username } = route.params;
  return ( 
    <>
      <View>
        {/* use the parameter */}
        <Text>From Login {username}</Text>
      </View>
    </>
   );
}
 
export default LoginScene;