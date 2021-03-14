import { View, Text, StyleSheet } from "react-native";
import { connect } from "react-redux";
import { Login } from "./screens";
import { me } from "./store";
import { Tab } from "./routes";

import React, { Component } from "react";
import { max } from "react-native-reanimated";

class Client extends Component {
  componentDidMount() {
    this.props.getMe();
  }
  render() {
    console.log("Client is rendering");
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
  isLoggedIn: !!state.user,
});

const mapDispatch = (dispatch) => ({
  getMe: () => dispatch(me()),
});

export default connect(mapState, mapDispatch)(Client);
