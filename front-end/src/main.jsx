import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import HomePage from './pages/Home/Home.jsx'
import MenuPage from './pages/Menu/Menu.jsx'
import OrderPage from './pages/Order/Order.jsx'
import SignUpPage from './pages/Signin-Signup/Signup.jsx'
import SignInPage from './pages/Signin-Signup/Signin.jsx'
import AdminPage from './pages/Admin/Admin.jsx'
import "react-router-dom";
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />
  },
  {
    path: "/menu",
    element: <MenuPage />
  },
  {
    path: "/orders",
    element: <OrderPage />
  },
  {
    path: "/signin",
    element: <SignInPage />
  },
  {
    path: "/signup",
    element: <SignUpPage />
  },
  {
    path: "/contact",
    element: <AdminPage />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
