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
      date: "2020년 2월 14일",
      bookmarked: false
    }
  ]);
  const [id, setId] = useState(3);

  return (
    <ContextProvider
      articles={articles}
      create={(title, content) => {
        const now = new Date();
        setArticles(
          [
            {
              id: id,
              title: title,
              content: content,
              date: `${now.getFullYear()}년 ${now.getMonth() + 1}월 ${now.getDate()}일`,
              bookmarked: false
            }
          ].concat(articles)
        );
        setId(id + 1);
      }}
      update={(id, title, content) => {
        const newArticles = [...articles];
        const index = newArticles.findIndex(item => {
          return item.id === id;
        });
        newArticles[index].title = title;
        newArticles[index].content = content;
        setArticles(newArticles);
      }}
    >
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
