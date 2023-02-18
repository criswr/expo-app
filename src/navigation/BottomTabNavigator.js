import { StyleSheet, View, Text } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Ionicons from '@expo/vector-icons/Ionicons'
import ItemNavigator from './ItemNavigator'
import colors from '../constants/colors'
import AddNote from '../screens/AddNote'

const BottomTabs = createBottomTabNavigator()

const BottomTabNavigator = () => {
  return (
    <BottomTabs.Navigator
    initialRouteName='NotesTab'
    screenOptions={{
      headerShown: false,
      tabBarShowLabel: false,
      tabBarStyle: styles.tabBar,
    }}
  >
    <BottomTabs.Screen
      name='NotesTab'
      component={ItemNavigator}
      options={{
        tabBarIcon: () => (
          <View style={styles.icon}>
            <Ionicons name='list-outline' size={30} color='white' />
          </View>
        ),
      }}
    />
    <BottomTabs.Screen
      name='AddTab'
      component={AddNote}
      options={{
        tabBarIcon: () => (
          <View style={styles.icon}>
            <Ionicons name='add-circle-outline' size={30} color='white' />
          </View>
        ),
      }}
    />
  </BottomTabs.Navigator>
  )
}

export default BottomTabNavigator

const styles = StyleSheet.create({
  tabBar: {
    height: 70,
    backgroundColor: colors.background
  },
  icon: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})