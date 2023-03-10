import { useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, Pressable } from 'react-native';
import { useFonts } from 'expo-font';
import Ionicons from '@expo/vector-icons/Ionicons'
import { useDispatch, useSelector } from 'react-redux';

import colors from '../constants/colors';
import { loadNotes, selectedNote } from '../store/actions/notes.action';


const Notes = ({navigation}) => {
  const notes = useSelector((state) => state.notes.notes)
  const dispatch = useDispatch()
  
  const truncate = (str) => (str.length > 20) ? str.slice(0, 19) + '...' : str

  useEffect(() => {
    dispatch(loadNotes())
  }, [])

  const [loaded] = useFonts({
    RobotoRegular: require("../assets/fonts/Roboto-Regular.ttf"),
    RobotoBold: require("../assets/fonts/Roboto-Bold.ttf"),
  })

  if (!loaded) return null

  const handleOnEdit = (value) => {
    dispatch(selectedNote(value))
  }
  
  const renderListItem = ({item}) => {
    return (
      <Pressable style={styles.listItem} onPress={() => {
        handleOnEdit(item.value)
        navigation.navigate('Note')}}>
        <View style={styles.listItemTextContainer}>
          <Text style={styles.listItemText}>{truncate(item.value)}</Text>
          <Text style={styles.listItemDetails}>{item.timestamp}</Text>
          {item.location &&
            <Text style={styles.listItemDetails}>At {item.location.lat}, {item.location.lng}</Text>
          }
        </View>
        <Ionicons name='chevron-forward-outline' size={20} color='white' />
      </Pressable>
    )
  }

  return (
    <View style={styles.container}>      
      <View style={styles.listContainer}>
        <FlatList
          data={notes}
          renderItem={renderListItem}
          inverted={true}
        />
      </View>

    </View>
  );
}

export default Notes;

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
    flexDirection: 'column',
  },

  listItemText: {
    color:'#ebebeb',
    fontSize: 20,
  },

  listItemDetails: {
    color: colors.deactivated
  }
});
