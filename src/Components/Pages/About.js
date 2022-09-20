import React, { useEffect } from "react";
import { useGlobalContext } from "../Context";
import HeroSection from "../HeroSection";

const About = () => {
  // const data = {
  //   name: "FRONTEND DEVELOPER",
  //   image:
  //     "https://media.istockphoto.com/photos/top-view-of-laptop-with-text-html5-picture-id1355140477?s=612x612",
  // };
  const { updateAboutPage } = useGlobalContext();
  useEffect(() => {
    updateAboutPage();
  }, []);
  return (
    <>
      <HeroSection />
    </>
  );
};

export default About;
