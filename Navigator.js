import React from "react";
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { Ionicons } from "@expo/vector-icons";

import ListScreen from "./screens/ListScreen";
import BookmarkScreen from "./screens/BookmarkScreen";

const TabNavigator = createBottomTabNavigator({
  List: {
    screen: ListScreen,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => {
        return <Ionicons name='md-list-box' size={25} color={tintColor} />;
      }
    }
  },
  Bookmark: {
    screen: BookmarkScreen,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => {
        return <Ionicons name='md-heart' size={25} color={tintColor} />;
      }
    }
  }
});

export default createAppContainer(TabNavigator);
