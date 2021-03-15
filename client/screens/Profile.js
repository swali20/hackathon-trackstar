import React from "react";
import { View, Text, Button, Alert } from "react-native";
import { connect } from "react-redux";
import { logout } from "../store";
import { NavBar } from "galio-framework";

function Profile({ logout, user }) {
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
            profile
          </Text>
        }
      />
      <View
        style={{
          backgroundColor: "black",
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Button onPress={() => handleLogout()} title="Logout" />
      </View>
    </>
  );
}

const mapState = (state) => ({
  user: state.user,
});

const mapDispatch = (dispatch) => ({
  logout: async () => await dispatch(logout()),
});

export default connect(mapState, mapDispatch)(Profile);
