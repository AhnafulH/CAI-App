import { View, Text } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FleetScreen from '../screens/FleetScreen';
import EquipmentScreen from '../screens/EquipmentScreen';
import EventScreen from '../screens/EventScreen';
import StackNav from './StackNav';
const Tab = createBottomTabNavigator()
const BottomTab = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name='Fleet' component={StackNav}/> 
      <Tab.Screen name='Equipment' component={EquipmentScreen}/> 
      <Tab.Screen name='Event' component={EventScreen}/> 
    </Tab.Navigator>
  );
}

export default BottomTab