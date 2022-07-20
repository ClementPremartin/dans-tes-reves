/* eslint-disable import/no-unresolved */
import { Routes, Route } from "react-router-dom";

import Admin from "@pages/Admin";
import Waiting from "@pages/Waiting";
import Home from "@pages/Home";
import Serie from "@pages/Serie";
import Contact from "@pages/Contact";

import "./App.css";

function App() {
  return (
    <div className="bg-lightBlue">
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
