import React, { useContext, useState } from "react";
import {
  View,
  TextInput,
  Button,
  Text,
  Pressable,
  StyleSheet,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { ThemeProvider } from "../components/ThemeProvider";
import ThemeContext from "../components/ThemeProvider";

export default ContactsScreen = () => {
  const { theme, updateTheme } = useContext(ThemeContext);
  return (
    <View style={{ backgroundColor: theme.background }}>
      <Text>Contacts!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  KeyBoardRow: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "right",
    gap: "30px",
  },
});
