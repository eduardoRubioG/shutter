import React from "react";

import { ScrollControls } from "@react-three/drei";
import ChromeSphere from "../ChromeSphere/ChromeSphere";
import Television from "../Television/Television";
import Effects from "../Effect/Effect";
import ScrollComposition from "../ScrollComposition/ScrollComposition";

const SplashCanvas = () => {
  const scrollPageCount = 4;
  return (
    <>
      <Effects />
      <ScrollControls damping={6} pages={scrollPageCount}>
        <directionalLight intensity={10.0} position={[0, 0, 5]} color="blue" />
        <hemisphereLight intensity={0.03} />
        <rectAreaLight color={"white"} intensity={20} />

        <ScrollComposition scrollPageCount={scrollPageCount} />
        <Television position={[-8, 1, 5]} iframeUrl="" />

        <ChromeSphere position={[8.5, 4.7, 0.5]} />
      </ScrollControls>
    </>
  );
};

export default SplashCanvas;
