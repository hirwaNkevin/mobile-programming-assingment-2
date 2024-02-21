import { View, Text, StyleSheet } from "react-native";
import { ThemeProvider } from "../components/ThemeProvider";
import ThemeContext from "../components/ThemeProvider";
import { useContext } from "react";

export default AboutScreen = () => {
  const { theme, updateTheme } = useContext(ThemeContext);
  return (
    <View style={{ backgroundColor: theme.background, height: "100%" }}>
      <Text style={{ color: theme.text }}>About Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  AboutTile: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
  },
});
