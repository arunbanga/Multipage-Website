import React, { useEffect } from "react";
import { useGlobalContext } from "../Context";
import HeroSection from "../HeroSection";
import Services from "../Pages/Services";
import Contact from "../Pages/Contact";
const Home = () => {
  // const data = {
  //   name: "WEB DESIGER",
  //   image: "",
  // };
  const { updateHomePage } = useGlobalContext();
  useEffect(() => updateHomePage(), []);
  return (
    <>
      <HeroSection />
      <Services />
      <Contact />
    </>
  );
};
export default Home;
