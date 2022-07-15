import React from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home/Home";

function App() {
  const navigate = useNavigate();

  return (
    <div className="App">
      <Navbar navigate={navigate} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Cart" element={<h1>Cart</h1>} />
      </Routes>
    </div>
  );
}

export default App;
