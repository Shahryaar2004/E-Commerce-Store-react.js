
import React from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import ProductDisplay from './Components/ProductDisplay/ProductDisplay';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
import Footer from './Components/Footer/Footer';
import men_banner from './Components/Assets/banner_mens.png';
import women_banner from './Components/Assets/banner_women.png';
import kids_banner from './Components/Assets/banner_kids.png';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Shop />} />
        <Route path='/men' element={<ShopCategory banner={men_banner} category="mens" />} />
        <Route path='/womens' element={<ShopCategory banner={women_banner} category="womens" />} />
        <Route path='/kids' element={<ShopCategory banner={kids_banner} category="kids" />} />
        <Route path='/product/:productId' element={<ProductDisplay/>} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/login' element={<LoginSignup />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
