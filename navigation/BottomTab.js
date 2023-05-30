import { View, Text } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FleetScreen from '../screens/FleetScreen';
import EquipmentScreen from '../screens/EquipmentScreen';
import EventScreen from '../screens/EventScreen';
import Ionicons from '@expo/vector-icons/Ionicons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import colors from '../assets/colors/colors';
const Tab = createBottomTabNavigator()

const BottomTab = () => {
  return (
    <Tab.Navigator screenOptions={{
      tabBarStyle: {
        backgroundColor: '#F7C920',
      },
    }}>
      <Tab.Screen name='Fleet' component={FleetScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="layer-group" size={size} color={color} />
          ),
          
        }}/> 
      <Tab.Screen name='Equipment' component={EquipmentScreen} 
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="excavator" size={size} color={color} />
          ),
        }}/> 
      <Tab.Screen name='Event' component={EventScreen} 
        options={{
          tabBarBadge: true,
          
          tabBarIcon: ({ color, size }) => (
          <Ionicons name="ios-calendar" size={size} color={color} />
          ),
        }}/>
    </Tab.Navigator>
  );
}

export default BottomTab;