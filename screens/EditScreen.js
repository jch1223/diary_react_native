import React from "react";
import { TextInput, View, StyleSheet } from "react-native";
import { SafeAreaView } from "react-navigation";
import EditHeader from "../components/EditHeader";

const EditScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <EditHeader />
      <View style={styles.body}>
        <TextInput placeholder='제목' style={styles.title} />
        <View style={styles.divider} />
        <TextInput placeholder='이곳을 눌러 작성을 시작하세요' multiline={true} style={styles.content} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
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

export default EditScreen;
