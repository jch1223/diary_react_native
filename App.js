import React, { useState, useEffect } from "react";
import { AsyncStorage } from "react-native";
import { ContextProvider } from "react-simplified-context";
import Navigator from "./Navigator";

export default function App() {
  const [articles, setArticles] = useState([
    {
      id: 1,
      title: "사용 방법",
      content: `1. 글 쓰기
  하단의 + 버튼을 누르면 글을 작성 할 수 있습니다

2. 삭제하기
  목록에서 글 리스트를 왼쪽으로 밀면 삭제 버튼이 나타납니다

3. 수정하기
  본문을 길게 누르면 글을 수정 할 수 있습니다

4. 즐겨찾기
  우측 상단에 하트 아이콘을 누르면 즐겨찾기에 추가 됩니다
`,
      date: "2020년 3월 17일",
      bookmarked: true
    }
  ]);
  const [id, setId] = useState(2);

  const save = () => {
    AsyncStorage.setItem("@diary:state", JSON.stringify(articles));
    AsyncStorage.setItem("@diary:id", String(id));
  };

  useEffect(() => {
    save();

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
