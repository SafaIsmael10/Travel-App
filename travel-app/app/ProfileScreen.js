import Screen from "./Screen.js";
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from "react-native";

const ProfileScreen = () =>
{
    const user = 
    {
        profilePicture: "https://via.placeholder.com/150", // Replace with a real image URL
        username: "hasburger01",
        name: "John Doe",
        followers: 200,
        following: 300,
        posts: 12,
    };
    return (
        <Screen>
            <View style={styles.container}>
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
            </View>
            {/* Toolbar */}
            <View style={styles.toolbar}>
                    <TouchableOpacity style={styles.toolbarButton} onPress={() => handleToolbarPress('Map')}>
                        <Text style={styles.toolbarText}>Map</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.toolbarButton} onPress={() => handleToolbarPress('Posts')}>
                        <Text style={styles.toolbarText}>Posts</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.toolbarButton} onPress={() => handleToolbarPress('Settings')}>
                        <Text style={styles.toolbarText}>Settings</Text>
                    </TouchableOpacity>
                </View>
                {/* Bottom Section for Posts */}
                <ScrollView contentContainerStyle={styles.postsContainer}>
                    <Text style={styles.sectionTitle}>Recent Posts</Text>
                    {/* Dummy Posts */}
                    {[...Array(user.posts).keys()].map((index) => (
                        <View key={index} style={styles.post}>
                            <Image source={{ uri: user.profilePicture }} style={styles.postImage} />
                            <Text style={styles.postText}>Post {index + 1}</Text>
                        </View>
                    ))}
                </ScrollView>
        </Screen>
      );
};

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: "#fff" },
    topContainer: { flexDirection: "row", padding: 20, alignItems: "center" },
    profilePicture: { width: 100, height: 100, borderRadius: 50, marginRight: 20 },
    statsContainer: { flex: 1 },
    username: { fontSize: 18, fontWeight: "bold", marginBottom: 5 },
    name: { fontSize: 16, color: "gray", marginBottom: 15 },
    countersContainer: { flexDirection: "row", justifyContent: "space-between" },
    counter: { alignItems: "center" },
    counterNumber: { fontSize: 16, fontWeight: "bold" },
    counterLabel: { fontSize: 14, color: "gray" },
    // Toolbar Styles
    toolbar: { flexDirection: "row", justifyContent: "space-evenly", paddingVertical: 10, borderTopWidth: 1, borderColor: "#ccc" },
    toolbarButton: { paddingHorizontal: 20 },
    toolbarText: { fontSize: 16, fontWeight: "bold", color: "#333" },

    // Bottom Posts Section
    postsContainer: { paddingHorizontal: 20, paddingBottom: 40 },
    sectionTitle: { fontSize: 18, fontWeight: "bold", marginBottom: 10 },
    post: { flexDirection: "row", alignItems: "center", marginBottom: 20 },
    postImage: { width: 60, height: 60, borderRadius: 30, marginRight: 15 },
    postText: { fontSize: 16, color: "#333" }
});

export default ProfileScreen;