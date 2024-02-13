import { NavigationContainer } from "@react-navigation/native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import HomeScreen from "./screens/HomeScreen";
import CalculatorScreen from "./screens/CalculatorScreen";
import AboutScreen from "./screens/AboutScreen";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Image } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

// Import your custom icons
import homeIcon from "./assets/home_icon.svg";
import calculatorIcon from "./assets/calculator_icon.svg";
import aboutIcon from "./assets/about_icon.svg";

const Tab = createMaterialBottomTabNavigator();
const Drawer = createDrawerNavigator();

export default function App() {
  const [theme, setTheme] = useState("dark");
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{
          showIcon: true,
          showLabel: false,
          style: { backgroundColor: "white" },
          indicatorStyle: { backgroundColor: "blue" },
        }}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconSource;
            if (route.name === "Home") {
              iconSource = homeIcon;
            } else if (route.name === "Calculator") {
              iconSource = calculatorIcon;
            } else if (route.name === "About") {
              iconSource = aboutIcon;
            }
            return (
              <Image source={iconSource} style={{ width: 25, height: 25 }} />
            );
          },
        })}
      >
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
