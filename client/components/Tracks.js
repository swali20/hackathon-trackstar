import React, { Component } from "react";
import { getHistory } from "../store/playHistory";
import { View, Text, Image } from "react-native";
import { connect } from "react-redux";

class Tracks extends Component {
  constructor(props) {
    super(props);

    this.state = {};

    //   const trackName = item.track.name;
    //   const album = item.track.album.name;
    //   const playDate = item.played_at;
    //   const duration = item.track.duration_ms;
    //   const albumImageUrl = item.track.album.images[1].url;
  }

  key = function* () {
    let id = 1;

    // this will never go into an infinite loops because of the yield keyword
    while (true) {
      yield id;
      id++;
    }
  };

  keyGenerator = this.key();

  render() {
    const { tracks } = this.props;
    const imageUrl = tracks[0].albumImageUrl;
    console.log(tracks[0].albumImageUrl);
    // return <Text>Track</Text>;
    return tracks ? (
      tracks.map((track) => (
        <View key={this.keyGenerator.next().value}>
          <Image
            source={{ uri: imageUrl }}
            style={{ height: 300, width: 300 }}
          />
          <Text> {`${track.name} - ${track.album}`} </Text>
        </View>
      ))
    ) : (
      <TexT></TexT>
    );
  }
}

const mapState = (state) => ({
  user: state.user,
  playHistory: state.history,
});
const mapDispatch = (dispatch) => ({
  getPlayHistory: () => dispatch(getHistory()),
});

export default connect(mapState, mapDispatch)(Tracks);
