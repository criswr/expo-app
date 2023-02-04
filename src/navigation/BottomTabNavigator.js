import { StyleSheet, View, Text } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Ionicons from '@expo/vector-icons/Ionicons'
import ItemNavigator from './ItemNavigator'
import Notes from '../components/Notes'

const BottomTabs = createBottomTabNavigator()

const BottomTabNavigator = () => {
  return (
    <BottomTabs.Navigator
    initialRouteName='ShopTab'
    screenOptions={{
      headerShown: false,
      tabBarShowLabel: false,
      tabBarStyle: styles.tabBar,
    }}
  >
    <BottomTabs.Screen
      name='ShopTab'
      component={ItemNavigator}
      options={{
        tabBarIcon: () => (
          <View style={styles.icon}>
            <Ionicons name='list-outline' size={15} color='black' />
            <Text>List</Text>
          </View>
        ),
      }}
    />
    <BottomTabs.Screen
      name='CartTab'
      component={Notes}
      options={{
        tabBarIcon: () => (
          <View style={styles.icon}>
            <Ionicons name='pencil-outline' size={15} color='black' />
            <Text>Notes</Text>
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
  },
  icon: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})