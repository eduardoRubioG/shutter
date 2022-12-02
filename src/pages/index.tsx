import React from "react";
import Nav from "../components/Nav/Nav"
import SplashCanvasWrapper from "../components/Three/SplashCanvasWrapper/SplashCanvasWrapper";

interface AppProps {}

const App: React.FunctionComponent<AppProps> = () => {
  return (
    <main>
      <Nav /> 
      <SplashCanvasWrapper />
    </main>
  );
};

export default App;
