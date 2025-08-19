// src/App.jsx
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutPage from "./pages/AboutPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AboutPage />} />
        <Route path="/signup" element={<div className="min-h-screen flex items-center justify-center">Signup placeholder</div>} />
      </Routes>
    </BrowserRouter>
  );
}
