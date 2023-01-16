import { OrbitControls, useContextBridge } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { useState } from "react";
import { FeatureVideoContext } from "../../AppContext/AppContext";
import ClickCanvas from "../ClickCanvas/ClickCanvas";

interface ClickCanvasWrapperProps {}

const ClickCanvasWrapper = (props: ClickCanvasWrapperProps) => {
  const [sceneId, setSceneId] = useState<number>(0);

  function handleSceneIdChange(value: "back" | "next"): void {
    let currSceneId = sceneId;
    if (value === "back") {
      currSceneId = Math.max(0, currSceneId - 1);
    }
    if (value === "next") {
      // 2 because we have a positions array of 3
      currSceneId = Math.min(2, currSceneId + 1);
    }
    setSceneId(currSceneId);
  }
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
        <OrbitControls enableZoom={false} enableRotate={false} />
        <color attach="background" args={["#101115"]} />
        <ContextBridge>
          <ClickCanvas
            sceneId={sceneId}
            handleSceneChange={handleSceneIdChange}
          />
        </ContextBridge>
      </Canvas>
    </div>
  );
};

export default ClickCanvasWrapper;
