import React from "react";

import { Float, ScrollControls } from "@react-three/drei";
import ChromeSphere from "../ChromeSphere/ChromeSphere";
import Effects from "../Effect/Effect";
import ScrollComposition from "../ScrollComposition/ScrollComposition";
import { useControls } from "leva";

const SplashCanvas = () => {
  const scrollPageCount = 4;

  const { rwidth, rheight, x, y, z, thetax, thetay, thetaz, intensity } =
    useControls("Light panel", {
      rheight: {
        value: 10,
        step: 1,
      },
      rwidth: {
        value: 200,
        step: 1,
      },
      x: { value: -23, step: 1 },
      y: { value: -1, step: 1 },
      z: { value: 0, step: 1 },
      thetax: { value: 3, step: 1 },
      thetay: { value: 4.5, step: 1 },
      thetaz: { value: 0, step: 1 },
      intensity: { value: 20, step: 1 },
    });
  return (
    <>
      <Effects />
      <ScrollControls damping={6} pages={scrollPageCount}>
        <directionalLight intensity={10.0} position={[0, 0, 5]} color="blue" />
        <hemisphereLight intensity={0.03} />

        <rectAreaLight
          color={"white"}
          intensity={intensity}
          width={rwidth}
          height={rheight}
          position={[x, y, z]}
          rotation-x={thetax}
          rotation-y={thetay}
          rotation-z={thetaz}
        />

        <ScrollComposition scrollPageCount={scrollPageCount} />

        <Float floatIntensity={0} speed={2} floatingRange={[-0.05, 0.05]}>
          <ChromeSphere position={[8.5, 4.7, 0.5]} scale={1.5} />
        </Float>
      </ScrollControls>
    </>
  );
};

export default SplashCanvas;
