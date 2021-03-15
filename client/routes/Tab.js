import React from "react";
import { View, Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Chart, Profile } from "../screens";
import MyTabBar from "./TabBar";

TabNav = createBottomTabNavigator();

export default function Tab() {
  return (
    <TabNav.Navigator tabBar={(props) => <MyTabBar {...props} />}>
      <TabNav.Screen name="chart" component={Chart} />
      <TabNav.Screen name="profile" component={Profile} />
    </TabNav.Navigator>
  );
}
