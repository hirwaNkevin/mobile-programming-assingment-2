import React, { useContext, useEffect } from "react";
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
import * as Contacts from "expo-contacts";

export default ContactsScreen = () => {
  let contactsList;
  useEffect(() => {
    console.log("loading...");
    loadContacts();
    console.log("finished");
  }, []);

  const loadContacts = async () => {
    const { status } = await Contacts.requestPermissionsAsync();
    if (status === "granted") {
      const { data } = await Contacts.getContactsAsync();

      if (data.length > 0) {
        contactsList = data;
      }
    }
    return contactsList;
  };

  const { theme, updateTheme } = useContext(ThemeContext);
  return (
    <View style={{ backgroundColor: theme.background, height: "100%" }}>
      <Text style={{ color: theme.text }}>Contacts</Text>
      <Text style={{ color: theme.text }}>{contactsList}</Text>
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
