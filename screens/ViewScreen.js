import React from "react";
import { Text, TouchableOpacity, ScrollView, StyleSheet } from "react-native";
import { SafeAreaView, withNavigation } from "react-navigation";
import ViewHeader from "../components/ViewHeader";

function ViewScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <ViewHeader />
      <ScrollView>
        <TouchableOpacity
          activeOpacity={0.8}
          onLongPress={() => {
            navigation.navigate("Edit");
          }}
        >
          <Text style={styles.content}>글 내용</Text>
          <Text style={styles.date}>2020년 02월 15일</Text>
        </TouchableOpacity>
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

export default withNavigation(ViewScreen);
