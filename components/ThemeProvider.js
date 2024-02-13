const storeTheme = async (theme) => {
  try {
    await AsyncStorage.setItem("theme", theme);
  } catch (error) {
    console.log(error);
  }
};

const loadTheme = async (theme) => {
  let storedTheme;
  try {
    storedTheme = await AsyncStorage.setItem("theme");
  } catch (error) {
    console.log(error);
  }
  return storedTheme;
};

const styles = StyleSheet.create({
  darkTheme: {},
});
