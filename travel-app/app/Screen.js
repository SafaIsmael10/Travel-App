import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";

const Screen = ({ children }) => {
  //Initialisations
  //State
  //Handler
  //View
  return (
    <View style={styles.screen}>
      {children}
      <StatusBar style="light" />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: { padding: 15, flex: 1 }
});

export default Screen;