import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../Styles/Button";
import { FaDiscord, FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <Wrapper>
        <section className="contact-short">
          <div className="grid grid-two-columns">
            <div>
              <h3>Ready to get started?</h3>
              <h3>Talk to us today</h3>
            </div>
            <div>
              <NavLink to="/">
                <Button>Get Started</Button>
              </NavLink>
            </div>
          </div>
        </section>
        <footer className="footer-bg">
          <div className="container grid grid-four-columns">
            <div className="footer-about">
              <h3>ADOBE PHOTOSHOP</h3>
              <p>Lorem ipsum dolor,sit amet consectetur adipsicing elit.</p>
            </div>
            <div className="footer-subscibe">
              <h3>Subscribe to get important updates.</h3>
              <form>
                <input
                  type="email"
                  required
                  autocomplete="off"
                  placeholder="Email"
                />
                <input type="submit" value="subscribe" />
              </form>
            </div>
            <div className="footer-social">
              <h3>Follow Us</h3>
              <div className="footer-social-icon">
                <div className="icons">
                  <FaDiscord />
                </div>
                <div className="icons">
                  <FaYoutube />
                </div>
                <div className="icons">
                  <FaInstagram />
                </div>
                <div className="icons">
                  <FaFacebook />
                </div>
              </div>
            </div>
            <div className="footer-contact">
              <h3>Call us</h3>
              <h3>+11 54652538390</h3>
            </div>
          </div>
          <div className="footer-bottom-section">
            <hr />
            <div className="container grid grid-two-columns">
              <p>
                @{new Date().getFullYear()} WebDeveloper.All Rights Reserved
              </p>
              <div>
                <p>PRIVACY POLICY</p>
                <p>TERMS & CONDITIONS</p>
              </div>
            </div>
          </div>
        </footer>
      </Wrapper>
    </>
  );
};
const Wrapper = styled.section`
  .contact-short {
    max-width: 60vw;
    margin: auto;
    padding: 5rem 10rem;
    background-color: ${({ theme }) => theme.colors.bg};
    border-radius: 1rem;
    box-shadow: ${({ theme }) => theme.colors.shadowSupport};
    transform: translateY(50%);
    .grid div:last-child {
      justify-self: end;
      align-self: center;
    }
  }
  footer {
    padding: 14rem 0 9rem 0;
    background-color: ${({ theme }) => theme.colors.footer_bg};
    h3 {
      color: ${({ theme }) => theme.colors.hr};
      margin-bottom: 2.4rem;
    }
    p {
      color: ${({ theme }) => theme.colors.white};
    }
    .footer-social-icon {
      display: flex;
      gap: 2rem;
      div {
        padding: 1rem;
        border-radius: 50%;
        border: 2px solid ${({ theme }) => theme.colors.white};
        color: ${({ theme }) => theme.colors.white};
        .icons {
          font-size: 2.4rem;
          position: realtive;
          cursor: pointer;
        }
      }
    }
    .footer-bottom-section {
      padding-top: 9rem;
      hr {
        margin-bottom: ${({ theme }) => theme.colors.hr};
        heigth: 0.1px;
      }
    }
  }
`;

export default Footer;
