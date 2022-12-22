import React from "react";
import GhostForm, {
  GhostFormElements,
  GhostFormTypes,
} from "../components/GhostForm/GhostForm";
import Nav from "../components/Nav/Nav";
import SplashCanvasWrapper from "../components/Three/SplashCanvasWrapper/SplashCanvasWrapper";

interface AppProps {}

const App: React.FunctionComponent<AppProps> = () => {
  return (
    <main>
      <Nav />
      <SplashCanvasWrapper />
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
