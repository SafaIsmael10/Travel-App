import React from "react";
import { View, Text, Image, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import { HeartIcon } from "../UI/Icon.js";
import mockPosts from "../../data/DummyPosts.js";
import Screen from "../layout/Screen.js";

const HomeScreen = () => {
    // Sort posts by upload date (newest first)
    const sortedPosts = mockPosts.sort((a, b) => new Date(b.uploadDate) - new Date(a.uploadDate));

    // Render each post
    const renderPost = ({ item }) => (
        <View style={styles.postContainer}>
            {/* User Info */}
            <View style={styles.userInfo}>
                <Image source={{ uri: item.profilePicture }} style={styles.profilePicture} />
                <Text style={styles.username}>{item.user}</Text>
            </View>

            {/* Post Image */}
            <Image source={{ uri: item.image }} style={styles.postImage} />

            {/* Post Actions */}
            <View style={styles.actions}>
                <TouchableOpacity>
                    <Text style={styles.actionText}>❤️ {item.likes}</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.actionText}>💬</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.actionText}>🔄</Text>
                </TouchableOpacity>
            </View>

            {/* Caption */}
            <Text style={styles.caption}>
                <Text style={styles.username}>{item.user}</Text> {item.caption}
            </Text>
        </View>
    );

    return (
        <FlatList
            data={sortedPosts}
            renderItem={renderPost}
            keyExtractor={(item) => item.id.toString()}
            style={styles.container}
        />
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: "#fff" },
    postContainer: { marginBottom: 20 },
    userInfo: { flexDirection: "row", alignItems: "center", padding: 10 },
    profilePicture: { width: 40, height: 40, borderRadius: 20, marginRight: 10 },
    username: { fontWeight: "bold", fontSize: 14 },
    postImage: { width: "100%", height: 400, resizeMode: "cover" },
    actions: { flexDirection: "row", justifyContent: "space-around", paddingVertical: 10 },
    actionText: { fontSize: 16 },
    caption: { paddingHorizontal: 10, marginTop: 5 },
});

export default HomeScreen;