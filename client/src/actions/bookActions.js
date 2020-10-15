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

/*
* Action: Create a book shelf.
*/
export const createBookshelf = data => dispatch => {
  axios
    .post("/books/shelf/create", data)
    .then(res => {
      const userData = { userID: data.userID }
      dispatch(getBookshelves(userData))
    })
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

/*
* Action: Create a book shelf.
*/
export const deleteBookshelf = data => dispatch => {
  axios
    .delete(`/books/shelf/delete/${data.shelfID}`)
    .then(res => {
      const userData = { userID: data.userID }
      dispatch(getBookshelves(userData))
    })
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

/*
* Action: Delete books.
*/
export const deleteBook = data => dispatch => {
  console.log(data);
  axios
    .delete(`/books/shelf/deleteBook/${data.shelfID}/${data.bookID}`)
    .then(res => {
      const userData = { userID: data.userID }
      dispatch(getBookshelves(userData))
    })
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

/*
* Action: Add a book to the bookshelf
*/
export const addBook = data => dispatch => {
  axios
    .put(`/books/shelf/addBook/${data.shelfID}`, data)
    .then(res => {
      const userData = { userID: data.userID }
      dispatch(getBookshelves(userData))
    })
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};
