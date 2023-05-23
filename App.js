//import { StatusBar } from 'expo-status-bar';
import 'react-native-gesture-handler';
import { StyleSheet, Text, SafeAreaView, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import BottomTab from './navigation/BottomTab';
import StackNav from './navigation/StackNav';
import React from "react";


export default function App() {
  return (
      <NavigationContainer>
        <StackNav/>
      </NavigationContainer>
  
    
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