import React from "react";
import "./HomeHtml.scss";

const HomeHtml = () => {
  return (
    <div className="hero-html">
      <div className="hero-html__content">
        <img
          className="hero-html__title"
          src="/images/logo-vert-white.svg"
          alt="Primary logo"
        ></img>
        <p className="hero-html__sub">The story told</p>
      </div>
    </div>
  );
};

export default HomeHtml;
