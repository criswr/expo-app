import { useState } from 'react';
import { StyleSheet, Text, View, FlatList, Pressable } from 'react-native';
import AddItem from './src/components/AddItem';
import Modal from './src/components/Modal';

export default function App() {
  const [list, setList] = useState([{value: 'casa', completed: false}])
  const [itemText, setItemText] = useState('')
  const [itemSelected, setItemSelected] = useState('')
  const [modalVisble, setModalVisible] = useState(false)

  const renderListItem = ({item}) => {
    return (
      <View style={styles.listItem}>
        <View style={styles.listItemTextContainer}>
          <Pressable
            onPress={() => handleCheck(item)}
          ><Text style={styles.listCheck}>{item.completed ? '◉' : '◎'}</Text></Pressable>
          <Text style={[item.completed ? styles.listItemTextCompleted : styles.listItemText]}>{item.value}</Text>
        </View>
        <Pressable onPress={() => handleModal(item)}>
          <Text style={styles.editButtonText}>Edit</Text>
        </Pressable>
      </View>
    )
  }

  const addItem = () => {
    itemText !== '' && setList(prevState => [...prevState, {value: itemText, completed: false}])
    setItemText('')
  }

  const handleOnChangeItem = text => {
    setItemText(text)
  }

  const handleModal = item => {
    setItemSelected(item)
    setModalVisible(true)
  }

  const handleCheck = item => {
    const listCopy = [...list]
    const itemIndex = listCopy.findIndex((obj => obj.value == item.value))
    listCopy[itemIndex].completed ? listCopy[itemIndex].completed = false : listCopy[itemIndex].completed = true
    setList(listCopy)
  }

  const handleOnDelete = item => {
    setList(prevState => prevState.filter(element => element.value !== item.value))
    setModalVisible(false)
  }

  return (
    <View style={styles.container}>
      
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>Shopping List App</Text>
      </View>
      
      <View style={styles.listContainer}>
        <AddItem
          textValue={itemText}
          onAddItem={addItem}
          onChange={handleOnChangeItem}
        />

        <FlatList
          data={list}
          renderItem={renderListItem}
        />
      </View>

      <Modal
        isVisible={modalVisble}
        itemSelected={itemSelected}
        actionDeleteItem={() => handleOnDelete(itemSelected)}
        onDismissModal={setModalVisible}
      />

    </View>
  );
}

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
    color: 'white',
    fontWeight: 'bold',
    fontSize: '30',
  },

  listContainer: {
    paddingTop:20,
  },

  listItem: {
    borderBottomWidth:1,
    borderColor: '#363636',
    padding: 20,
    flexDirection: 'row',
    justifyContent:'space-between',
    alignItems: 'center',
  },

  listItemTextContainer: {
    flexDirection: 'row',
  },

  listItemText: {
    color:'#ebebeb',
    fontSize: 20,
  },

  editButtonText: {
    color: 'grey'
  },

  listCheck: {
    fontSize: 22,
    color: '#949494',
    width: 40,
  },

  listItemTextCompleted: {
    color:'#666666',
    fontSize: 20,
  }, 
});
