import React from 'react';
import ReactDOM from 'react-dom/client';
import App from "./App";
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Login from './Login';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>
  }, 
  {
    path: "/Login",
    element: <Login/>
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

