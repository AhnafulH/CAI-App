import React, { useState } from 'react';
import { KeyboardAvoidingView, View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

const AddFleetScreen = () => {
  const [fleetName, setFleetName] = useState();
  const navigation = useNavigation();
  const route = useRoute();
  const { setFleetNames } = route.params;

  const handleAddFleet = () => {
    setFleetNames((prevFleetNames) => [...prevFleetNames, fleetName]);
    navigation.navigate('Fleet');
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <TextInput
        style={styles.input}
        placeholder="Enter fleet name"
        value={fleetName}
        onChangeText={(text) => setFleetName(text)}
      />
      <TouchableOpacity style={styles.button} onPress={handleAddFleet}>
        <Text style={styles.buttonText}>Create Fleet</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: '80%',
    height: 40,
    borderRadius: 8,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#F5CA48',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 8,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default AddFleetScreen;
