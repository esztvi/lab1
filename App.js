import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  const buttonPress = () => {
    let textToPrint = ['this', 0, 'button', 1, 'has', 2, 'been', 3, 'pressed'];
    for (let i =0; i<textToPrint.length; i++){
      let word = textToPrint[i];
      if (typeof(word) === 'string'){
        console.log(word);
      }
    }
  }
  return (
    <View style={styles.container}>
      <Text>Hello World!</Text>
      <Button title = "press me" onPress={buttonPress}/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
