import BottomTabNavigator from './src/navigation/BottomTabNavigator';
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from 'react-redux';
import store from './src/store';
import { init } from './db';

init()
.then(() => console.log('DB init'))
.catch((err) => console.log('DB error:', err))

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <BottomTabNavigator />
      </NavigationContainer>
    </Provider>
  )
}