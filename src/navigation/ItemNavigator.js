import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ListContextProvider from "../components/context/ListContext";
import Edit from "../components/Edit";
import ToDoList from "../components/ToDoList";

const Stack = createNativeStackNavigator()

export default ItemNavigator = () => {
    return (
        <ListContextProvider>
            <NavigationContainer>
                <Stack.Navigator initialRouteName='List'>
                    <Stack.Screen name='List' component={ToDoList}/>
                    <Stack.Screen name='Edit' component={Edit}/>
                </Stack.Navigator>
            </NavigationContainer>
        </ListContextProvider>
    )
}