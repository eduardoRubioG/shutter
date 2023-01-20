import { graphql } from "gatsby";
import React from "react";

// Contexts
import { ProjectDataContext } from "../components/AppContext/AppContext";

// Components
import Nav from "../components/Nav/Nav";
import ContactSection from "../components/ContactSection/ContactSection";
import Footer from "../components/Footer/Footer";
import ClickCanvasWrapper from "../components/Three/ClickCanvasWrapper/ClickCanvasWrapper";
import SplashCanvasWrapper from "../components/Three/SplashCanvasWrapper/SplashCanvasWrapper";
import { ProjectDataFromQuery } from "../types";

const App = (props: ProjectDataFromQuery) => {
  return (
    <main>
      <Nav />
      <ProjectDataContext.Provider
        value={props.data.allContentfulProject.nodes}
      >
        {/* <SplashCanvasWrapper /> */}
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
