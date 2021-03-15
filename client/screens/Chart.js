import React, { Component } from "react";
import { View, Text, ScrollView } from "react-native";
import { cos } from "react-native-reanimated";
import { connect } from "react-redux";
import { getHistory } from "../store/playHistory";
import { ChartList } from "../components";

class Chart extends Component {
  constructor() {
    super();
    this.state = {
      tracks: [],
    };
  }
  async componentDidMount() {
    await this.props.getPlayHistory();
    this.props.playHistory.items.forEach((item) => {
      const name = item.track.name;
      const artist = item.track.artists[0].name;
      const album = item.track.album.name;
      const playDate = item.played_at;
      const duration = item.track.duration_ms;
      const albumImageUrl = item.track.album.images[1].url;

      this.setState((state) => ({
        tracks: [
          ...state.tracks,
          {
            name,
            artist,
            album,
            playDate,
            duration,
            albumImageUrl,
          },
        ],
      }));
    });
  }
  render() {
    const { user } = this.props;
    console.log(this.state.tracks.length);
    return (
      <ScrollView>
        <Text>Welcome, {user.username}</Text>
        <Text>Your Top Ten:</Text>
        {this.state.tracks[39] ? (
          <ChartList tracks={this.state.tracks} />
        ) : (
          <Text>Chart Loading</Text>
        )}
      </ScrollView>
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

export default connect(mapState, mapDispatch)(Chart);
