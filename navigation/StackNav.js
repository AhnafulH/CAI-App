import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import FleetScreen from '../screens/FleetScreen';
import AddFleetScreen from '../screens/AddFleetScreen';
import BottomTab from './BottomTab';

const Stack = createStackNavigator();


const StackNav = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen name='Fleet' component={FleetScreen} 
            options={{ headerShown: false }}
        />
        <Stack.Screen name='Add Fleet' component={AddFleetScreen} options={{ title: 'Add Fleet', headerBackTitle: '' }}/>
    </Stack.Navigator>
  )
}

export default StackNav