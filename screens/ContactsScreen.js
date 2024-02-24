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
import { Contacts } from "react-native-contacts";

export default ContactsScreen = () => {
  let contactsList;
  useEffect(() => {
    console.log("loading...");
    loadContacts();
    console.log("finished");
  }, []);

  const loadContacts = async () => {
    try {
      // Request permission
      PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.READ_CONTACTS)
        .then((granted) => {
          if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            // Get contacts
            Contacts.getAll((err, contacts) => {
              if (err) {
                console.log(err);
                return;
              }
              console.log(contacts);
            });
          }
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (error) {
      console.log("" + error);
      contactsList = "Oops something went wrong";
    }
  };

  const { theme, updateTheme } = useContext(ThemeContext);
  return (
    <View style={{ backgroundColor: theme.background, height: "100%" }}>
      <Text style={{ color: theme.text }}>Contacts</Text>
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
