import axios from "axios";

import { GET_ERRORS, SET_BOOKSHELF_DATA } from "./types";

/*
* Action workflow:
*   1. Axios makes requests within specified actions.
*   2. Dispatch sends actions to reducers.
*/


/*
* Action: Set bookshelf data
*/
export const setBookshelfData = data => {
  return {
    type: SET_BOOKSHELF_DATA,
    payload: data
  };
};

/*
* Action: Get user's bookshelves.
*/
export const getBookshelves = data => dispatch => {
  axios
    .get(`/books/shelf/${data.userID}`)
    .then(res => {
      dispatch(setBookshelfData(res.data));
    })
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};
