import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
const Navbar = () => {
  return (
    <>
      <Nav>
        <div className="menuIcon">
          <ul className="navbar-list">
            <li>
              <NavLink className="navbar-link" to="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink className="navbar-link" to="/about">
                About
              </NavLink>
            </li>
            <li>
              <NavLink className="navbar-link" to="/contact">
                Contact
              </NavLink>
            </li>
            <li>
              <NavLink className="navbar-link" to="/services">
                Services
              </NavLink>
            </li>
          </ul>
        </div>
      </Nav>
    </>
  );
};
const Nav = styled.nav`
  .navbar-list {
    display: flex;
    gap: 4.8rem;
    li {
      list-style: none;
      .navbar-link {
        &:link,
        &:visited {
          display: inline-block;
          text-decoration: none;
          font-size: 1.8rem;
          text-transform: uppercase;
          colors: ${({ theme }) => theme.colors.black};
          transition: color 0.3s linear;
        }
        &:hover,
        &:active {
          colors: ${({ theme }) => theme.colors.helper};
        }
      }
    }
  }
`;
export default Navbar;
