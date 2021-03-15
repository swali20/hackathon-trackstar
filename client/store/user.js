import authHandler from "../../util/authHandler";
import AsyncStorage from "@react-native-async-storage/async-storage";

// ACTION TYPES
const GOT_USER = "GOT_USER";
const REMOVED_USER = "REMOVED_USER";
// INITIAL STATE
const defaultUser = "";

// ACTION CREATORS
export const gotUser = (user) => ({
  type: GOT_USER,
  user,
});

export const removedUser = () => ({
  type: REMOVED_USER,
});

// THUNK CREATORS
export const login = (username) => async (dispatch) => {
  try {
    const res = await authHandler.onLogin();
    if (!res.accessToken) throw new Error("Authorization error");
    // convert user data to string for AsyncStorage compatibility
    const token = JSON.stringify(res);
    // save username and user data to local storage
    await AsyncStorage.setItem("username", username);
    await AsyncStorage.setItem("token", token);
    // get the token for the API call
    const { accessToken } = JSON.parse(await AsyncStorage.getItem("token"));

    const user = await fetch("https://api.spotify.com/v1/me", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    });

    // store user spotify information in local storage
    await AsyncStorage.setItem("spotifyData", JSON.stringify(user));

    const { id } = await user.json();

    // save username to store
    dispatch(gotUser({ id, username }));
  } catch (err) {
    console.log(err.message);
  }
};

export const me = () => async (dispatch) => {
  try {
    const username = await AsyncStorage.getItem("username");
    dispatch(gotUser(username));
  } catch (err) {
    console.error(err.message);
  }
};

export const logout = () => async (dispatch) => {
  try {
    await AsyncStorage.clear();
    dispatch(removedUser());
  } catch (err) {
    console.error(err.message);
  }
};

// REDUCER

export default function (state = defaultUser, action) {
  switch (action.type) {
    case GOT_USER:
      return action.user;
    case REMOVED_USER:
      return defaultUser;
    default:
      return state;
  }
}
