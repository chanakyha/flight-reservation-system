import React, { useEffect } from "react";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import { Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Loader from "./Loader";

const App = () => {
  useEffect(() => {
    document.title = "Fly High";
  }, []);

  return (
    <div>
      <Toaster />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/loader" element={<Loader />} />
      </Routes>
    </div>
  );
};

export default App;
