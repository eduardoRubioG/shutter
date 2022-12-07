import React from "react";
import Nav from "../components/Nav/Nav"
import Footer from "../components/Footer/Footer";
import SplashCanvasWrapper from "../components/Three/SplashCanvasWrapper/SplashCanvasWrapper";

interface AppProps {}

const App: React.FunctionComponent<AppProps> = () => {
  return (
    <main>
      <Nav /> 
      <SplashCanvasWrapper />
      <Footer /> 
    </main>
  );
};

export default App;
