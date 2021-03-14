import React, { Component } from "react";
import { View, Text } from "react-native";
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

      this.setState((state) => ({
        tracks: [
          ...state.tracks,
          {
            name,
            artist,
            album,
            playDate,
            duration,
          },
        ],
      }));
    });
  }
  render() {
    // track name, artist, album, played_at
    // use "played at" to keep track of music from a certain day
    // count how many times the same song of the same artist was played
    // show a lit of the top 10 songs based on their frequency of play

    const { user } = this.props;
    return (
      <View>
        <Text>Welcome, {user.username}</Text>
        <Text>Your Top Ten:</Text>
        <ChartList tracks={this.state.tracks} />
      </View>
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
