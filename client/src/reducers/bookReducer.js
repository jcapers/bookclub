import { SET_BOOKSHELF_DATA } from "../actions/types";

const isEmpty = require("is-empty");

const initialState = {
  bookshelves: {},
};

export default function(state = initialState, action) {
  // Switch decides what to change in state on an action.
  switch (action.type) {
    case SET_BOOKSHELF_DATA:
      return {
        ...state,
        bookshelves: action.payload
      };
    default:
      return state;
  }
}
