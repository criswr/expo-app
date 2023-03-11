import { Alert, Pressable, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons'
import React, { useLayoutEffect, useState } from 'react'
import colors from '../constants/colors'
import { useDispatch, useSelector } from 'react-redux'
import { deletedNote, editedNote } from '../store/actions/notes.action'
import SaveButton from '../components/SaveButton'
import ReverseGeocoding from '../components/ReverseGeocoding'

const Note = ({navigation}) => {
  const dispatch = useDispatch()

  const note = useSelector(state => state.notes.selected)

  const [editedValue, setEditedValue] = useState(note.value)
  const [editedLocation, setEditedLocation] = useState(note.location)

  const handleOnEdit = () => {
    dispatch(editedNote(editedValue, editedLocation, note.value))
    setEditedValue(note.value)
    navigation.goBack()
  }

  const handleOnDelete = () => {
    return (
      Alert.alert(
        'Delete this note?',
        'This action can not be reversed.',
        [
          {
            text: 'Delete',
            onPress: () => {
              dispatch(deletedNote(note.value))
              navigation.goBack()
            }
          },
          {
            text: 'Cancel'
          }
        ]
      )
    )
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        note.value !== editedValue &&
        <TouchableOpacity onPress={() => handleOnEdit()}>
          <SaveButton />
        </TouchableOpacity>
      )
    })
  }, [editedValue])

  return (
    <View style={styles.container}>
          <Text style={styles.listItemDetails}>{note.timestamp}</Text>

          {note.location &&
            <Text style={styles.listItemDetails}>At <ReverseGeocoding locationData={note.location} /></Text>
          }

        <TextInput style={styles.textInputNote}
          multiline={true}
          onChangeText={(text) => setEditedValue(text)}
          value={editedValue}
        />
        <Pressable style={styles.deleteButton} onPress={() => {handleOnDelete()}}>
          <Ionicons name='trash-outline' size={15} color={colors.highlighted} />
          <Text style={styles.deleteText}>Delete note</Text>
        </Pressable>
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
  },

  deleteButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  
  deleteText: {
    color: colors.highlighted,
    marginLeft: 5,
    marginVertical: 10
  }
})