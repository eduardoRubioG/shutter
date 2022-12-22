import React from "react";
import ContactSection from "../components/ContactSection/ContactSection";
import Nav from "../components/Nav/Nav"
import SplashCanvasWrapper from "../components/Three/SplashCanvasWrapper/SplashCanvasWrapper";

interface AppProps {}

const App: React.FunctionComponent<AppProps> = () => {
  return (
    <main>
      <Nav /> 
      <SplashCanvasWrapper />
      {/* Footer rolled into the scroll composition  */}
      <ContactSection />
    </main>
  );
};

export default App;
