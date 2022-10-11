import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserLogin from "./pages/UserLogin";
import AlertPage from "./pages/AlertPage";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route index element={<Home />} />
            <Route path="/login" element={<UserLogin />} />
            <Route path="/alerts" element={<AlertPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
