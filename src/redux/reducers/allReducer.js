import favoriteReducer from "./favoriteReducer";
import { combineReducers } from "redux";

const allReducer = combineReducers({
  favorite: favoriteReducer,
});

export default allReducer;
