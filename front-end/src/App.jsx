import { useState } from 'react'
import './App.css'
import HomePage from './pages/Home/Home.jsx'
import MenuPage from './pages/Menu/Menu.jsx'
import OrderPage from './pages/Order/Order.jsx'
import SignPage from './pages/Signin-Signup/Sign.jsx'

export default function app() {
    // return <HomePage />
    // return <MenuPage />
    // return <OrderPage />
    return <SignPage />
}