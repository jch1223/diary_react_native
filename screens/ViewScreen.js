import React from "react";
import { Text, TouchableOpacity, ScrollView, StyleSheet } from "react-native";
import { SafeAreaView, withNavigation } from "react-navigation";
import { withContext } from "react-simplified-context";
import ViewHeader from "../components/ViewHeader";

function ViewScreen({ navigation, articles, toggle }) {
  const id = navigation.getParam("id", -1);
  const article = articles.find(item => {
    return item.id === id;
  });

  return (
    <SafeAreaView style={styles.container}>
      <ViewHeader
        title={article.title}
        bookmarked={article.bookmarked}
        bookmark={() => {
          toggle(id);
        }}
      />
      <ScrollView>
        <TouchableOpacity
          activeOpacity={0.8}
          onLongPress={() => {
            navigation.navigate("Edit", { id: id });
          }}
        >
          <Text style={styles.content}>{article.content}</Text>
          <Text style={styles.date}>{article.date}</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
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

export default withNavigation(withContext(ViewScreen));
