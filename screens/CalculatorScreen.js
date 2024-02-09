import { View, Text, TextInput, Button } from "react-native";

export default CalculatorScreen = () => {
  return (
    <View>
      <DisplayComponent />
      <KeyBoard />
    </View>
  );
};

const DisplayComponent = () => {
  return <TextInput placeholder="0" />;
};

const KeyBoard = () => {
  return (
    <View>
      <View style={[styles.KeyBoardRow]}>
        <KeyBoardKey symbol={"C"} onPressAction={() => {}} type={1} />
        <KeyBoardKey symbol={"Del"} onPressAction={() => {}} type={1} />
      </View>
      <View style={[styles.KeyBoardRow]}>
        <KeyBoardKey symbol={"1"} onPressAction={() => {}} type={0} />
        <KeyBoardKey symbol={"2"} onPressAction={() => {}} type={0} />
        <KeyBoardKey symbol={"3"} onPressAction={() => {}} type={0} />
        <KeyBoardKey symbol={"+"} onPressAction={() => {}} type={1} />
      </View>
      <View style={[styles.KeyBoardRow]}>
        <KeyBoardKey symbol={"4"} onPressAction={() => {}} type={0} />
        <KeyBoardKey symbol={"5"} onPressAction={() => {}} type={0} />
        <KeyBoardKey symbol={"6"} onPressAction={() => {}} type={0} />
        <KeyBoardKey symbol={"-"} onPressAction={() => {}} type={1} />
      </View>
      <View style={[styles.KeyBoardRow]}>
        <KeyBoardKey symbol={"7"} onPressAction={() => {}} type={0} />
        <KeyBoardKey symbol={"8"} onPressAction={() => {}} type={0} />
        <KeyBoardKey symbol={"9"} onPressAction={() => {}} type={0} />
        <KeyBoardKey symbol={"*"} onPressAction={() => {}} type={1} />
      </View>
      <View style={[styles.KeyBoardRow]}>
        <KeyBoardKey symbol={"0"} onPressAction={() => {}} type={0} />
        <KeyBoardKey symbol={"+"} onPressAction={() => {}} type={1} />
      </View>
    </View>
  );
};

const KeyBoardKey = ({ symbol, onPressAction, type }) => {
  <Button
    title={symbol}
    onPress={onPressAction}
    color={!type ? "#f2f2f2" : "#001"}
    accessibilityLabel={symbol + " Key"}
  />;
};

const styles = StyleSheet.create({
  KeyBoardRow: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
