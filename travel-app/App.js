import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./src/components/screens/HomeScreen.js";
import SearchScreen from "./src/components/screens/SearchScreen.js";
import ChatScreen from "./src/components/screens/ChatScreen.js";
import ProfileScreen from "./src/components/screens/ProfileScreen.js";
import SettingsScreen from "./src/components/screens/SettingsScreen.js";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator
      initialRoute
      name="HomeScreen"
      screenOptions={{
        headerStyle: { backgroundColor: "#959BF6" },
        headerTintColor: "white",
      }}
    >
      <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false }}/>
    </Stack.Navigator>
  );
};

const SearchStack = () => {
  return (
    <Stack.Navigator
      initialRoute
      name="SearchScreen"
      screenOptions={{
        headerStyle: { backgroundColor: "#959BF6" },
        headerTintColor: "white",
      }}
    >
      <Stack.Screen name="SearchScreen" component={SearchScreen} options={{ headerShown: false }}/>
    </Stack.Navigator>
  );
};

const ChatStack = () => {
  return (
    <Stack.Navigator
      initialRoute
      name="ChatScreen"
    >
      <Stack.Screen name="ChatScreen" component={ChatScreen} options={{ headerShown: false }}/>
    </Stack.Navigator>
  );
};

const ProfileStack = () => {
  return (
    <Stack.Navigator
      initialRoute
      name="ProfileScreen"
    >
      <Stack.Screen name="ProfileScreen" component={ProfileScreen} options={{ headerShown: false }}/>
      <Stack.Screen name="SettingsScreen" component={SettingsScreen} options={{ headerShown: false }}/>
    </Stack.Navigator>
  );
};


const MyTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: { backgroundColor: '#fff' },
        tabBarActiveTintColor: '#6200ee',
        tabBarInactiveTintColor: 'gray',
      }}
    >
      <Tab.Screen name="Home" component={HomeStack} />
      <Tab.Screen name="Search" component={SearchStack} />
      <Tab.Screen name="Chat" component={ChatStack} />
      <Tab.Screen name="Profile" component={ProfileStack} />
    </Tab.Navigator>
  );
};

export const App = () => {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
};

export default App;