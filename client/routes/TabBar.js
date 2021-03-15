import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

function MyTabBar({ state, descriptors, navigation }) {
  return (
    <View
      style={{
        flexDirection: "row",
        backgroundColor: "black",
        height: 50,
        borderTopColor: "grey",
        borderTopWidth: 0.5,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };

        let iconName;
        if (route.name === "chart") {
          iconName = isFocused ? "bar-chart" : "bar-chart-outline";
        } else if (route.name === "profile") {
          iconName = isFocused ? "person" : "person-outline";
        }

        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityStates={isFocused ? ["selected"] : []}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{ flex: 1, alignItems: "center" }}
            key={index}
          >
            <Ionicons
              name={iconName}
              size={20}
              color={isFocused ? "#F0AA41" : "#888"}
            />
            <Text style={{ color: isFocused ? "#F0AA41" : "#777" }}>
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

export default MyTabBar;
