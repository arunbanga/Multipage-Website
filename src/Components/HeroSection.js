import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Button } from "./Styles/Button";
import { useGlobalContext } from "./Context";
const HeroSection = () => {
  const { name, image } = useGlobalContext();

  return (
    <>
      <Wrapper>
        <div className="container grid grid-two-columns">
          <div className="section-hero-data">
            <p className="hero-top-data">THIS IS ME</p>
            <h1 className="hero-heading">{name} </h1>
            <p className="hero-para">
              I'm Full stack developer, youtuber and freelancer.A Full stack
              Developer, Youtuber and Freelancer.
            </p>
            <Button className="btn hireme-btn">
              <NavLink to="/contact">HIRE ME</NavLink>
            </Button>
          </div>
          <div className="section-hero-image">
            <picture>
              <img className="hero-img" src={image} alt="heroimage" />
            </picture>
          </div>
        </div>
      </Wrapper>
    </>
  );
};
const Wrapper = styled.section`
  padding: 4rem 0;
  .section-hero-data {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .btn {
    max-width: 16rem;
  }
  .hero-top-data {
    text-transform: uppercase;
    font-weight: 500;
    font-size: 1.5rem;
    color: ${({ theme }) => theme.colors.helper};
  }
  .hero-heading {
    text-transform: uppercase;
    font-size: 2.4rem;
  }
  .hero-para {
    margin-top: 1.5rem;
    margin-bottom: 3.4rem;
    max-width: 60rem;
  }
  .section-hero-image {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .picture {
    text-align: center;
  }
  .hero-img {
    max-width: 65%;
    border-radius: 10px;
  }
`;

export default HeroSection;
