import { createStore, combineReducers, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
<<<<<<< HEAD
import user from "./user";

const reducer = combineReducers({
  user,
=======
import currentUser from "./user";

const reducer = combineReducers({
  currentUser,
>>>>>>> 705721ecbe8749b352254f1dacf4dabbe8f374c2
});
const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, createLogger({ collapsed: true }))
);
const store = createStore(reducer, middleware);

export default store;
export * from "./user";
