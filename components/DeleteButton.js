import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

const DeleteButton = ({ remove, id }) => {
  return (
    <TouchableOpacity activeOpacity={0.8} style={styles.button} onPress={() => remove(id)}>
      <Text style={styles.text}>삭제</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 60,
    height: 100,
    backgroundColor: "#fe5746",
    justifyContent: "center",
    alignItems: "center"
  },
  text: {
    color: "#fff"
  }
});

export default DeleteButton;
