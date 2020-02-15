import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { withNavigation } from "react-navigation";
import { Ionicons } from "@expo/vector-icons";

function ViewHeader({ navigation }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => {
          navigation.goBack();
        }}
        hitSlop={{ top: 32, bottom: 32, left: 32, right: 32 }}
      >
        <Ionicons name='ios-arrow-back' size={28} color='#da5746' />
      </TouchableOpacity>
      <Text style={styles.title}>제목 영역</Text>
      <TouchableOpacity activeOpacity={0.8} hitSlop={{ top: 32, bottom: 32, left: 32, right: 32 }}>
        <Ionicons name={"md-heart-empty"} size={24} color='#da5746' />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    height: 48,
    alignItems: "center",
    justifyContent: "space-between",
    paddingRight: 16,
    paddingLeft: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#dedede"
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
    color: "#212121"
  }
});

export default withNavigation(ViewHeader);