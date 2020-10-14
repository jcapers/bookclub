import { combineReducers } from "redux";
import authReducer from "./authReducer";
import bookReducer from "./bookReducer";
import errorReducer from "./errorReducer";


// Root Reducer handles all our reducers.
export default combineReducers({
  auth: authReducer,
  books: bookReducer,
  errors: errorReducer
});

