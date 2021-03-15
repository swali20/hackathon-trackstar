import { View, Text, StyleSheet } from "react-native";
import { connect } from "react-redux";
import { Login } from "./screens";
import { me, logout } from "./store";
import { Tab } from "./routes";

import React, { Component } from "react";
import { getHistory } from "./store/playHistory";

class Client extends Component {
  async componentDidMount() {
    await this.props.getMe();
    await this.props.loadHistory();
  }

  render() {
    return (
      <View style={styles.container}>
        {this.props.isLoggedIn ? <Tab /> : <Login />}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const mapState = (state) => ({
  isLoggedIn: state.user ? true : false,
});

const mapDispatch = (dispatch) => ({
  getMe: () => dispatch(me()),
  loadHistory: () => dispatch(getHistory()),
});

export default connect(mapState, mapDispatch)(Client);
