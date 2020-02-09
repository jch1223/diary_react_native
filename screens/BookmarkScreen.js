import React from "react";
import { Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-navigation";

const BookmarkScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>즐겨찾기 화면</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default BookmarkScreen;
