import React from "react";
import { View, Text, Button, Alert } from "react-native";
import { connect } from "react-redux";
import { logout } from "../store";

function Profile({ logout }) {
  console.log(logout);
  const handleLogout = () => {
    Alert.alert(
      "Logout",
      "Are you sure you want to logout?",
      [
        {
          text: "Leave",
          onPress: async () => await logout(),
        },
        { text: "Stay" },
      ],
      {
        cancelable: true,
      }
    );
  };
  return (
    <View>
      <Text>Profile Screen</Text>
      <Button onPress={() => handleLogout()} title="Logout" />
    </View>
  );
}

const mapState = (state) => ({
  user: state.user,
});

const mapDispatch = (dispatch) => ({
  logout: () => dispatch(logout()),
});

export default connect(mapState, mapDispatch)(Profile);
