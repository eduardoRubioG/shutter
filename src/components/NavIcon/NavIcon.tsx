import React from "react";
import "./NavIcon.scss";

interface NavIconProps {
  isOpen: boolean;
  navCallback: (toggle: boolean) => void;
}

const NavIcon = (props: NavIconProps) => {
  const { navCallback, isOpen } = props;
  const menuClicked = () => {
    const _isOpen = !isOpen;
    navCallback(_isOpen);
  };

  return (
    <button
      className={`nav-icon ${isOpen ? "nav-active" : ""}`}
      onClick={menuClicked}
    >
      <span className="nav-icon__line left"></span>
      <span className="nav-icon__line "></span>
      <span className="nav-icon__line right "></span>
    </button>
  );
};

export default NavIcon;
