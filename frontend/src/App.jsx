/* eslint-disable import/no-unresolved */
import { Routes, Route } from "react-router-dom";
import { useContext } from "react";

import DashboardLayout from "@components/layout/DashBoardLayout";
import ProtectedRoute from "@components/layout/ProtectRoute";

import Admin from "@pages/Admin";
import Waiting from "@pages/Waiting";
import Home from "@pages/Home";
import Serie from "@pages/Serie";
import Contact from "@pages/Contact";
import AdminArtCreation from "@pages/AdminArtCreation";

import UserExport from "./contexts/UserContext";

import "./App.css";

function App() {
  const { user } = useContext(UserExport.UserContext);

  return (
    <div className="bg-lightBlue">
      <Routes>
        <Route path="/" element={<Waiting />} />
        <Route path="/home" element={<Home />} />
        <Route path="/home/:id" element={<Serie />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/admin/login" element={<Admin />} />
        <Route
          path="/admin/"
          element={
            <ProtectedRoute user={user}>
              <DashboardLayout />
            </ProtectedRoute>
          }
        >
          <Route path="artcreation" element={<AdminArtCreation />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
