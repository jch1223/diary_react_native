import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { ContextProvider } from "react-simplified-context";
import Navigator from "./Navigator";

export default function App() {
  const [articles, setArticles] = useState([
    {
      id: 1,
      title: "첫번째 글",
      content: "첫번째 내용",
      date: "2020년 2월 14일",
      bookmarked: true
    },
    {
      id: 2,
      title: "두번째 글",
      content: "두번째 내용",
      date: "2020년 2월 14일"
    }
  ]);

  return (
    <ContextProvider articles={articles}>
      <Navigator />
    </ContextProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
