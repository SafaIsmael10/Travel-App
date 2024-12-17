import Screen from "./Screen.js";
import { View, Text, StyleSheet } from "react-native";

const SearchScreen = () =>
{
    return (
        <Screen>
            <Text style={styles.text}>Search Screen: Search For Users</Text>
        </Screen>
      );
};

const styles = StyleSheet.create({
  text: { alignContent: "center", padding: 50, fontSize: 40, color: "red" }
});

export default SearchScreen;