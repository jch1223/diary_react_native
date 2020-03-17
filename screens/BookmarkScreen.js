import React from "react";
import { FlatList, StyleSheet } from "react-native";
import { SafeAreaView } from "react-navigation";
import { withContext } from "react-simplified-context";
import Header from "../components/Header";
import ArticleItem from "../components/ArticleItem";

const BookmarkScreen = ({ articles }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Header title='즐겨찾기' />
      <FlatList
        data={articles.filter(article => {
          return article.bookmarked;
        })}
        renderItem={({ item }) => {
          return <ArticleItem article={item} />;
        }}
        keyExtractor={item => {
          return `${item.id}`;
        }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  }
});

export default withContext(BookmarkScreen);
