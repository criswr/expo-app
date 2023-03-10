import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import colors from '../constants/colors'
import { useDispatch, useSelector } from 'react-redux'
import { addedNote } from '../store/actions/notes.action'
import LocationSelector from '../components/LocationSelector'
import SaveButton from '../components/SaveButton'

const AddNote = ({navigation}) => {
  const dispatch = useDispatch()

  const [newNote, setNewNote] = useState('')
  const [newLocation, setNewLocation] = useState(null)

  const handleOnSave = () => {
    dispatch(addedNote(newNote, newLocation))
    setNewNote('')
    setNewLocation(null)
    navigation.navigate('List')
  }

  return (
    <View style={styles.container}>
        <View style={styles.titleContainer}>
            <Text style={styles.titleText}>Add note</Text>
            {newNote !== '' &&
              <Pressable onPress={() => handleOnSave()}>
                <SaveButton />
              </Pressable>
            }
        </View>
        <LocationSelector onLocation={location => setNewLocation(location)}/>
        <TextInput style={styles.textInputNote}
          multiline={true}
          onChangeText={(text) => setNewNote(text)}
          value={newNote}
          location={newLocation}
          autoFocus={true}
        />
    </View>
  )
}

export default AddNote

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#252526',
        paddingHorizontal: 30,
      },
      
      titleContainer: {
        paddingTop: 50,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        color: colors.secondary
      },
    
      titleText: {
        color: colors.primary,
        fontFamily: 'RobotoRegular',
        fontSize: 20,
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