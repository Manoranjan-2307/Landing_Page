import React from "react";
import { Routes, Route } from "react-router-dom";
import Navlinks from "./components/Navbar/Navlinks";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import SignIn from "./pages/Sign_in";
import Features from "./pages/Features";

const App = () => {
  return (
    <>
      <Navlinks />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/sign_in" element={<SignIn />} />
        <Route path="/features" element={<Features />} />
      </Routes>
    </>
  );
};


export default App;
