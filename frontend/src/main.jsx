import React from "react";
import ReactDOM from "react-dom/client";
import { ToastContainer } from "react-toastify";
import { BrowserRouter } from "react-router-dom";
import UserExport from "./contexts/UserContext";

import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <UserExport.ContextProvider>
      <BrowserRouter>
        <App />
        <ToastContainer className="toast-position" autoClose={1500} />
      </BrowserRouter>
    </UserExport.ContextProvider>
  </React.StrictMode>
);
