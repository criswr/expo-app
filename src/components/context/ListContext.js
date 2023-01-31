import React, {createContext, View, useState} from "react";
import { StyleSheet, Pressable, Text } from "react-native";
import colors from "../../constants/colors";

export const ListContext = createContext();


const ListContextProvider = ({children}) => {
    const [list, setList] = useState([])
    const [itemText, setItemText] = useState('')
    const [itemSelected, setItemSelected] = useState('')

      const getCurrentDate = (separator='-') => {
        let newDate = new Date()
        let date = newDate.getDate();
        let month = newDate.getMonth() + 1;
        let year = newDate.getFullYear();
        
        return `${date}${separator}${month<10?`0${month}`:`${month}`}${separator}${year}`
      }
    
      const addItem = () => {
        console.log(itemText)
        itemText !== '' && setList(prevState => [...prevState, {value: itemText, completed: false, timestamp: getCurrentDate()}])
        setItemText('')
      }
    
      const handleOnChangeItem = text => {
        setItemText(text)
      }
    
      const handleCheck = item => {
        const listCopy = [...list]
        const itemIndex = listCopy.findIndex((obj => obj.value == item.value))
        listCopy[itemIndex].completed ? listCopy[itemIndex].completed = false : listCopy[itemIndex].completed = true
        setList(listCopy)
      }
    
      const handleOnDelete = item => {
        setList(prevState => prevState.filter(element => element.value !== item.value))
        setItemSelected('')
      }
    
      const handleOnEdit = item => {
        setItemSelected(item)
      }
    return (
        <ListContext.Provider value={{list, itemText, itemSelected, addItem, handleOnChangeItem, handleCheck, handleOnDelete, handleOnEdit}}>
            {children}
        </ListContext.Provider>
    )
}

export default ListContextProvider;


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
  