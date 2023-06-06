import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import BottomTab from './BottomTab';
import FleetDetailScreen from '../screens/FleetDetailScreen';
import { useRoute } from '@react-navigation/native';


const Stack = createStackNavigator();

const FleetDetailStack = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen name='Fleet' component={BottomTab} 
            options={{ headerShown: false }}
        />
        <Stack.Screen name="Fleet Detail" component={FleetDetailScreen} 
            options={({ route }) => ({
                title: route.params.fleetItem,})}/>
    </Stack.Navigator>
  )
}

export default FleetDetailStack