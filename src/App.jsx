import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar";

import Home from "./component/responsivenavbar/Home";
import About from "./component/responsivenavbar/About";
import Explore from "./component/responsivenavbar/Explore";
import Contact from "./component/responsivenavbar/Contact";

import Login from "./component/button/Login";
import Signup from "./component/button/Signup";
import Footer from "./component/footer/Footer";
import Hero from "./component/hero/Hero";
import Hero2 from "./component/hero/Hero2";
import Hero4 from "./component/hero/Hero4";
import HomeHero from "./component/hero/HomeHero";

const App = () => {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home />
              <HomeHero />
              <Hero2 />
              <Hero />
              <Hero4 />

              <Footer />
            </>
          }
        />
        <Route
          path="/home"
          element={
            <>
              <Home />

              <HomeHero />
              <Hero2 />

              <Hero />
              <Hero4 />

              <Footer />
            </>
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
      </Routes>
    </Router>
  );
};

export default App;
