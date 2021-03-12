import React from "react";
import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet, Text, View } from "react-native";
import { Provider } from "react-redux";
import store from "./client/store";

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="dark" />
      <Provider store={store}>
        <View style={styles.container}>
          <Text>Hello World</Text>
        </View>
      </Provider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
