import { View, Text } from 'react-native'
import React from 'react'
//import * as React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { FAB } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native'
import AddFleetScreen from '../screens/AddFleetScreen';
const FloatingBar = () => {
  const navigation = useNavigation()
  return (
    <View style={styles.container}>
        <FAB
        style={styles.fab}
        small
        icon="plus"
        placement="right"
        onPress={() => navigation.navigate('Add Fleet')}
        />
      
      
    </View>
    
    
    
       
    

  )
}

const styles = StyleSheet.create({
    container: {
        //flex: 1,
        //padding: 20,
        position: 'absolute',
        bottom: 16,
        right: 16,

    },

    fab: {
        
    }
})

export default FloatingBar