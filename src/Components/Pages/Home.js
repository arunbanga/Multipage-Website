import React, { useEffect } from "react";
import { useGlobalContext } from "../Context";
import HeroSection from "../HeroSection";
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
    </>
  );
};
export default Home;
