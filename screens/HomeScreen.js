import { useContext } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import image from "../assets/Kevin Hirwa Nzitatira.jpeg";
import ThemeContext from "../components/ThemeProvider";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import CalculatorScreen from "./CalculatorScreen";
import AboutScreen from "./AboutScreen";

// Import your custom icons
import homeIcon from "../assets/home_icon.svg";
import calculatorIcon from "../assets/calculator_icon.svg";
import aboutIcon from "../assets/about_icon.svg";

const Tab = createMaterialBottomTabNavigator();

const HomeScreenTabedComponent = () => {
  const { theme, updateTheme } = useContext(ThemeContext);
  return (
    <Tab.Navigator
      tabBarOptions={{
        showIcon: true,
        showLabel: true,
        style: { backgroundColor: theme.background },
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
            <Image
              source={iconSource}
              style={{ width: 25, height: 25, color: theme.text }}
            />
          );
        },
      })}
      initialRouteName="Home"
      initialTabIndex={0}
    >
      <Tab.Screen name="Home" component={HomeScreen}></Tab.Screen>
      <Tab.Screen name="Calculator" component={CalculatorScreen}></Tab.Screen>
      <Tab.Screen name="About" component={AboutScreen}></Tab.Screen>
    </Tab.Navigator>
  );
};

const HomeScreen = () => {
  const { theme, updateTheme } = useContext(ThemeContext);
  return (
    <View
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        height: "fit-content",
        backgroundColor: theme.background,
        color: theme.text,
      }}
    >
      <View
        style={[styles.profileSection, { backgroundColor: theme.background }]}
      >
        <Image
          style={[styles.rounded, styles.profileImage]}
          source={image}
        ></Image>
      </View>
      <Text
        style={{
          textAlign: "center",
          fontSize: 18,
          fontWeight: "bolder",
          backgroundColor: theme.background,
          color: theme.text,
        }}
      >
        Hello World, Welcome to my mobile app.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  rounded: {
    borderRadius: "50%",
  },
  profileImage: {
    maxWidth: "100%",
    maxHeight: "100%",
  },
  profileSection: {
    width: 150,
    height: 150,
    margin: "auto",
    marginTop: 100,
  },
});

export default HomeScreenTabedComponent;
