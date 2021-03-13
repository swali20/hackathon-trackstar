import React, { Component } from "react";
import { Button, Text, View } from "react-native";
import { connect } from "react-redux";

class Login extends Component {
  render() {
    return (
      <View>
        <Button title="Login to Spotify" />
      </View>
    );
  }
}

const mapState = (state) => ({
  user: state.user,
});
const mapDispatch = (dispatch) => ({});

export default connect(mapState, mapDispatch)(Login);
