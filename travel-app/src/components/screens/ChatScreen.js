import React, { useState } from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from "react-native";

// Dummy data for chats
const dummyChats = [
  { id: 1, username: "user1", lastMessage: "Hey, how's it going?", timestamp: "2 minutes ago" },
  { id: 2, username: "user2", lastMessage: "Check out this cool link!", timestamp: "1 hour ago" },
  { id: 3, username: "user3", lastMessage: "Let's meet up tomorrow!", timestamp: "3 hours ago" },
  { id: 4, username: "user4", lastMessage: "Looking forward to the game!", timestamp: "5 hours ago" },
  { id: 5, username: "user5", lastMessage: "Are you free this weekend?", timestamp: "6 hours ago" },
  { id: 6, username: "user6", lastMessage: "Happy birthday! 🎉", timestamp: "1 day ago" },
];

// Dummy data for user1's specific chat
const user1ChatMessages = [
  { id: 1, sender: "user1", message: "Hey, how's it going?" },
  { id: 2, sender: "you", message: "I'm doing well, thanks!" },
  { id: 3, sender: "user1", message: "What have you been up to?" },
  { id: 4, sender: "you", message: "Just working on some projects. You?" },
  { id: 5, sender: "user1", message: "Same here! Can't wait to catch up." },
];

const ChatScreen = () => {
  const [chats, setChats] = useState(dummyChats); // Initial state for chats

  // Handle when a chat is clicked
  const handleChatPress = (chatId) => {
    console.log(`Chat with ID: ${chatId} clicked!`);
    // In a real app, you'd navigate to the chat details screen here
  };

  // Render each chat item
  const renderChat = ({ item }) => (
    <TouchableOpacity style={styles.chatContainer} onPress={() => handleChatPress(item.id)}>
      <View style={styles.chatContent}>
        <Text style={styles.chatUsername}>{item.username}</Text>
        <Text style={styles.chatLastMessage}>{item.lastMessage}</Text>
      </View>
      <Text style={styles.chatTimestamp}>{item.timestamp}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={chats}
        renderItem={renderChat}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  chatContainer: {
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  chatContent: {
    marginBottom: 5,
  },
  chatUsername: {
    fontSize: 16,
    fontWeight: "bold",
  },
  chatLastMessage: {
    fontSize: 14,
    color: "#555",
  },
  chatTimestamp: {
    fontSize: 12,
    color: "#888",
    marginTop: 5,
  },
});

export default ChatScreen;