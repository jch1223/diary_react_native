import React from "react";
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { Ionicons } from "@expo/vector-icons";

import ListScreen from "./screens/ListScreen";
import BookmarkScreen from "./screens/BookmarkScreen";

const TabNavigator = createBottomTabNavigator(
  {
    List: {
      screen: ListScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => {
          return <Ionicons name='md-list-box' size={25} color={tintColor} />;
        },
        tabBarLabel: "목록"
      }
    },
    Bookmark: {
      screen: BookmarkScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => {
          return <Ionicons name='md-heart' size={25} color={tintColor} />;
        },
        tabBarLabel: "즐겨찾기"
      }
    }
  },
  {
    tabBarOptions: {
      activeTintColor: "#424242",
      inactiveTintcolor: "#9e9e9e",
      borderTopColor: "#bdbdbd",
      backgroundColor: "#ffffff"
      // showLabel: false  //탭의 글씨를 삭제함
    }
  }
);

export default createAppContainer(TabNavigator);
