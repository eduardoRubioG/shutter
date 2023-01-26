import React from "react";
import "./Nav.scss";
import { Link } from "gatsby";

import NavIcon from "../NavIcon/NavIcon";
import { useState } from "react";
import { useEffect } from "react";

const navLinks = [
  {
    text: "Home",
    url: "/",
  },
  {
    text: "The Story",
    url: "/about",
  },
  {
    text: "Pieces",
    url: "/portfolio",
  },
  {
    text: "Reach Out",
    url: "/contact",
  },
];

const Nav = () => {
  const [isOpen, setNavIsOpen] = useState(false);

  useEffect(() => {
    const menu = document.getElementById("nav-menu");

    Array.from(document.getElementsByClassName("nav__link")).forEach(
      (item, index) => {
        (item as HTMLElement).onmouseover = () => {
          menu.dataset.activeIndex = index;
        };
      }
    );
  }, []);

  return (
    <nav className="nav">
      <img
        src="/images/sm-logo-ss-vert.svg"
        alt="Primary logo small version"
      ></img>
      <NavIcon isOpen={isOpen} navCallback={setNavIsOpen} />
      <div id="nav-menu" className={`nav__content ${isOpen ? "nav-open" : ""}`}>
        <ul className="nav__list">
          {navLinks.map((link, index) => {
            return (
              <li key={index} className="nav__link">
                <Link to={link.url}>{link.text}</Link>
              </li>
            );
          })}
        </ul>
        <div className="nav__pattern"></div>
        <div className="nav__color-bar"></div>
      </div>
    </nav>
  );
};

export default Nav;
