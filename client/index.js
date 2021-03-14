import { View, Text } from "react-native";
import { connect } from "react-redux";
import { Login } from "./screens";
import { me } from "./store";
import { Tab as TabNavigator } from "./routes";

import React, { Component } from "react";

class Client extends Component {
  componentDidMount() {
    this.props.getMe();
  }
  render() {
    return this.props.isLoggedIn ? <TabNavigator /> : <Login />;
  }
}

const mapState = (state) => ({
  isLoggedIn: !!state.user,
});

const mapDispatch = (dispatch) => ({
  getMe: () => dispatch(me()),
});

export default connect(mapState, mapDispatch)(Client);
