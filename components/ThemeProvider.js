import { useState, createContext, useEffect } from "react";
import { StyleSheet } from "react-native";

const ThemeContext = createContext();
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(defaultTheme);

  useEffect(() => {
    loadTheme();
  }, []);

  const storeTheme = async (theme) => {
    try {
      await AsyncStorage.setItem("theme", JSON.stringify(theme));
    } catch (error) {
      console.log("Got the following error storing the theme" + error);
    }
  };

  const loadTheme = async () => {
    let storedTheme;
    try {
      storedTheme = await AsyncStorage.getItem("theme");
      if (storedTheme !== null) {
        setTheme(JSON.parse(storedTheme));
      }
    } catch (error) {
      console.log("Got the following error loading the theme" + error);
      setTheme(defaultTheme);
    }
    return storedTheme;
  };

  const updateTheme = (newTheme) => {
    setTheme(newTheme);
    storeTheme(newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, updateTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

const styles = StyleSheet.create({
  darkTheme: {},
});

const defaultTheme = {
  // Default theme
  background: "#222",
  text: "#eee",
};

export default ThemeContext;
