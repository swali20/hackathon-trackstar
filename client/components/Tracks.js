import React, { Component } from "react";
import { getHistory } from "../store/playHistory";
import { View, Text, Image } from "react-native";
import { Card } from "galio-framework";
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
    // return <Text>Track</Text>;
    return tracks ? (
      tracks.map((track) => (
        <Card
          key={this.keyGenerator.next().value}
          title={track.name.toLowerCase()}
          titleColor={this.props.color ? this.props.color : "grey"}
          caption={track.album.toLowerCase()}
          image={track.albumImageUrl}
          imageStyle={{ height: 300, width: 300, borderRadius: 10 }}
          borderless
          shadow
          imageBlockStyle={{ padding: 8 }}
        />
      ))
    ) : (
      <Text>loading...</Text>
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
