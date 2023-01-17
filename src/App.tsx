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
import UserProfile from "./pages/UserProfile";

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
              <Route path="/profile/:id" element={<SingleProfile />} />
              <Route path="/listings/:id" element={<SingleListing />} />
            </Route>
            <Route path="/" element={<PersonalNavBar />}>
              <Route path="/:username/dashboard" element={<UserDashboard />} />
              <Route path="/:username" element={<UserProfile />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
