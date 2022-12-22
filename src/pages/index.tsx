import { graphql } from "gatsby";
import React from "react";

// Contexts
import { FeatureVideoContext } from "../components/AppContext/AppContext";

// Components
import GhostForm, {
  GhostFormElements,
  GhostFormTypes,
} from "../components/GhostForm/GhostForm";
import Nav from "../components/Nav/Nav";
import SplashCanvasWrapper from "../components/Three/SplashCanvasWrapper/SplashCanvasWrapper";

interface AppProps {
  data: any;
}

const App = (props: AppProps) => {
  return (
    <main>
      <Nav />
      <FeatureVideoContext.Provider
        value={props.data.contentfulProject.videoUrl}
      >
        <SplashCanvasWrapper />
      </FeatureVideoContext.Provider>

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
  query MyQuery {
    contentfulProject {
      projectName
      projectDescription {
        projectDescription
      }
      videoUrl
    }
  }
`;
