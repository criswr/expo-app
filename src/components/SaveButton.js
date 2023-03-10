import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons'
import colors from '../constants/colors'

const SaveButton = () => {
  return (
    <View style={styles.saveContainer}>
      <Ionicons name='save-outline' size={15} color={colors.highlighted} />
      <Text style={styles.titleSave}>Save</Text>
    </View>
  )
}

export default SaveButton

const styles = StyleSheet.create({
    saveContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },

    titleSave: {
        color: colors.highlighted,
        marginLeft: 5,
    }
})