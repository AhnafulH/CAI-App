import { SafeAreaView, Text, FlatList, scr, View, StyleSheet } from 'react-native'
import React from 'react'
import FleetBtn from '../components/FleetBtn'
import FloatingBar from '../components/FloatingBar'
import AddFleetScreen from './AddFleetScreen'
import { useNavigation } from '@react-navigation/native'
const FleetScreen = () => {
  const navigation = useNavigation();

  const handleFloatingBarPress = () => {
    navigation.navigate("AddFleetScreen");
  }
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <FleetBtn/>
        <FleetBtn/>
        <FleetBtn/>
      </View>
      <FloatingBar/>
      
      
    </SafeAreaView>
      
    
  )
}

export default FleetScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,    /* By adding flex: 1 to the SafeAreaView in the FleetScreen component, you have instructed it to expand and fill the available vertical space within its parent container. This allows the content inside the SafeAreaView to occupy the available space and pushes the floating action bar (FAB) to the bottom.

                When you didn't have flex: 1 on the SafeAreaView, it might not have been taking up the full available space, which could have affected the positioning of the FAB. By adding flex: 1, you ensure that the SafeAreaView expands to fill the entire screen vertically, and the FAB, being positioned absolutely, is then correctly placed at the bottom right corner of the screen.*/
  }

})