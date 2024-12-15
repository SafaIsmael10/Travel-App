import Screen from "./Screen.js";
import { View, Text, StyleSheet } from "react-native";

const HomeScreen = () =>
{
    return (
        <Screen>
            <Text style={styles.text}>Home Screen </Text>
        </Screen>
      );
};

const styles = StyleSheet.create({
  text: { alignContent: "center", padding: 50, fontSize: 40, color: "purple" }
});

export default HomeScreen;