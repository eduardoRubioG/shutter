// @ts-nocheck
import React from "react";

import { Clone, Float, useGLTF } from "@react-three/drei";
import ChromeSphere from "../ChromeSphere/ChromeSphere";
import Effects from "../Effect/Effect";

const SplashCanvas = () => {
  const model = useGLTF("/models/sand.glb");

  return (
    <>
      <Effects />
      <directionalLight intensity={10.0} position={[0, 0, 5]} color="blue" />
      <hemisphereLight intensity={0.03} />
      <rectAreaLight color={"white"} intensity={20} />

      {/* Looks like ts is picking up a missing type error here though all props are optional
      reporting a bug and leaving a no check for now */}
      <Float
        speed={1} // Animation speed, defaults to 1
        rotationIntensity={5} // XYZ rotation intensity, defaults to 1
        floatIntensity={1} // Up/down float intensity, works like a multiplier with floatingRange,defaults to 1
        floatingRange={[4, 5]}
      >
        <ChromeSphere position={[8.5, 4.7, 0.5]} />
      </Float>

      <primitive object={model.scene} position-x={0} />
        {/* <Clone object={model.scene} position-x={-21.75} /> */}
    </>
  );
};

export default SplashCanvas;
