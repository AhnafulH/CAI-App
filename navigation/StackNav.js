import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import FleetScreen from '../screens/FleetScreen';
import AddFleetScreen from '../screens/AddFleetScreen';
import BottomTab from './BottomTab';
import EquipmentScreen from '../screens/EquipmentScreen';
import EventScreen from '../screens/EventScreen';

const Stack = createStackNavigator();


export const StackNav = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen name='Home' component={BottomTab} 
            options={{ headerShown: false }}
        />
        <Stack.Screen name='Add Fleet' component={AddFleetScreen} />
    </Stack.Navigator>
  );
}
/*
export const EquipmentStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Equipment" component={EquipmentScreen} options={{ headerShown: false }}/>
    </Stack.Navigator>

  );
}
export const EventStackNavigator = () => {
  return(
    <Stack.Navigator >
      <Stack.Screen name="Event" component={EventScreen} options={{ headerShown: false }}/>
    </Stack.Navigator>
  )
}*/

//export default { StackNav, EquipmentStackNavigator, EventStackNavigator}
export default StackNav;