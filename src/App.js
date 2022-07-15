import React from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Cart from "./pages/Cart/Cart";
import Home from "./pages/Home/Home";

function App() {
  const navigate = useNavigate();

  return (
    <div className="App">
      <Navbar navigate={navigate} />
      <Routes>
        <Route path="/redux-cart/" element={<Home />} />
        <Route path="/redux-cart/Home" element={<Home />} />
        <Route path="/redux-cart/Cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
