import axios from "axios";
import authHandler from "../../util/authHandler";
const { User } = require("../../server/db");

// ACTION TYPES
const GOT_USER = "GOT_USER";
// INITIAL STATE
const defaultUser = {};

// ACTION CREATORS
export const gotUser = (user) => ({
  type: GOT_USER,
  user,
});

// THUNK CREATORS
export const login = () => async (dispatch) => {
  try {
    const { accessToken } = await authHandler.onLogin();
    console.log("token in login thunk", accessToken);
    const user = await User.findOrCreate({
      where: {
        spotifyId: accessToken,
      },
    });
    console.log("user in thunk after findOrCreate", user);
    dispatch(gotUser(user));
  } catch (err) {
    console.error(err.message);
  }
};

// REDUCER

export default function (state = defaultUser, action) {
  switch (action.type) {
    case GOT_USER:
      return action.user;
    default:
      return state;
  }
}
