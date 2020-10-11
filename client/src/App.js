import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";

// REDUX
import { Provider } from "react-redux";
// import store from "./store";

// MATERIAL UI
import CssBaseline from '@material-ui/core/CssBaseline';

// SCREENS
import Navbar from './components/navigation/Navbar'
import Home from './screens/Home'
import LoginScreen from './screens/auth/LoginScreen'
import RegisterScreen from './screens/auth/RegisterScreen'
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <CssBaseline />
        <div className="App">
          <Navbar />
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={LoginScreen} />
          <Route exact path="/register" component={RegisterScreen} />
        </div>
      <CssBaseline />
    </BrowserRouter>
  );
}

export default App;
