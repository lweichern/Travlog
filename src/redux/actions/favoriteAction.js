import { actionTypes } from "./actionTypes";

export const toggleFavorite = (postId) => {
  return {
    type: actionTypes.TOGGLE_FAVORITE,
    payload: postId,
  };
};

export const addToFavoriteList = () => {
  return {
    type: actionTypes.ADD_TO_FAVORITE_LIST,
  };
};
