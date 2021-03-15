import React from "react";
import { View } from "react-native";
import { Text } from "galio-framework";
import { ScrollView } from "react-native-gesture-handler";
import Tracks from "./Tracks";
import { useFonts } from "expo-font";

// const heading2 = require("@expo-google-fonts/dosis/Dosis_600SemiBold.ttf");

export default function ChartEntry({ artist, position, color }) {
  const [name, tracks] = artist;

  return (
    <View
      style={{
        borderBottomColor: "grey",
        borderBottomWidth: 0.5,
      }}
    >
      <Text
        style={{
          color: color ? color : "grey",
          opacity: color ? 1 : 0.7,
          fontVariant: ["small-caps"],
        }}
        h4
        muted={true}
      >
        {position}. {name.toLowerCase()}
      </Text>
      <ScrollView horizontal={true}>
        <Tracks color={color} tracks={tracks} />
      </ScrollView>
    </View>
  );
}
