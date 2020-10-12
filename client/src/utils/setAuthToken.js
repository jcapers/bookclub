import axios from "axios";

/*
* Sets and deletes Auth header for requests
*/
const setAuthToken = token => {
  if (token) {
    // If logged in then each reqeust should have the auth token.
    axios.defaults.headers.common["Authorization"] = token;
  } else {
    // Delete auth header
    delete axios.defaults.headers.common["Authorization"];
  }
};

export default setAuthToken;