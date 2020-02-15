import React from "react";
import { Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-navigation";
import ViewHeader from "../components/ViewHeader";

function ViewScreen(props) {
  return (
    <SafeAreaView style={styles.container}>
      <ViewHeader />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default ViewScreen;
