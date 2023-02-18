import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import colors from '../constants/colors'

const AddNotes = () => {
  return (
    <View style={styles.container}>
        <View style={styles.titleContainer}>
            <Text style={styles.titleText}>Notes</Text>
        </View>
    </View>
  )
}

export default AddNotes

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#252526',
        paddingHorizontal:30,
      },
      
      titleContainer: {
        paddingTop: 100,
      },
    
      titleText: {
        color: colors.primary,
        fontFamily: 'RobotoRegular',
        fontWeight: 'bold',
        fontSize: 30,
      },
})