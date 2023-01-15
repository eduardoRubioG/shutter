import { graphql } from "gatsby";
import React from "react";

// Contexts
import { ProjectDataContext } from "../components/AppContext/AppContext";

// Components
import GhostForm, {
  GhostFormElements,
  GhostFormTypes,
} from "../components/GhostForm/GhostForm";
import Nav from "../components/Nav/Nav";
import SplashCanvasWrapper from "../components/Three/SplashCanvasWrapper/SplashCanvasWrapper";
import { ProjectDataFromQuery } from "../types";

const App = (props: ProjectDataFromQuery) => {
  return (
    <main>
      <Nav />
      <ProjectDataContext.Provider
        value={props.data.allContentfulProject.nodes}
      >
        <SplashCanvasWrapper />
      </ProjectDataContext.Provider>

      {/* Footer rolled into the scroll composition  */}
      <GhostForm
        formName="Landing Page Contact"
        fields={[
          {
            name: "name",
            type: GhostFormTypes.TEXT,
            elementType: GhostFormElements.INPUT,
          },
          {
            name: "email",
            type: GhostFormTypes.EMAIL,
            elementType: GhostFormElements.INPUT,
          },
          {
            name: "message",
            type: GhostFormTypes.TEXT,
            elementType: GhostFormElements.INPUT,
          },
        ]}
      />
    </main>
  );
};

export default App;

export const pageQuery = graphql`
  query PortfolioQuery {
    allContentfulProject {
      nodes {
        projectName
        projectDescription {
          projectDescription
        }
        videoUrl
      }
    }
  }
`;
