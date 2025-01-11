import Screen from "../layout/Screen.js";
import { View, Text, StyleSheet } from "react-native";

const SettingsScreen = () =>
{
    return (
        <Screen>
            <Text style={styles.text}>Settings</Text>
        </Screen>
      );
};

const styles = StyleSheet.create({
  text: { alignContent: "center", padding: 50, fontSize: 40, color: "purple" }
});

export default SettingsScreen;