import React from "react";
import "./NavIcon.scss";

interface NavIconProps {
  isOpen: boolean; 
  navCallback: (toggle: boolean) => void
}

const NavIcon = (props: NavIconProps) => {
  const { navCallback, isOpen } = props;
  const menuClicked = () => {
    const _isOpen = !isOpen;
    navCallback(_isOpen);
  };

  return (
    <button className={`nav-icon ${isOpen ? "nav-active" : ""}`} onClick={menuClicked}>
      <span></span>
      <span></span>
      <span></span>
    </button>
  );
};

export default NavIcon;
