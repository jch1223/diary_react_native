import React, { useState, useEffect } from "react";
import { StyleSheet, AsyncStorage } from "react-native";
import { ContextProvider } from "react-simplified-context";
import Navigator from "./Navigator";

export default function App() {
  const [articles, setArticles] = useState([]);
  const [id, setId] = useState(0);

  const save = () => {
    AsyncStorage.setItem("@diary:state", JSON.stringify(articles));
    AsyncStorage.setItem("@diary:id", String(id));
  };

  useEffect(() => {
    AsyncStorage.getItem("@diary:state").then(state => {
      setArticles(JSON.parse(state));
    });

    AsyncStorage.getItem("@diary:id").then(id => {
      setId(Number(id));
    });
  }, []);

  useEffect(() => {
    save();
  }, [articles, id]);

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
      toggle={id => {
        const newArticles = [...articles];
        const index = newArticles.findIndex(item => {
          return item.id === id;
        });
        newArticles[index].bookmarked = !newArticles[index].bookmarked;

        setArticles(newArticles);
      }}
      remove={id => {
        const newArticles = [...articles];

        setArticles(
          newArticles.filter(article => {
            return article.id !== id;
          })
        );
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
