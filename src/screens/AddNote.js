import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import colors from '../constants/colors'
import { useDispatch, useSelector } from 'react-redux'

const AddNote = ({navigation}) => {
  return (
    <View style={styles.container}>
        <View style={styles.titleContainer}>
            <Text style={styles.titleText}>Add note</Text>
        </View>
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
      },
    
      titleText: {
        color: colors.primary,
        fontFamily: 'RobotoRegular',
        fontSize: 20,
      },
})