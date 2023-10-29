import React, { useState,useEffect } from 'react';
import {BrowserRouter , Routes , Route} from 'react-router-dom'
import HomePage from './components/HomePage';
import Login from './components/Login';
import './App.css';
import Navbar from './components/home/Navbar';
import Register from './components/Register';
import Logout from './Logout';

function App() {
  const [token, setToken] = useState(localStorage.getItem("token"));  
  return (
  <BrowserRouter>
<Navbar token={token}/>
<Routes>
<Route exact path='/' element={<HomePage/>} />
<Route exact path='/sign-in' element={<Login/>} />
<Route exact path='/sign-up' element={<Register/>} />
<Route exact path='/logout' element={<Logout/>} />

</Routes>

</BrowserRouter>
  );
}

export default App;
