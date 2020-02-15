import React from "react";
import { Text, ScrollView, StyleSheet } from "react-native";
import { SafeAreaView } from "react-navigation";
import ViewHeader from "../components/ViewHeader";

function ViewScreen(props) {
  return (
    <SafeAreaView style={styles.container}>
      <ViewHeader />
      <ScrollView>
        <Text style={styles.content}>글 내용</Text>
        <Text style={styles.date}>2020년 02월 15일</Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  content: {
    padding: 20,
    fontSize: 16,
    lineHeight: 20,
    color: "#424242"
  },
  date: {
    padding: 20,
    paddingTop: 0,
    fontSize: 12,
    color: "#bdbdbd"
  }
});

export default ViewScreen;
