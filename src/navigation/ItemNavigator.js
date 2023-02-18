import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Notes from "../screens/Notes";
import colors from "../constants/colors";
import Note from "../screens/Note";
import { useSelector } from "react-redux";

const Stack = createNativeStackNavigator()

export default ItemNavigator = () => {
    const note = useSelector(state => state.notes.selected)
    const truncate = (str) => (str.length > 20) ? str.slice(0, 19) + '...' : str

    return (
        <Stack.Navigator initialRouteName='Notes'>
            <Stack.Screen name='List' component={Notes} options={{
                title: 'Notes',
                headerTitleStyle: {
                    color: colors.primary
                },
                headerStyle: {
                    backgroundColor: colors.background,
                },
            }}/>
            <Stack.Screen name='Note' component={Note} options={{
                title: note ? truncate(note.value) : 'Note',
                headerTitleStyle: {
                    color: colors.primary
                },
                headerTintColor: colors.primary,
                headerStyle: {
                    backgroundColor: colors.background,
                },
            }}/>
        </Stack.Navigator>
    )
}