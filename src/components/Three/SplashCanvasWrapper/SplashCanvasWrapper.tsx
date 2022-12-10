import React from "react";

// ThreeJs
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import SplashCanvas from "../SplashCanvas/SplashCanvas";

const SplashCanvasWrapper = () => {
  return (
    <div style={{ height: '100vh'}}>
      <Canvas
        camera={{
          fov: 45,
          near: 0.1,
          far: 200,
          position: [21, 4, 0],
        }}
      >
        <color attach="background" args={["#101115"]} />
        <fog attach="fog" color="black" near={.1} far={250} />

        <SplashCanvas />

      </Canvas>
    </div>
  );
};

export default SplashCanvasWrapper;
