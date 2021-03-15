import AsyncStorage from "@react-native-async-storage/async-storage";

// ACTION TYPES
const GOT_HISTORY = "GOT_HISTORY";
// INITIAL STATE
const defaultHistory = "";

// ACTION CREATORS
export const gotHistory = (history) => ({
  type: GOT_HISTORY,
  history,
});

// THUNK CREATORS
export const getHistory = () => async (dispatch) => {
  try {
    // get the token for the API call
    const { accessToken } = JSON.parse(await AsyncStorage.getItem("token"));

    const history = await fetch(
      "https://api.spotify.com/v1/me/player/recently-played?limit=40",
      {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );

    // convert history data to string for AsyncStorage compatibility
    const storageHistory = JSON.stringify(history);
    // save play history data to local storage
    await AsyncStorage.setItem("playHistory", storageHistory);
    // json history to put on state
    const stateHistory = await history.json();
    // save play history to store
    dispatch(gotHistory(stateHistory));
  } catch (err) {
    console.error(err.message);
  }
};

// REDUCER

export default function (state = defaultHistory, action) {
  switch (action.type) {
    case GOT_HISTORY:
      return action.history;
    default:
      return state;
  }
}
