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
        <Route path="/Landing_Page/" element={<Home />} />
        <Route path="/Landing_Page/about" element={<About />} />
        <Route path="/Landing_Page/contact" element={<Contact />} />
        <Route path="/Landing_Page/sign_in" element={<SignIn />} />
        <Route path="/Landing_Page/features" element={<Features />} />
      </Routes>
    </>
  );
};


export default App;
