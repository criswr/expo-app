import React from "react"
import { View, StyleSheet, Text, Button, Modal as NewModal, Pressable } from "react-native"

const Modal = ({
  isVisible,
  actionDeleteItem,
  itemSelected,
  onDismissModal,
}) => {
  return (
    <NewModal animationType='slide' transparent={true} visible={isVisible} style={styles.newModal}>
      <View style={styles.modalContainer}>
        <View style={styles.modalStyle}>
            <Pressable style={styles.dismissButton} onPress={() => onDismissModal(false)}>
                <Text style={styles.dismissButtonText}>✖</Text>
            </Pressable>
          <Text style={styles.modalTextStyle}>Delete {itemSelected.value}?</Text>
          <Button title='Delete' onPress={() => {
            actionDeleteItem()
          }} />
        </View>
      </View>
    </NewModal>
  )
}

export default Modal

const styles = StyleSheet.create({
    newModal: {
        width: '100%',
    },

    modalContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        width: '100%',
    },

    modalStyle: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 10,
        paddingHorizontal: 25,
        paddingTop: 25,
        paddingBottom: 45,
        alignItems: 'center',
        width: '80%',
    },

    modalTextStyle: {
        fontSize: 25,
        marginBottom: 20,
    },

    dismissButton: {
        width: '100%',
        alignItems: 'flex-end',
    },

    dismissButtonText: {
        fontSize: 25,
    },
})