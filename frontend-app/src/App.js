import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import Login from './components/Login';
import Navbar from './components/home/Navbar';
import Register from './components/Register';
import AuthRoute from './AuthRoute';
import Logout from './components/Logout';

function App() {
  const [token, setToken] = useState(localStorage.getItem('token'));
  console.log("inside app. js token",token)
  return (
    <BrowserRouter>
      <Navbar token={token} setToken={setToken}/>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
          <Route path="/sign-in" element={<Login token={token} setToken={setToken}/>} />
          <Route path="/sign-up" element={<Register />} />
          {/* <Route
            path="/logout"
            element={
              <Logout token={token} setToken={setToken}/>
            }
          /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
