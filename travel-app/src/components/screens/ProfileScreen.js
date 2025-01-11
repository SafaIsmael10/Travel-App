import React, { useState } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView, FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";
import MapView, { Marker } from "react-native-maps";
import Screen from "../layout/Screen.js";

const ProfileScreen = () => {
    const navigation = useNavigation();
    const [activeSection, setActiveSection] = useState("Posts");

    const user = 
    {
        profilePicture: "https://via.placeholder.com/150", // Replace with a real image URL
        username: "hasburger01",
        name: "John Doe",
        followers: 200,
        following: 300,
        posts: 17,
    };

    // Function to handle toolbar button press (update as per your logic)
    const handleToolbarPress = (section) => {
        setActiveSection(section);
        /*if (section === "Settings") 
        {
            navigation.navigate("SettingsScreen");
        } 
        else 
        {
            console.log(`${section} pressed`);
        }*/
    };

    // Render each post item
    const renderPost = ({ item }) => (
        <View style={styles.post}>
            <Image source={{ uri: user.profilePicture }} style={styles.postImage} />
        </View>
    );

    return (
        <Screen>
                <View style={styles.topContainer}>
                    <Image source={{ uri: user.profilePicture }} style={styles.profilePicture} />
                    <View style={styles.statsContainer}>
                        <Text style={styles.username}>{user.username}</Text>
                        <Text style={styles.name}>{user.name}</Text>
                        <View style={styles.countersContainer}>
                            <View style={styles.counter}>
                                <Text style={styles.counterNumber}>{user.posts}</Text>
                                <Text style={styles.counterLabel}>Posts</Text>
                            </View>
                            <View style={styles.counter}>
                                <Text style={styles.counterNumber}>{user.followers}</Text>
                                <Text style={styles.counterLabel}>Followers</Text>
                            </View>
                            <View style={styles.counter}>
                                <Text style={styles.counterNumber}>{user.following}</Text>
                                <Text style={styles.counterLabel}>Following</Text>
                            </View>
                        </View>
                    </View>
                </View>
            {/* Toolbar */}
                <View style={styles.toolbar}>
                    <TouchableOpacity style={styles.toolbarButton} onPress={() => handleToolbarPress("Map")}>
                        <Text style={styles.toolbarText}>Map</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.toolbarButton} onPress={() => handleToolbarPress("Posts")}>
                        <Text style={styles.toolbarText}>Posts</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.toolbarButton} onPress={() => handleToolbarPress("Settings")}>
                        <Text style={styles.toolbarText}>Settings</Text>
                    </TouchableOpacity>
                </View>
            {/* Bottom Section: Conditionally Render Posts or Map */}
            <View style={styles.container}>
                {activeSection === "Posts" ? (
                    <FlatList
                        data={[...Array(user.posts).keys()]} // Generating dummy posts
                        renderItem={renderPost}
                        keyExtractor={(item, index) => index.toString()}
                        numColumns={3} // 3 posts per row
                        contentContainerStyle={styles.postsContainer}
                        columnWrapperStyle={styles.columnWrapper} // Space between columns
                        scrollEnabled={true}
                    />
                ) : activeSection === "Map" ? (
                    <MapView
                      style={styles.map}
                      initialRegion={{
                        latitude: 0,  // Start with a central point (latitude)
                        longitude: 0, // Start with a central point (longitude)
                        latitudeDelta: 180,  // Zoom out to see the whole world
                        longitudeDelta: 360, // Zoom out to see the whole world
                      }}
                    >
                      {/* You can add markers or other features here */}
                      <Marker coordinate={{ latitude: 0, longitude: 0 }} title="World Center" />
                    </MapView>
                  ) : (
                    <Text>Settings Section</Text>
                  )}
            </View>
        </Screen>
      );
};

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: "#fff" },
    // Top Section
    topContainer: { flex: 0.5, flexDirection: "row", padding: 20, alignItems: "center", backgroundColor: "#fff" },
    profilePicture: { width: 100, height: 100, borderRadius: 50, marginRight: 20 },
    statsContainer: { flex: 1 },
    username: { fontSize: 18, fontWeight: "bold", marginBottom: 5 },
    name: { fontSize: 16, color: "gray", marginBottom: 15 },
    countersContainer: { flexDirection: "row", justifyContent: "space-between" },
    counter: { alignItems: "center" },
    counterNumber: { fontSize: 16, fontWeight: "bold" },
    counterLabel: { fontSize: 14, color: "gray" },

    // Toolbar Section (Fixed Height)
    toolbar: { height: 50, flexDirection: "row", justifyContent: "space-evenly", alignItems: "center", backgroundColor: "#f0f0f0" },
    toolbarButton: { paddingHorizontal: 20 },
    toolbarText: { fontSize: 16, fontWeight: "bold", color: "#333" },

    // Posts Section (Takes Remaining Space)
    postsContainer: { flex: 1, paddingHorizontal: 10, paddingBottom: 40, backgroundColor: "#fff" },
    columnWrapper: { justifyContent: "space-between" }, // Space between columns
    sectionTitle: { fontSize: 18, fontWeight: "bold", marginBottom: 20 },
    post: { margin: 10 },
    postImage: { width: 100, height: 100, borderRadius: 10 },

    mapContainer: { flex: 1, justifyContent: "center", alignItems: "center" },
    mapText: { fontSize: 18, color: "gray" },
    map: { flex: 1 }
});

export default ProfileScreen;