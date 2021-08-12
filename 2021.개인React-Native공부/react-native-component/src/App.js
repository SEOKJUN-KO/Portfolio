import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import MyButton from './component/MyButton';
import Counter from './component/Counter';
import EventButton from './component/EventButton';
import EventInput from './component/EventInput';

export default function App() {
  const name = "SEOKJUN"
  return (
    <View style={styles.container}>
      {name === 'SEOKJUN' && 
        <Text style={styles.text}>My name is SEOKJUN</Text>
      }
      {name !== 'SEOKJUN' && 
        <Text style={styles.text}>My name is not SEOKJUN</Text>
      }
      <MyButton title="props.title in MyButton1" onPress={()=> alert('props')}></MyButton>
      <MyButton title="props.title in MyButton2" onPress={()=> alert('children')}>Children Props1</MyButton>
      <MyButton onPress={()=> alert('default')}/>
      <Counter/>
      <EventButton></EventButton>
      <EventInput></EventInput>
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
  text: {
    fontSize: 20,
  },
});
