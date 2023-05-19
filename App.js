//import { StatusBar } from 'expo-status-bar';
import 'react-native-gesture-handler';
import { StyleSheet, Text, SafeAreaView, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import BottomTab from './navigation/BottomTab';
import StackNav from './navigation/StackNav';


export default function App() {
  return (
      <NavigationContainer>
        <BottomTab/>
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