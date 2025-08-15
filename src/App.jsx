import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Collections from './pages/Collections';
import Men from './pages/Men';
import Women from './pages/Women';
import ProductPage from './pages/ProductPage';
import CartPage from './pages/CartPage';
import Checkout from './pages/Checkout';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import Kids from './pages/Kids'
import ReturnsPolicy from "./pages/ReturnsPolicy";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Search from './pages/Search'
export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Routes>
          <Route path="/search" element={<Search />} />

          <Route path="/kids" element={<Kids/>} />
<Route path="/policy/returns" element={<ReturnsPolicy />} />
<Route path="/policy/privacy" element={<PrivacyPolicy />} />
          <Route path="/" element={<Home />} />
          <Route path="/collections" element={<Collections />} />
          <Route path="/men" element={<Men />} />
          <Route path="/women" element={<Women />} />
          <Route path="/product/:slug" element={<ProductPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
