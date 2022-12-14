import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserLogin from "./pages/UserLogin";
import Home from "./pages/Home";
import Listings from "./pages/Listings";
import SingleListing from "./pages/SingleListing";
import PersonalNavBar from "./components/PersonalNavBar";
import UserDashboard from "./pages/UserDashboard";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SingleProfile from "./pages/SingleProfile";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Footer />}>
            <Route path="/" element={<Navbar />}>
              <Route index element={<Home />} />
              <Route path="/login" element={<UserLogin />} />
              <Route path="/listings" element={<Listings />} />
              <Route path="/listings/:id" element={<SingleListing />} />
              <Route path="/profile/:id" element={<SingleProfile />} />
            </Route>
            <Route path="/" element={<PersonalNavBar />}>
              <Route path="/user/:id/dashboard" element={<UserDashboard />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
