import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { CgMenuBoxed, CgCloseO } from "react-icons/cg";
const Navbar = () => {
  const [openMenu, setopenMenu] = useState(false);
  return (
    <>
      <Nav>
        <div className={openMenu ? "menuIcon active" : "menuIcon"}>
          <ul className="navbar-list">
            <li>
              <NavLink
                className="navbar-link"
                to="/"
                onClick={() => setopenMenu(false)}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                className="navbar-link"
                to="/about"
                onClick={() => setopenMenu(false)}
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                className="navbar-link"
                to="/contact"
                onClick={() => setopenMenu(false)}
              >
                Contact
              </NavLink>
            </li>
            <li>
              <NavLink
                className="navbar-link"
                to="/services"
                onClick={() => setopenMenu(false)}
              >
                Services
              </NavLink>
            </li>
          </ul>
          <div className="mobile-navbar-btn">
            <CgMenuBoxed
              name="menu-outline"
              className="mobile-nav-icon"
              onClick={() => setopenMenu(true)}
            />
            <CgCloseO
              name="close-outline"
              className="close-outline mobile-nav-icon"
              onClick={() => setopenMenu(false)}
            />
          </div>
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
  .mobile-navbar-btn {
    display: none;
    .close-outline {
      display: none;
    }
  }
  .mobile-navbar-btn[name="close-outline"] {
    display: none;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .mobile-navbar-btn {
      display: inline-block;
      z-index: 999;
      border: ${({ theme }) => theme.colors.black};
      .mobile-nav-icon {
        font-size: 4.2rem;
        color: ${({ theme }) => theme.colors.black};
      }
    }
    .navbar-list {
      width: 100vw;
      height: 100vh;
      position: absolute;
      top: 0;
      left: 0;
      background-color: #fff;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      text-align: center;
      transform: translateX(100%);
      visibility:hidden;
      opacity:1;
    }
    .active .mobile-nav-icon{
      display:none;
      font-size:4.2rem;
      position:absolute;
      top:3%;
      right:10%
      color:${({ theme }) => theme.colors.black};
      z-index:999;
    }
    .active .close-outline{
      display:inline-block;
    }
    .active .navbar-list{
      visibility:visible;
      opacity: 1;
      transform: translateX(0);
      z-index:999;
    }
  }
`;
export default Navbar;
