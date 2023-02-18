import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Edit from "../components/Edit";
import colors from "../constants/colors";
import Notes from "../screens/Notes";

const Stack = createNativeStackNavigator()

export default ItemNavigator = () => {
    return (
        <Stack.Navigator initialRouteName='Notes'>
            <Stack.Screen name='List' component={Notes} options={{
                title: 'Notes',
                headerTitleStyle: {
                    color: '#fff'
                },
                headerStyle: {
                    backgroundColor: colors.background,
                },
            }}/>
            <Stack.Screen name='Edit' component={Edit}/>
        </Stack.Navigator>
    )
}