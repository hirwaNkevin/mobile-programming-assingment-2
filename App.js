import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import HomeScreen from "./screens/HomeScreen";
import CalculatorScreen from "./screens/CalculatorScreen";
import AboutScreen from "./screens/AboutScreen";
import { createDrawerNavigator } from "@react-navigation/drawer";

const Tab = createMaterialBottomTabNavigator();
const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen}></Tab.Screen>
        <Tab.Screen name="Calculator" component={CalculatorScreen}></Tab.Screen>
        <Tab.Screen name="About" component={AboutScreen}></Tab.Screen>
      </Tab.Navigator>
      {/* <NavigationContainer>
        <Drawer.Navigator>
          <Drawer.Screen name="Home" component={HomeScreen}></Drawer.Screen>
          <Drawer.Screen
            name="Calculator"
            component={CalculatorScreen}
          ></Drawer.Screen>
          <Drawer.Screen name="About" component={AboutScreen}></Drawer.Screen>
        </Drawer.Navigator>
      </NavigationContainer> */}
    </NavigationContainer>
  );
}
