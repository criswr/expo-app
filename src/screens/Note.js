import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import colors from '../constants/colors'
import { useDispatch, useSelector } from 'react-redux'

const Note = ({navigation}) => {
  const note = useSelector(state => state.notes.selected)

  return (
    <View style={styles.container}>
          <Text style={styles.listItemDetails}>Added on {note.timestamp}</Text>
          {note.location &&
            <Text style={styles.listItemDetails}>At {note.location.lat}, {note.location.lng}</Text>
          }
        <ScrollView style={styles.titleContainer}>
            <Text style={styles.titleText}>{note.value}</Text>
        </ScrollView>
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

  }
})