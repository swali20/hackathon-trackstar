import React, { Component } from "react";
import { Button, Text, View } from "react-native";
import { connect } from "react-redux";
import { login } from "../store";
import authHandler from "../../util/authHandler";

class Login extends Component {
  render() {
    console.log("Login rendering");
    const { login } = this.props;
    return (
      <View>
        <Text>
          <Button onPress={() => login()} title="Login with Spotify" />
        </Text>
      </View>
    );
  }
}

const mapState = (state) => ({
  user: state.user,
});
const mapDispatch = (dispatch) => ({
  login: () => dispatch(login()),
});

export default connect(mapState, mapDispatch)(Login);
