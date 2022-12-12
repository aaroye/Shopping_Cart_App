import { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Shop from "./pages/shop/Shop";
import Cart from "./pages/cart/Cart";
import { ShopContextProvider } from "./context/ShopContext";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="App">
      <Navbar />
      <ShopContextProvider>
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </ShopContextProvider>
      <Footer />
    </div>
  );
}

export default App;
