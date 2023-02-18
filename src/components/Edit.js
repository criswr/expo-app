import React, { useState } from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import Modal from './Modal';

const Edit = ({navigation}) => {

  const [modalVisble, setModalVisible] = useState(false)

  const handleModal = () => {
    setModalVisible(true)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.listItemText}>{itemSelected.value}</Text>
      <Text style={styles.listItemDate}>Added on {itemSelected.timestamp}</Text>

      <Button onPress={() => handleModal()} title={'Delete'}/>

      {itemSelected === '' && navigation.goBack()}

      <Modal
        isVisible={modalVisble}
        itemSelected={itemSelected}
        actionDeleteItem={() => handleOnDelete(itemSelected)}
        onDismissModal={setModalVisible}
      />
    </View>
  )
}

export default Edit

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#252526',
    paddingHorizontal:30,
  },

  listItemText: {
    color:'#ebebeb',
    fontSize: 30,
    marginVertical: 40,
  },

  listItemDate: {
    color:'#ebebeb',
    fontSize: 20,
    marginVertical: 20,
  },
})