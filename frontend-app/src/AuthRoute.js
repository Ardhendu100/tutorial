import React from 'react';
import { Route, Navigate } from 'react-router-dom';


const AuthRoute = ({ token, children }) => {
    if (token) {
      return <Navigate to="/" />;
    }
  
    return children;
  };

export default AuthRoute;
