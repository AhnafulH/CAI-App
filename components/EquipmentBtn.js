import { StyleSheet, Text, View, TouchableOpacity, Modal, SafeAreaView } from 'react-native'
import React, { useState } from 'react'

const EquipmentBtn = ({title}) => {
    const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false);

  const handlePress = () => {
    setIsBottomSheetOpen(true);
  };

  const handleClose = () => {
    setIsBottomSheetOpen(false);
  };
  return (
    <SafeAreaView>
        <TouchableOpacity style={styles.container} onPress={handlePress}>
            <View style={styles.button}>
                <Text style={styles.buttonText}>{title}</Text>
            </View>
        </TouchableOpacity>
        <Modal
        animationType="slide"
        transparent={true}
        visible={isBottomSheetOpen}
        onRequestClose={handleClose}
      >
        <View style={styles.bottomSheet}>
          {/* Bottom sheet content goes here */}
          <Text style={styles.bottomSheetText}>This screen will contain more info about particular Equipment</Text>
          <TouchableOpacity style={styles.closeButton} onPress={handleClose}>
            <Text style={styles.closeButtonText}>Close</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </SafeAreaView>
  );
};


export default EquipmentBtn

const styles = StyleSheet.create({
    container: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5, // for Android shadow
      },
    button: {
        backgroundColor: 'white',
        paddingHorizontal: 16, // affects size of element.
        paddingVertical: 12,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        marginBottom: 5,
        marginHorizontal: 12,
        marginTop: 5,
      },
      buttonText: {
        color: 'black',
        fontSize: 22,
        fontWeight: 'bold',
      },
      bottomSheet: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16,
        padding: 20,
      },
      bottomSheetText: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 20,
      },
      closeButton: {
        backgroundColor: '#DDDDDD',
        padding: 10,
        borderRadius: 8,
      },
      closeButtonText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'black',
      },
})