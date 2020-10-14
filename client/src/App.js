import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
// AUTH
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
// REDUX
import { Provider } from "react-redux";
import store from "./store";
import { setCurrentUser, logoutUser } from "./actions/authActions";
// MATERIAL UI
import CssBaseline from '@material-ui/core/CssBaseline';
// SCREENS
import PrivateRoute from "./utils/privateRoute";
import Navbar from './components/navigation/Navbar'
import HomeScreen from './screens/HomeScreen'
import LoginScreen from './screens/auth/LoginScreen'
import RegisterScreen from './screens/auth/RegisterScreen'
import BookshelfScreen from "./screens/BookshelfScreen";
import './App.css';

// Auth Token Expiry Check
if (localStorage.jwtToken) {
  // Set auth token header auth
  const token = localStorage.jwtToken;
  setAuthToken(token);
  // Decode token and get user info and exp
  const decoded = jwt_decode(token);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));// Check for expired token
  const currentTime = Date.now() / 1000; // to get in milliseconds
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());    // Redirect to login
    window.location.href = "./login";
  }
}

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <CssBaseline />
          <div className="App">
            <Navbar />
            <Route exact path="/" component={HomeScreen} />
            <Route exact path="/login" component={LoginScreen} />
            <Route exact path="/register" component={RegisterScreen} />
            <Switch>
              <PrivateRoute exact path="/bookshelf" component={BookshelfScreen} />
            </Switch>
          </div>
        <CssBaseline />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
