import React from "react";
import { TextInput, View, StyleSheet } from "react-native";
import { SafeAreaView, withNavigation } from "react-navigation";
import { withContext } from "react-simplified-context";
import EditHeader from "../components/EditHeader";
import { Updates } from "expo";

const EditScreen = ({ create, update, articles, navigation }) => {
  const id = navigation.getParam("id", -1);
  const article = articles.find(item => {
    return item.id === id;
  });

  let title = article ? article.title : "";
  let content = article ? article.content : "";

  return (
    <SafeAreaView style={styles.container}>
      <EditHeader
        done={() => {
          if (id > -1) {
            update(id, title, content);
          } else {
            create(title, content);
          }
        }}
      />
      <View style={styles.body}>
        <TextInput
          placeholder='제목'
          style={styles.title}
          onChangeText={text => {
            title = text;
          }}
        >
          {title}
        </TextInput>
        <View style={styles.divider} />
        <TextInput
          placeholder='이곳을 눌러 작성을 시작하세요'
          multiline={true}
          onChangeText={text => {
            content = text;
          }}
          style={styles.content}
        >
          {content}
        </TextInput>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  body: {
    flex: 1,
    paddingTop: 8,
    paddingBottom: 8,
    paddingLeft: 16,
    paddingRight: 16
  },
  title: {
    fontSize: 20,
    fontWeight: "600",
    color: "#212121"
  },
  content: {
    flex: 1,
    fontSize: 16,
    lineHeight: 20,
    color: "#424242"
  },
  divider: {
    marginTop: 12,
    marginBottom: 12,
    height: 1,
    width: "100%",
    backgroundColor: "#dedede"
  }
});

export default withNavigation(withContext(EditScreen));
