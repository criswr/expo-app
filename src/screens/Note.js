import { Pressable, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons'
import React, { useLayoutEffect, useState } from 'react'
import colors from '../constants/colors'
import { useDispatch, useSelector } from 'react-redux'
import { editedNote } from '../store/actions/notes.action'

const Note = ({navigation}) => {
  const dispatch = useDispatch()

  const note = useSelector(state => state.notes.selected)

  const [editedValue, setEditedValue] = useState(note.value)
  const [editedLocation, setEditedLocation] = useState(note.location)

  const handleOnEdit = () => {
    dispatch(editedNote(editedValue, editedLocation))
    navigation.goBack()
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        note.value !== editedValue &&
        <TouchableOpacity onPress={() => handleOnEdit()}>
          <Text style={styles.titleSave}>Save</Text>
        </TouchableOpacity>
      )
    })
  }, [editedValue])

  return (
    <View style={styles.container}>
          <Text style={styles.listItemDetails}>{note.timestamp}</Text>

          {note.location &&
            <Text style={styles.listItemDetails}>At {note.location.lat}, {note.location.lng}</Text>
          }

        <TextInput style={styles.textInputNote}
          multiline={true}
          onChangeText={(text) => setEditedValue(text)}
          value={editedValue}
        />
    </View>
  )
}

export default Note

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#252526',
    paddingHorizontal: 30,
  },
    
  titleContainer: {
    paddingTop: 20,
  },

  titleText: {
    color: colors.primary,
    fontFamily: 'RobotoRegular',
    fontSize: 20,
  },

  listItemDetails: {
    color: colors.deactivated,
    paddingVertical: 5

  },

  textInputNote: {
    flex: 1,
    textAlignVertical: 'top',
    color: colors.secondary,
    fontSize: 20,
  },
  
  titleSave: {
    color: colors.secondary
  }
})