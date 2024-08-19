import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import App from './App'; 
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './routes/Home/Home';
import Register from './routes/Register/Register';

const router = createBrowserRouter([
  {
    element: <App/>,
    children: [
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/register",
        element: <Register/>
      }
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}>
    </RouterProvider>
  </React.StrictMode>
);
 