import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserLogin from "./pages/UserLogin";
import Home from "./pages/Home";
import Listings from "./pages/Listings";
import SingleListing from "./pages/SingleListing";
import PersonalNavBar from "./components/PersonalNavBar";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SingleProfile from "./pages/SingleProfile";
import UserProfile from "./pages/UserProfile";
import AboutPage from "./pages/About";

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
              <Route path="/profile/:username" element={<SingleProfile />} />
              <Route path="/listings/:id" element={<SingleListing />} />
              <Route path="/about" element={<AboutPage />} />
            </Route>
            <Route path="/" element={<PersonalNavBar />}>
              <Route
                path="/in/:username/listings/:id"
                element={<SingleListing />}
              />
              <Route path="/in/:username/home" element={<Home />} />
              <Route path="/in/:username/listings" element={<Listings />} />
              <Route path="/in/:username" element={<UserProfile />} />
              <Route
                path="/in/:user/profile/:username"
                element={<SingleProfile />}
              />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
