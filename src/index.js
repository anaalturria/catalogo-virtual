import React from 'react';
import ReactDOM from 'react-dom/client';
import App from "./App";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Login from './Login';
import Cadastro from './Cadastro';
import Filme from './Filme';

const theme = createTheme({
  palette: {
      mode: 'light',
      primary: {
        main: '#7481f7',
        light: '#c3cbff',
      },
      secondary: {
        main: '#ff50a3',
      },
      error: {
        main: '#e41e1e',
        dark: '#e41e1e',
      },
      success: {
        main: '#2dce33',
      },
    },
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>
  }, 
  {
    path: "/Login",
    element: <Login/>
  },
  {
    path: "/Cadastro",
    element: <Cadastro/>
  },
  {
    path: "/Filme",
    element: <Filme/>
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider theme={theme}>
    <RouterProvider router={router} />
  </ThemeProvider>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

