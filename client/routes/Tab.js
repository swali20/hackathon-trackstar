import React from "react";
import { View, Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Chart, Profile } from "../screens";

TabNav = createBottomTabNavigator();

export default function Tab() {
  return (
    <TabNav.Navigator>
      <TabNav.Screen name="Chart" component={Chart} />
      <TabNav.Screen name="Profile" component={Profile} />
    </TabNav.Navigator>
  );
}
