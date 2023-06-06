import { View, Text } from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native';

const FleetDetailScreen = () => {
  const route = useRoute();
  return (
    <View>
      <Text>FleetDetailScreen</Text>
    </View>
  )
}

export default FleetDetailScreen