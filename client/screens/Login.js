import React, { Component } from "react";
import { Button, Text, TextInput, View } from "react-native";
import { connect } from "react-redux";
import { login } from "../store";

class Login extends Component {
  constructor() {
    super();

    this.state = {
      username: "",
    };
  }

  handleUsernameInput = (text) => {
    this.setState({
      username: text,
    });
  };
  render() {
    const { login } = this.props;
    const { username } = this.state;
    console.log("login props", this.props);
    return (
      <View>
        <Text style={{ color: "white" }}>what should we call you?</Text>
        <TextInput
          autoCapitalize="none"
          onChangeText={(text) => this.handleUsernameInput(text)}
          placeholder="username"
        />
        <Button
          onPress={() => {
            login(username);
            this.setState({ username: "" });
          }}
          title="Login with Spotify"
        />
      </View>
    );
  }
}

const mapState = (state) => ({
  user: state.user,
});
const mapDispatch = (dispatch) => ({
  login: (username) => dispatch(login(username)),
});

export default connect(mapState, mapDispatch)(Login);
