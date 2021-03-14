import axios from "axios";
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
    const user = JSON.stringify(res);
    // save username and user data to local storage
    await AsyncStorage.setItem("username", username);
    await AsyncStorage.setItem("userData", user);

    // save username to store
    dispatch(gotUser(username));
  } catch (err) {
    console.error(err.message);
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
