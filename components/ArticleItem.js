import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Platform } from "react-native";
import { Ionicons } from "@expo/vector-icons";

function ArticleItem({ article: { id, title, content, date } }) {
  return (
    <TouchableOpacity activeOpacity={0.8}>
      <View style={styles.container}>
        <View style={styles.icon}>
          <Ionicons name='md-list' size={14} color='#9e9e9e' />
        </View>
        <View style={styles.info}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.content} numberOfLines={2}>
            {content}
          </Text>
          <Text style={styles.date}>{date} </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 16,
    paddingBottom: 0
  },
  icon: {
    width: 16,
    height: 16,
    marginRight: 8,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: Platform.select({
      ios: 1,
      android: 4
    })
  },
  info: {
    flex: 1,
    paddingBottom: 16,
    borderBottomWidth: 0.3,
    borderBottomColor: "#bdbdbd"
  },
  title: {
    marginBottom: 8,
    fontSize: 16,
    fontWeight: "600",
    color: "#212121"
  },
  content: {
    marginBottom: 4,
    fontSize: 14,
    color: "#9e9e9e",
    lineHeight: 18
  },
  date: {
    fontSize: 12,
    color: "#bdbdbd"
  }
});

export default ArticleItem;
