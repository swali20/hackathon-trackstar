import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { Provider } from "react-redux";
import store from "./client/store";
import Client from "./client";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";

// fonts
const heading1 = require("./node_modules/@expo-google-fonts/dosis/Dosis_800ExtraBold.ttf");

const content = require("./node_modules/@expo-google-fonts/dosis/Dosis_400Regular.ttf");
const subcontent = require("./node_modules/@expo-google-fonts/dosis/Dosis_200ExtraLight.ttf");

export default function App() {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <SafeAreaView style={styles.container}>
          <StatusBar style="auto" />
          <Client />
        </SafeAreaView>
      </Provider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
});
