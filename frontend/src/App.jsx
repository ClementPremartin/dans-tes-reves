/* eslint-disable import/no-unresolved */
import { Routes, Route } from "react-router-dom";
import { useState } from "react";

import Admin from "@pages/Admin";
import Waiting from "@pages/Waiting";
import Home from "@pages/Home";
import Serie from "@pages/Serie";
import Contact from "@pages/Contact";
import Navbar from "@components/Navbar";

import "./App.css";

function App() {
  const [isOpenBurger, setIsOpenBurger] = useState(false);
  return (
    <div>
      <Navbar isOpenBurger={isOpenBurger} setIsOpenBurger={setIsOpenBurger} />
      <Routes>
        <Route path="/admin" element={<Admin />} />
        <Route path="/" element={<Waiting />} />
        <Route path="/home" element={<Home />} />
        <Route path="/home/:id" element={<Serie />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
