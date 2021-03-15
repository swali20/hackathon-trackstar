import React from "react";
import { View, Text } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Tracks from "./Tracks";

export default function ChartEntry({ artist }) {
  const [name, tracks] = artist;

  return (
    <ScrollView horizontal={true}>
      <Text>{name}</Text>
      <Tracks tracks={tracks} />
    </ScrollView>
  );
}
