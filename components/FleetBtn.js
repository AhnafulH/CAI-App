import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';


const FleetBtn = ({text, onPress}) => {
  const navigation = useNavigation();
  const handlePress = () => {
    navigation.navigate('Fleet Detail', { fleetItem: text });
  };
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
        <View style={styles.box}>
            <Text style={styles.text}> {text}</Text>
        </View>
    </TouchableOpacity>
    
  )
}

export default FleetBtn

const styles = StyleSheet.create({
    container: {
      width: '100%',
      height: 130,
      alignSelf: 'center',
      padding: 10,
    },
    box: {
      flex: 1,
      backgroundColor: '#DDDDDD',
      justifyContent: 'flex-start',
      alignItems: 'flex start',
      borderRadius: '20',
      padding: 10
    },
    text: {
      color: 'black',
      fontSize: 20,
      fontWeight: 'bold',
    },
  });
  