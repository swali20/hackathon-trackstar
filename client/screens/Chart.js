import React, { Component } from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import { Text } from "galio-framework";
import { cos } from "react-native-reanimated";
import { connect } from "react-redux";
import { getHistory } from "../store/playHistory";
import { ChartList } from "../components";
import { NavBar } from "galio-framework";

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

    return (
      <>
        <NavBar
          style={{
            position: "relative",
            backgroundColor: "black",
            borderBottomColor: "grey",
            borderBottomWidth: 0.5,
            opacity: 1,
          }}
          title={
            <Text
              style={{
                fontSize: 22,
                color: "white",
                fontVariant: ["small-caps"],
              }}
            >
              chart
            </Text>
          }
        />
        <ScrollView style={styles.container}>
          <Text h4 color="white" style={{ textAlign: "center" }}>
            {user.username
              ? `welcome, ${user.username.toLowerCase()}`
              : "welcome"}
          </Text>
          <Text p italic={true} muted={true}>
            your top ten:
          </Text>
          {this.state.tracks[39] ? (
            <ChartList tracks={this.state.tracks} />
          ) : (
            <Text h3 italic={true} muted={true}>
              chart loading...
            </Text>
          )}
        </ScrollView>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    color: "white",
  },
  welcome: {
    color: "white",
    fontSize: 32,
    textAlign: "center",
  },
});

const mapState = (state) => ({
  user: state.user,
  playHistory: state.history,
});
const mapDispatch = (dispatch) => ({
  getPlayHistory: () => dispatch(getHistory()),
});

export default connect(mapState, mapDispatch)(Chart);
