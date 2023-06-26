import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import {BrowserRouter as Router}  from "react-router-dom";
import { AuthContextProvider } from './authContext/AuthContext';

ReactDOM.render(
  <React.StrictMode>
    <AuthContextProvider>
    <App />
    
  </AuthContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);