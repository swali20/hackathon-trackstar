import React from "react";
import { View, ScrollView } from "react-native";
import { Text } from "galio-framework";

import ChartEntry from "./ChartEntry";

export default function ChartList({ tracks }) {
  function* key() {
    let id = 1;

    // this will never go into an infinite loops because of the yield keyword
    while (true) {
      yield id;
      id++;
    }
  }

  function* position() {
    let id = 1;

    // this will never go into an infinite loops because of the yield keyword
    while (true) {
      yield id;
      id++;
    }
  }

  const positionGenerator = position();

  function* color() {
    let color;
    yield "#F2C98A";
    yield "#BD8633";
    yield "#705D41";
  }

  colorGenerator = color();

  const keyGenerator = key();

  function* color() {
    let color;
    yield "#F2C98A";
    yield "#BD8633";
    yield "#705D41";
  }

  colorGenerator = color();

  tracks.sort((a, b) => {
    if (a.artist.toLowerCase() > b.artist.toLowerCase()) {
      return 1;
    }
    if (a.artist.toLowerCase() < b.artist.toLowerCase()) {
      return -1;
    }
    return 0;
  });

  const getArtistTracks = (tracks) => {
    if (tracks.length > 10) {
      return tracks.reduce((artistTracks, currentTrack) => {
        // i want an object with 'Ariana Grade: [{track1}, {track2}]' so {artistName: arrayOfTracks}

        if (Array.isArray(artistTracks[currentTrack.artist])) {
          artistTracks[currentTrack.artist].push(currentTrack);
        } else {
          artistTracks[currentTrack.artist] = [currentTrack];
        }

        return artistTracks;
      }, {});
    } else {
      return "Tracks not loaded";
    }
  };

  const getTopTen = () => {
    const sortableArtistTracks = [];
    const artistTracks = getArtistTracks(tracks);
    for (const artist in artistTracks) {
      sortableArtistTracks.push([artist, artistTracks[artist]]);
    }
    sortableArtistTracks.sort((a, b) => b[1].length - a[1].length);

    const topTen = [];
    for (let i = 0; i < 10; i++) {
      topTen.push(sortableArtistTracks[i]);
    }
    return topTen;
  };

  const topTen = getTopTen();

  return topTen ? (
    topTen.map((artist, index) => {
      return (
        <ScrollView>
          <ChartEntry
            position={positionGenerator.next().value}
            color={colorGenerator.next().value}
            key={index}
            artist={artist}
          />
        </ScrollView>
      );
    })
  ) : (
    <Text>Loading</Text>
  );
}

{
  /* {
  topTen.map((artist) => {
    console.log(artist);
    return <ChartEntry />;
  });
} */
}
