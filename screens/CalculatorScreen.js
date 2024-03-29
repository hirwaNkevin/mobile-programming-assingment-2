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

export default CalculatorScreen = () => {
  const [display, setDisplay] = useState("");
  const [result, setResult] = useState("");
  const { theme, updateTheme } = useContext(ThemeContext);
  const handleNumberButtonClick = (symbol) => {
    if (symbol === "=") {
      setResult(eval(display).toString());
      setDisplay("");
    } else if (symbol === "Del") {
      const lastInputIndex = display.indexOf(symbol);
      const lastIndex = display.length - 1;
      setDisplay(display.slice(0, lastIndex));
    } else if (symbol === "C") {
      setDisplay("");
      setResult("");
    } else {
      display !== "" ? setDisplay(display + symbol) : setDisplay(symbol);
    }
  };
  return (
    <View style={{ backgroundColor: theme.background }}>
      <Text
        style={{
          fontWeight: "bold",
          fontSize: 30,
          textAlign: "center",
          color: theme.text,
        }}
      >
        Calculator
      </Text>
      <View
        style={{
          marginTop: "20px",
          marginBottom: "20px",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <InputDisplayComponent
          display={display}
          style={{ color: theme.text }}
        />
        <OutputDisplayComponent result={result} style={{ color: theme.text }} />
        <KeyBoard handleNumberButtonClick={handleNumberButtonClick} />
      </View>
    </View>
  );
};

const OutputDisplayComponent = ({ result }) => {
  return (
    <View style={{ padding: "5px" }}>
      <Text style={{ color: "#555" }}>{result}</Text>
    </View>
  );
};

const InputDisplayComponent = ({ display }) => {
  return (
    <TextInput
      style={{
        backgroundColor: "#aaa",
        padding: "5px",
      }}
      placeholder={display}
      value={display}
    />
  );
};

const KeyBoard = ({ handleNumberButtonClick }) => {
  const { theme, updateTheme } = useContext(ThemeContext);
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
