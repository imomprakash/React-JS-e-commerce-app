import React from 'react'

import './App.css'
import Navbar from './Components/Navbar/Navbar';
import { Routes, Route } from "react-router-dom";
// Pages 
import Shops from './Components/Pages/Shops';
import ShopCategory from './Components/Pages/ShopCategory';
import Product from './Components/Pages/Product';
import Cart from './Components/Pages/Cart';
import LoginSignup from './Components/Pages/LoginSignup';
import Footer from './Components/Footer/Footer';
import mens_banner from './Components/Assets/mens-banner.webp'
import women_banner from './Components/Assets/women banner.jpg'
import kids_banner from './Components/Assets/kids-banner.jpg'

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Shops />} />
        <Route path='/mens' element={<ShopCategory banner={mens_banner} category="men" />} />
        <Route path='/womens' element={<ShopCategory banner={women_banner} category="women" />} />
        <Route path='/kids' element={<ShopCategory banner={kids_banner} category="kids" />} />

        <Route path='product' element={<Product />}>
          <Route path=':productId' element={<Product />} />
        </Route>

        <Route path='/Cart' element={<Cart />} />
        <Route path='/login' element={<LoginSignup />} />
      </Routes>
      <Footer/>



    </div>
  )
}

export default App;
