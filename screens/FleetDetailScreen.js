import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useRoute } from '@react-navigation/native';

const FleetDetailScreen = () => {
  const route = useRoute();
  const { fleetItem } = route.params || {};

  return (
    <View style={styles.container}>
      {fleetItem ? (
        <Text style={styles.subtitle}>{fleetItem}</Text>
      ) : (
        <Text style={styles.error}>No Details found</Text>
      )}
    </View>
  );
};

export default FleetDetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    color: 'gray',
  },
  error: {
    fontSize: 18,
    color: 'red',
    textAlign: 'center',
  },
});
