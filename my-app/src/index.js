import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import Home from './Home.js';
import Login from './Login';
import Page from './Page';

import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  useRoutes,
} from "react-router-dom";


const Component1 = () => {
  return <h1>Component 1</h1>;
};

const Component2 = () => {
  return <h1>Component 2</h1>;
};


const App = () => {
  let routes = useRoutes([
    { path: "/home", element: <Home /> },
    { path: "/component2", element: <Component2 /> },
    { path: "/component1", element: <Component1 /> },
    { path: "/login", element: <Login /> },
    {path:"/product",element:<Page/>},
    // ...
  ]);
  return routes;
};



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router >
    <App />
  </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
