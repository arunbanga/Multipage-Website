import React from "react";
import Home from "./Components/Pages/Home";
import About from "./Components/Pages/About";
import Services from "./Components/Pages/Services";
import Contact from "./Components/Pages/Contact";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header&Footer/Header";
import Footer from "./Components/Header&Footer/Footer";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./Components/GlobalStyle";
const App = () => {
  const theme = {
    colors: {
      heading: "black",
      text: "black",
      white: "#fff",
      black: "#212529",
      helper: "#8490ff",
      bg: "rgb(249,249,255)",
      footer_bg: "#0a1435",
      btn: "rgb(98 84 243)",
      border: "rgba(98,84,243,0.5)",
      hr: "#ffffff",
      gradient:
        "linear-gradient,(0deg,rgb(132 144 255) 0%,rgb(98 189 252) 100%)",
      shadow:
        "rgba(0,0,0,0.2) 0px 1px 3px 0px,rgba(27,31,35,0.15) 0px 0px 0px 1px;",
      shadowSupport: "rgba(0,0,0,0.16)0px 1px 4px",
    },
    media: { mobile: "768px", tab: "998px" },
  };
  return (
    <>
      <div>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
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
        </ThemeProvider>
      </div>
    </>
  );
};

export default App;
