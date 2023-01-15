import React from "react";

// ThreeJs
import { Canvas } from "@react-three/fiber";
import SplashCanvas from "../SplashCanvas/SplashCanvas";
import { OrbitControls, useContextBridge } from "@react-three/drei";
import { FeatureVideoContext } from "../../AppContext/AppContext";

const SplashCanvasWrapper = () => {
  // Necessary to pass context into R3F canvas
  const ContextBridge = useContextBridge(FeatureVideoContext);
  return (
    <div style={{ height: "100vh" }}>
      <Canvas
        camera={{
          fov: 45,
          near: 0.1,
          far: 200,
          position: [24, 6, 0],
        }}
      >
        <color attach="background" args={["#101115"]} />
        <fog attach="fog" color="black" near={0.1} far={250} />
        <ContextBridge>
          <SplashCanvas />
        </ContextBridge>
      </Canvas>
    </div>
  );
};

export default SplashCanvasWrapper;
