import React from "react";
import { Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-navigation";
import Header from "../components/Header";
import ArticleItem from "../components/ArticleItem";

const ListScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header title='나의 글' />
      <ArticleItem
        article={{
          id: 1,
          title: "첫번째 글",
          content: "첫번째 내용",
          date: "2020년 2월 14일"
        }}
        remove={() => {}}
      />
      <ArticleItem
        article={{
          id: 2,
          title: "두번째 글",
          content: "두번째 내용",
          date: "2020년 2월 14일"
        }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default ListScreen;
