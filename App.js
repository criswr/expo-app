import BottomTabNavigator from './src/navigation/BottomTabNavigator';
import { NavigationContainer } from "@react-navigation/native";
import ListContextProvider from "./src/components/context/ListContext";

export default function App() {
  
  return (
    <ListContextProvider>
      <NavigationContainer>
        <BottomTabNavigator />
      </NavigationContainer>
    </ListContextProvider>
  )
}