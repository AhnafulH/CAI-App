import { SafeAreaView, Text, FlatList, scr, View, StyleSheet, TouchableOpacity } from 'react-native'
import React, {useState} from 'react'
import FleetBtn from '../components/FleetBtn'
import FloatingBar from '../components/FloatingBar'
import AddFleetScreen from './AddFleetScreen'
import { useNavigation } from '@react-navigation/native'
import { useRoute } from '@react-navigation/native';
//import { Item } from 'react-native-paper/lib/typescript/src/components/Drawer/Drawer'

const FleetScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const [fleetNames, setFleetNames] = useState([]);
  const handleAddFleet = () => {
    navigation.navigate("Add Fleet", {setFleetNames});
    /*navigation.setOptions({ setFleetNames });
    navigation.navigate('Add Fleet');*/

  };

  const handleFleetPress = (fleetName) => {
    navigation.navigate("Fleet Detail");
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        {
          fleetNames.map((item, index) => {
            return <FleetBtn key={index} text={item} onPress={handleFleetPress}/>
          })
        }
        <FleetBtn text={"Ahnaful"} onPress={handleFleetPress}/>
      </View>
      <FloatingBar onPress={handleAddFleet}/>    
      
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