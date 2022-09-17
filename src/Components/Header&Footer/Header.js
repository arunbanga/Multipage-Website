import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Navbar from "../Navbar/Navbar";
const Header = () => {
  return (
    <>
      <MainHeader>
        <NavLink to="/">
          <h1 className="logo">Adobe Photoshop</h1>
        </NavLink>
        <Navbar />
      </MainHeader>
    </>
  );
};

const MainHeader = styled.header`
  padding: 0 4.8rem;
  height: 10rem;
  background-color: ${({ theme }) => theme.colors.bg};
  display: flex;
  justify-content: space-between;
  align-items: center;
  .logo {
    max-width: 30%;
    color: black;
    height: auto;
  }
`;
export default Header;
