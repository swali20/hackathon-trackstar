import React from "react";
import { View, Text } from "react-native";

export default function ChartList({ tracks }) {
  function* key() {
    let id = 1;

    while (true) {
      yield id;
      id++;
    }
  }

  const keyGenerator = key();
  tracks.sort((a, b) => {
    if (a.artist.toLowerCase() > b.artist.toLowerCase()) {
      return 1;
    }
    if (a.artist.toLowerCase() < b.artist.toLowerCase()) {
      return -1;
    }
    return 0;
  });
  return (
    <View>
      {tracks.map((track) => {
        return (
          <Text key={keyGenerator.next().value}>
            {`${track.name} by ${track.artist}`}
          </Text>
        );
      })}
    </View>
  );
}
