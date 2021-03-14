import React from "react";
import { View, Text, Button, Alert } from "react-native";
import { connect } from "react-redux";
import { logout } from "../store";

function Profile({ logout, user }) {
  console.log("user in profile", user);
  const handleLogout = () => {
    Alert.alert(
      "Logout",
      "Are you sure you want to logout?",
      [
        {
          text: "Leave",
          onPress: () => logout(),
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
  logout: async () => await dispatch(logout()),
});

export default connect(mapState, mapDispatch)(Profile);
