import { View, TextInput, Button, StyleSheet, Text } from "react-native";

export default CalculatorScreen = () => {
  const handleNumberButtonClick = (symbol) => {};
  return (
    <View>
      <InputDisplayComponent />
      <OutputDisplayComponent />
      <KeyBoard />
    </View>
  );
};

const InputDisplayComponent = () => {
  return <TextInput placeholder="0" />;
};

const OutputDisplayComponent = () => {
  return (
    <View style={{ backgroundColor: "#aaa" }}>
      <Text style={{ color: "#555" }}>0</Text>
    </View>
  );
};

const KeyBoard = ({ handleNumberButtonClick }) => {
  return (
    <View>
      <View style={[styles.KeyBoardRow]}>
        <KeyBoardKey symbol={"C"} onPressAction={() => {}} type={1} />
        <KeyBoardKey symbol={"Del"} onPressAction={() => {}} type={1} />
      </View>
      <View style={[styles.KeyBoardRow]}>
        <KeyBoardKey
          symbol={"1"}
          onPressAction={() => {
            handleNumberButtonClick();
          }}
          type={0}
        />
        <KeyBoardKey
          symbol={"2"}
          onPressAction={() => {
            handleNumberButtonClick();
          }}
          type={0}
        />
        <KeyBoardKey
          symbol={"3"}
          onPressAction={() => {
            handleNumberButtonClick();
          }}
          type={0}
        />
        <KeyBoardKey symbol={"+"} onPressAction={() => {}} type={1} />
      </View>
      <View style={[styles.KeyBoardRow]}>
        <KeyBoardKey
          symbol={"4"}
          onPressAction={() => {
            handleNumberButtonClick();
          }}
          type={0}
        />
        <KeyBoardKey
          symbol={"5"}
          onPressAction={() => {
            handleNumberButtonClick();
          }}
          type={0}
        />
        <KeyBoardKey
          symbol={"6"}
          onPressAction={() => {
            handleNumberButtonClick();
          }}
          type={0}
        />
        <KeyBoardKey symbol={"-"} onPressAction={() => {}} type={1} />
      </View>
      <View style={[styles.KeyBoardRow]}>
        <KeyBoardKey
          symbol={"7"}
          onPressAction={() => {
            handleNumberButtonClick();
          }}
          type={0}
        />
        <KeyBoardKey
          symbol={"8"}
          onPressAction={() => {
            handleNumberButtonClick();
          }}
          type={0}
        />
        <KeyBoardKey
          symbol={"9"}
          onPressAction={() => {
            handleNumberButtonClick();
          }}
          type={0}
        />
        <KeyBoardKey symbol={"*"} onPressAction={() => {}} type={1} />
      </View>
      <View style={[styles.KeyBoardRow]}>
        <KeyBoardKey
          symbol={"0"}
          onPressAction={() => {
            handleNumberButtonClick();
          }}
          type={0}
        />
        <KeyBoardKey symbol={"+"} onPressAction={() => {}} type={1} />
      </View>
    </View>
  );
};

const KeyBoardKey = ({ symbol, onPressAction, type }) => {
  return (
    <Button
      title={symbol}
      onPress={onPressAction}
      color={!type ? "#ddd" : "#001"}
      accessibilityLabel={symbol + " Key"}
    />
  );
};

const styles = StyleSheet.create({
  KeyBoardRow: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
