import Screen from "../layout/Screen.js";
import React, { useState } from "react";
import { View, TextInput, StyleSheet, FlatList, TouchableOpacity } from "react-native";

// Function to generate a random number that's a multiple of 3
const generateRandomMultipleOf3 = () => {
  return Math.floor(Math.random() * 10 + 1) * 3; // Random number between 3 and 30 (multiple of 3)
};

const mockPosts = [
  { id: 1, postColor: "#ddd" },
  { id: 2, postColor: "#bbb" },
  { id: 3, postColor: "#ccc" },
  { id: 4, postColor: "#ddd" },
  { id: 5, postColor: "#bbb" },
  { id: 6, postColor: "#ccc" },
  { id: 7, postColor: "#ddd" },
  { id: 8, postColor: "#bbb" },
  { id: 9, postColor: "#ccc" },
  { id: 10, postColor: "#ddd" },
  { id: 11, postColor: "#bbb" },
  { id: 12, postColor: "#ccc" },
  { id: 13, postColor: "#ddd" },
  { id: 14, postColor: "#bbb" },
  { id: 15, postColor: "#ccc" },
  { id: 16, postColor: "#ddd" },
  { id: 17, postColor: "#bbb" },
  { id: 18, postColor: "#ccc" },
  { id: 19, postColor: "#ddd" },
  { id: 20, postColor: "#bbb" },
  { id: 21, postColor: "#ccc" },
];

const SearchScreen = () => {
  const [searchQuery, setSearchQuery] = useState("");  // For capturing the search input
  const [suggestedPosts, setSuggestedPosts] = useState(
    mockPosts.slice(0, generateRandomMultipleOf3())  // Limit to a random number of posts (multiple of 3)
  );

  const handleSearch = (text) => {
    setSearchQuery(text);
    // For now, the search bar will just update the text state
    // Later, you can integrate search functionality (filtering posts, etc.)
  };

  const loadMorePosts = () => {
    const morePosts = mockPosts.slice(suggestedPosts.length, suggestedPosts.length + 3);
    setSuggestedPosts((prevPosts) => [...prevPosts, ...morePosts]);
  };

  const renderPost = ({ item }) => (
    <TouchableOpacity style={styles.post}>
      <View style={[styles.postImage, { backgroundColor: item.postColor }]} />
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {/* Search Bar */}
      <View style={styles.searchBarContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search"
          value={searchQuery}
          onChangeText={handleSearch}
        />
      </View>

      {/* FlatList for posts */}
      <FlatList
        data={suggestedPosts}
        renderItem={renderPost}
        keyExtractor={(item) => item.id.toString()}
        numColumns={3}  // Static 3 columns for grid layout
        contentContainerStyle={styles.postsContainer}
        onEndReached={loadMorePosts}  // Load more posts when reaching the end
        onEndReachedThreshold={0.5}  // Trigger onEndReached when 50% of the list is visible
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 10,
  },
  searchBarContainer: {
    paddingHorizontal: 15,
    marginBottom: 10,
  },
  searchInput: {
    height: 40,
    borderColor: "#ddd",
    borderWidth: 1,
    borderRadius: 8,
    paddingLeft: 10,
  },
  postsContainer: {
    paddingBottom: 100,  // Allow for extra space at the bottom to load more posts
  },
  post: {
    margin: 5,  // Adjust margin to create spacing between posts
    flex: 1,  // Allow post to take up space within a column
  },
  postImage: {
    width: "100%",
    height: 200,
    borderRadius: 8,
  },
});

export default SearchScreen;