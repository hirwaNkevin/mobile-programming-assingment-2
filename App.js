import { NavigationContainer } from "@react-navigation/native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import HomeScreen from "./screens/HomeScreen";
import CalculatorScreen from "./screens/CalculatorScreen";
import AboutScreen from "./screens/AboutScreen";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Image, StyleSheet, View, Text, TextInput, Button } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

// Import your custom icons
import homeIcon from "./assets/home_icon.svg";
import calculatorIcon from "./assets/calculator_icon.svg";
import aboutIcon from "./assets/about_icon.svg";
import { ThemeProvider } from "./components/ThemeProvider";
import HomeScreenTabedComponent from "./screens/HomeScreen";
import { StatusBar } from "expo-status-bar";

const Tab = createMaterialBottomTabNavigator();
const Drawer = createDrawerNavigator();

export default function App() {
  let authenticated = false;
  return authenticated === true ? (
    <NavigationContainer>
      <ThemeProvider>
        <Drawer.Navigator>
          <Drawer.Screen
            name="Home"
            component={HomeScreenTabedComponent}
            style={{ backgroundColor: "#222" }}
          ></Drawer.Screen>
          <Drawer.Screen
            name="Calculator"
            component={CalculatorScreenTabedComponent}
          ></Drawer.Screen>
          <Drawer.Screen
            name="About"
            component={AboutScreenTabedComponent}
          ></Drawer.Screen>
        </Drawer.Navigator>
      </ThemeProvider>
    </NavigationContainer>
  ) : (
    <AuthLoginScreen />
  );
}

function AuthLoginScreen() {
  return (
    <View
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
      }}
    >
      <View
        style={{
          borderColor: "#00c",
          borderWidth: 1,
          borderRadius: 20,
          shadowColor: "#001",
          shadowOffset: 4,
          shadowOpacity: "100%",
          shadowRadius: 40,
          width: "75%",
          height: "70%",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <View
          style={{
            padding: 5,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
            height: "75%",
          }}
        >
          <Text
            style={{ textAlign: "center", fontWeight: "bold", fontSize: 30 }}
          >
            Login
          </Text>
          <TextInput
            placeholder="Username or email"
            style={styles.inputField}
          ></TextInput>
          <TextInput
            placeholder="Password"
            secureTextEntry={true}
            style={styles.inputField}
          ></TextInput>
          <Button title="Login" style={{ width: "100%" }} />
          <View>
            <Text>
              Don't have an account?{" "}
              <Text style={{ color: "blue", textDecorationLine: "underline" }}>
                Sign Up
              </Text>
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const CalculatorScreenTabedComponent = () => {
  return (
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
      initialRouteName="Calculator"
      initialTabIndex={1}
    >
      <Tab.Screen name="Home" component={HomeScreen}></Tab.Screen>
      <Tab.Screen name="Calculator" component={CalculatorScreen}></Tab.Screen>
      <Tab.Screen name="About" component={AboutScreen}></Tab.Screen>
    </Tab.Navigator>
  );
};
const AboutScreenTabedComponent = () => {
  return (
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
      initialRouteName="About"
      initialTabIndex={2}
    >
      <Tab.Screen name="Home" component={HomeScreen}></Tab.Screen>
      <Tab.Screen name="Calculator" component={CalculatorScreen}></Tab.Screen>
      <Tab.Screen name="About" component={AboutScreen}></Tab.Screen>
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  inputField: {
    backgroundColor: "#aaa",
    color: "#fff",
    padding: 5,
    fontSize: 13,
  },
});
