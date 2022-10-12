import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserLogin from "./pages/UserLogin";
import AlertDashBoard from "./components/AlertDashBoard";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Listings from "./pages/Listings";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route index element={<Home />} />
            <Route path="/login" element={<UserLogin />} />
            <Route path="/listings" element={<Listings />} />
          </Route>
          <Route path="/user" element={<AlertDashBoard />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
