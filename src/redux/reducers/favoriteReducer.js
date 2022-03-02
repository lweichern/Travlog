import postCards from "../../listComponents/PostCards";
import { actionTypes } from "../actions/actionTypes";

const INITIAL_STATE = {
  posts: postCards,
  list: [],
};

const favoriteReducer = (state = INITIAL_STATE, action) => {
  //   const post = state.posts.find((item) => item.id === action.payload);

  // Check if the post is already in the list
  const inList = state.list.find((item) =>
    item.id === action.payload ? true : false
  );

  switch (action.type) {
    case actionTypes.TOGGLE_FAVORITE:
      return {
        ...state,
        posts: state.posts.map((item) =>
          item.id === action.payload
            ? { ...item, isFavorite: !item.isFavorite }
            : item
        ),
      };

    case actionTypes.ADD_TO_FAVORITE_LIST:
      return {
        ...state,
        list: state.posts.filter((item) => item.isFavorite),
      };

    default:
      return state;
  }
};

export default favoriteReducer;
