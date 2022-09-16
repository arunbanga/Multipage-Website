import React from "react";
import Home from "./Components/Pages/Home";
import About from "./Components/Pages/About";
import Services from "./Components/Pages/Services";
import Contact from "./Components/Pages/Contact";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header&Footer/Header";
import Footer from "./Components/Header&Footer/Footer";
const App = () => {
  return (
    <>
      <div>
        <BrowserRouter>
          <div>
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/services" element={<Services />} />
            </Routes>
            <Footer />
          </div>
        </BrowserRouter>
      </div>
    </>
  );
};

export default App;
