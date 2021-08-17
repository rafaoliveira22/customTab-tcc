import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Chat() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>CHAT</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',

    backgroundColor:'#FFF'
  },

  text:{
    fontSize:32,
    textAlign:'center',
    color:'#000'
}
});