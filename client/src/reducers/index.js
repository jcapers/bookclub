import { combineReducers } from "redux";
import authReducer from "./authReducer";
import errorReducer from "./errorReducer";


// Root Reducer handles all our reducers.
export default combineReducers({
  auth: authReducer,
  errors: errorReducer
});

