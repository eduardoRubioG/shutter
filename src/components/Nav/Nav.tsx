import React from "react";
import "./Nav.scss";

import NavIcon from "../NavIcon/NavIcon";
import { useState } from "react";
import { useEffect } from "react";

const navLinks = [
  {
    text: "Home",
    url: "/"
  },
  {
    text: "The Story",
    url: "/"
  },
  {
    text: "Portfolio",
    url: "/"
  },
  {
    text: "Contact Us",
    url: "/"
  }
];

const Nav = () => {
  const [isOpen, setNavIsOpen] = useState(false);

  useEffect(() => {
    const menu = document.getElementById("nav-menu");

    Array.from(document.getElementsByClassName("nav__link")).forEach((item, index) => {
      (item as HTMLElement).onmouseover = () => {
        menu.dataset.activeIndex = index;
      };
    });
  }, []);

  return (
    <nav className="nav">
      <NavIcon isOpen={isOpen} navCallback={setNavIsOpen} />
      <ul id="nav-menu" className={`nav__content ${isOpen ? "nav-open" : ""}`}>
        {navLinks.map((link, index) => {
          return (
            <li key={index} className="nav__link">
              <a href={link.url}>{link.text}</a>
            </li>
          );
        })}
        <div className="nav__pattern"></div>
        <div className="nav__color-bar"></div>
      </ul>
    </nav>
  );
};

export default Nav;
