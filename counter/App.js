import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  const [counter,setCount] = useState(0)
  return (
    <View style={styles.container}>
      <Text>{counter}</Text>
      <Button onPress={setCount(counter+1)}>Increment</Button>
      <Button onPress={setCount(counter-1)}>Decrement</Button>
      <Button onPress={setCount(0)}>Reset</Button>
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
