import { useContext, useState } from 'react';
import { StyleSheet, Text, View, FlatList, Pressable } from 'react-native';
import { useFonts } from 'expo-font';
import AddItem from './AddItem';
import colors from '../constants/colors';
import { ListContext } from './context/ListContext';

const ToDoList = ({navigation}) => {
  const {list, itemText, itemSelected, addItem, handleOnChangeItem, handleCheck, handleOnDelete, handleOnEdit} = useContext(ListContext)

  const [loaded] = useFonts({
    RobotoRegular: require("../assets/fonts/Roboto-Regular.ttf"),
    RobotoBold: require("../assets/fonts/Roboto-Bold.ttf"),
  })

  if (!loaded) return null
  
  const renderListItem = ({item}) => {
    return (
      <View style={styles.listItem}>
        <View style={styles.listItemTextContainer}>
          <Pressable
            onPress={() => handleCheck(item)}
          ><Text style={styles.listCheck}>{item.completed ? '◉' : '◎'}</Text></Pressable>
          <Text style={[item.completed ? styles.listItemTextCompleted : styles.listItemText]}>{item.value}</Text>
        </View>
        <Pressable onPress={() => {
          handleOnEdit(item)
          navigation.navigate('Edit')}}>
          <Text style={styles.editButtonText}>Edit</Text>
        </Pressable>
      </View>
    )
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

    </View>
  );
}

export default ToDoList;

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
    fontSize: '30',
  },

  addFirstItem: {
    fontFamily: 'RobotoBold',
    color: colors.primary,
    fontSize: 25,
    textAlign: 'center',
    marginVertical: 40,
  },

  examples: {
    color: colors.deactivated,
    fontSize: 20
  },

  listContainer: {
    paddingTop:20,
  },

  listItem: {
    borderBottomWidth:1,
    borderColor: colors.itemBorder,
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
    color: colors.deactivated,
    fontSize: 20,
  }, 
});
