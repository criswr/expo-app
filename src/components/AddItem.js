import React from "react"
import { StyleSheet, TextInput, View, Pressable, Text } from "react-native"

const AddItem = ({ onChange, textValue, onAddItem }) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder='New item'
        style={styles.addItemInput}
        placeholderTextColor='#c9c9c9'
        onChangeText={onChange}
        value={textValue}
      />
      <Pressable
        style={styles.addButton}
        onPress={onAddItem} 
      >
        <Text style={styles.addButtonText}>ADD</Text>
      </Pressable>
    </View>
  )
}

export default AddItem

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },

  addItemInput: {
    color: 'white',
    padding: 20,
    width: "80%",
    height: 50,
    borderBottomColor: '#969696',
    borderBottomWidth: 1,
  },

  addButton: {
    backgroundColor: '#1a1a1a',
    width: '15%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center'
  },

  addButtonText: {
    color: 'white',
  },
})