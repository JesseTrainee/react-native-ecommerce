import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View } from 'react-native';
import Home from './src/components/pages/home/index'

export default function App() {
  return (
    
    <View >
      <StatusBar hidden/>
      <Home/>
    </View>
  );
}
