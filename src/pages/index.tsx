import { graphql } from "gatsby";
import React, { useEffect } from "react";

// Contexts
import { ProjectDataContext } from "../components/AppContext/AppContext";

// Components
import Nav from "../components/Nav/Nav";
import ContactSection from "../components/ContactSection/ContactSection";
import Footer from "../components/Footer/Footer";
import ClickCanvasWrapper from "../components/Three/ClickCanvasWrapper/ClickCanvasWrapper";
import { ProjectDataFromQuery } from "../types";

const App = (props: ProjectDataFromQuery) => {
  useEffect(() => {
    // Adding this so that user doesn't get scroll locked
    // if they refresh post scrolling past the Canvas
    if (window && window.scrollY !== 0) {
      document.body.style.overflow = "auto";
    }
  }, []);
  return (
    <main style={{ position: "relative" }}>
      <Nav />
      <ProjectDataContext.Provider
        value={props.data.allContentfulProject.nodes}
      >
        <ClickCanvasWrapper />
      </ProjectDataContext.Provider>

      <ContactSection />
      <Footer />
    </main>
  );
};

export default App;

export const pageQuery = graphql`
  query PortfolioQuery {
    allContentfulProject {
      nodes {
        projectName
        videoUrl
        isDemoReel
        updatedAt
      }
    }
  }
`;
