import React, { useState } from "react";
import {
  View,
  TextInput,
  Button,
  StyleSheet,
  Text,
  Pressable,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export default CalculatorScreen = () => {
  const [display, setDisplay] = useState("0");
  const handleNumberButtonClick = (symbol) => {
    setDisplay(display + symbol);
  };
  return (
    <View>
      <Text style={{ fontWeight: "bold", fontSize: "20px" }}>Calculator</Text>
      <View
        style={{
          marginTop: "20px",
          marginBottom: "20px",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <InputDisplayComponent />
        <OutputDisplayComponent display={display} />
        <KeyBoard handleNumberButtonClick={handleNumberButtonClick} />
      </View>
    </View>
  );
};

const InputDisplayComponent = () => {
  return (
    <TextInput
      style={{
        backgroundColor: "#aaa",
        padding: "5px",
      }}
      placeholder="0"
    />
  );
};

const OutputDisplayComponent = ({ display }) => {
  return (
    <View style={{ padding: "5px" }}>
      <Text style={{ color: "#555" }}>{display}</Text>
    </View>
  );
};

const KeyBoard = ({ handleNumberButtonClick }) => {
  return (
    <View>
      <View style={[styles.KeyBoardRow]}>
        <KeyBoardKey
          symbol={"C"}
          onPressAction={() => {
            handleNumberButtonClick("C");
          }}
          type={1}
        />
        <KeyBoardKey
          symbol={"Del"}
          onPressAction={() => {
            handleNumberButtonClick("Del");
          }}
          type={1}
        />
      </View>
      <View style={[styles.KeyBoardRow]}>
        <KeyBoardKey
          symbol={"1"}
          onPressAction={() => {
            handleNumberButtonClick("1");
          }}
          type={0}
        />
        <KeyBoardKey
          symbol={"2"}
          onPressAction={() => {
            handleNumberButtonClick("2");
          }}
          type={0}
        />
        <KeyBoardKey
          symbol={"3"}
          onPressAction={() => {
            handleNumberButtonClick("3");
          }}
          type={0}
        />
        <KeyBoardKey
          symbol={"+"}
          onPressAction={() => {
            handleNumberButtonClick("+");
          }}
          type={1}
        />
      </View>
      <View style={[styles.KeyBoardRow]}>
        <KeyBoardKey
          symbol={"4"}
          onPressAction={() => {
            handleNumberButtonClick("4");
          }}
          type={0}
        />
        <KeyBoardKey
          symbol={"5"}
          onPressAction={() => {
            handleNumberButtonClick("5");
          }}
          type={0}
        />
        <KeyBoardKey
          symbol={"6"}
          onPressAction={() => {
            handleNumberButtonClick("6");
          }}
          type={0}
        />
        <KeyBoardKey
          symbol={"-"}
          onPressAction={() => {
            handleNumberButtonClick("-");
          }}
          type={1}
        />
      </View>
      <View style={[styles.KeyBoardRow]}>
        <KeyBoardKey
          symbol={"7"}
          onPressAction={() => {
            handleNumberButtonClick("7");
          }}
          type={0}
        />
        <KeyBoardKey
          symbol={"8"}
          onPressAction={() => {
            handleNumberButtonClick("8");
          }}
          type={0}
        />
        <KeyBoardKey
          symbol={"9"}
          onPressAction={() => {
            handleNumberButtonClick("9");
          }}
          type={0}
        />
        <KeyBoardKey
          symbol={"*"}
          onPressAction={() => {
            handleNumberButtonClick("*");
          }}
          type={1}
        />
      </View>
      <View style={[styles.KeyBoardRow]}>
        <KeyBoardKey
          symbol={"0"}
          onPressAction={() => {
            handleNumberButtonClick("0");
          }}
          type={0}
        />
        <KeyBoardKey
          symbol={"+"}
          onPressAction={() => {
            handleNumberButtonClick("+");
          }}
          type={1}
        />
        <KeyBoardKey
          symbol={"="}
          onPressAction={() => {
            handleNumberButtonClick("=");
          }}
          type={1}
        />
      </View>
    </View>
  );
};

const KeyBoardKey = ({ symbol, onPressAction, type }) => {
  return (
    <TouchableOpacity
      title={symbol}
      onPress={onPressAction}
      color={!type ? "#ddd" : "#001"}
      accessibilityLabel={symbol + " Key"}
      style={{
        padding: "12px",
      }}
    >
      <Text>{symbol}</Text>
    </TouchableOpacity>
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
