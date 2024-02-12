import { View, Text, StyleSheet } from "react-native";

export default AboutScreen = () => {
  return (
    <View>
      <Text sytle={styles.AboutTile}>About Screen</Text>
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
