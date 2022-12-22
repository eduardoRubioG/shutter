import React from "react";
import Nav from "../components/Nav/Nav";
import Footer from "../components/Footer/Footer";

import "../pageStyles/about.scss";

const AboutPage = () => {
  return (
    <main
      className="about"
      style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}
    >
      <Nav />

      <div className="about__splash-wrapper">
        <div className="about__title-img-block">
          <img src="/images/sun-logo.png" alt="Alternative logo"></img>
          <h2>The story.</h2>
        </div>
        <p>
          The foundation of Shutterstinct is built by the people and their
          stories. Not just a space for artists to express themselves but a
          community that challenges the current narrative of entertainment.
        </p>
      </div>

      <Footer stickToBottom />
    </main>
  );
};

export default AboutPage;
