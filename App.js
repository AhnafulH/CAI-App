//import { StatusBar } from 'expo-status-bar';
import 'react-native-gesture-handler';
import { StyleSheet, Text, SafeAreaView, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import BottomTab from './navigation/BottomTab';
import StackNav from './navigation/StackNav';
import React, { useState, useEffect } from "react";
import SplashScreen from './screens/SplashScreen';
import { SafeAreaProvider } from 'react-native-safe-area-context';


export default function App() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowSplash(false);
    }, 2000); // Adjust the duration (in milliseconds) as per your requirement
  }, []);

  if (showSplash) {
    return <SplashScreen />;
  }
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