import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import CssBaseline from '@material-ui/core/CssBaseline';

import Navbar from './components/navigation/Navbar'
import Home from './screens/Home'
import Registration from './screens/auth/Registration'
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <CssBaseline />
        <div className="App">
          <Navbar />
          <Home />
          <Registration />
        </div>
      <CssBaseline />
    </BrowserRouter>

  );
}

export default App;
