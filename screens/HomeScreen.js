import {useContext} from "react"
import { Image, StyleSheet, Text, View } from "react-native";
import image from "../assets/Kevin Hirwa Nzitatira.jpeg";
const HomeScreen = () => {
  return (
    <View
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        height: "fit-content",
      }}
    >
      <View>
        <Text style={{ fontSize: 30, fontWeight: "bold", textAlign: "left" }}>
          Home
        </Text>
      </View>
      <View style={[styles.profileSection]}>
        <Image
          style={[styles.rounded, styles.profileImage]}
          source={image}
        ></Image>
        <Text
          style={{ textAlign: "center", fontSize: 18, fontWeight: "bolder" }}
        >
          Hello World, Welcome to my mobile app.
        </Text>
      </View>
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

export default HomeScreen;
