import React from "react";
import { NavLink } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
const Header = () => {
  return (
    <>
      <header>
        <NavLink to="/">
          <p>Logo</p>
        </NavLink>
        <Navbar />
      </header>
    </>
  );
};

export default Header;
