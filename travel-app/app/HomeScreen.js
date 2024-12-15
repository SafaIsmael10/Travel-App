import Screen from "./Screen.js";
import { View, Text, StyleSheet } from "react-native";

const HomeScreen = () =>
{
    return (
        <Screen>
            <Text>Home Screen !!!</Text>
            <Text>Home Screen !!!</Text>
            <Text>Home Screen !!!</Text>
            <Text>Home Screen !!!</Text>
            <Text>whats good hamodi</Text>
            <Text>SIGMA SIGMA BOY</Text>
            <Text style={styles.text}>Ali Herro</Text>
        </Screen>
      );
};

const styles = StyleSheet.create({
  text: { padding: 150, color: "purple" },
});

export default HomeScreen;