import { Clone, useGLTF } from "@react-three/drei";
import React from "react";
import Television from "../Television/Television";

interface SceneProps {
  sceneRef?: React.MutableRefObject<any>;
  iframeUrl?: string;
}

const Scene = (props: SceneProps) => {
  const { sceneRef, iframeUrl = "" } = props;
  const model = useGLTF("/models/sand.glb");

  return (
    <group ref={sceneRef}>
      <primitive object={model.scene} position-x={0} />
      <Clone
        object={model.scene}
        position-x={30}
        position-y={3}
        rotation-z={0.1}
      />
      <Clone
        object={model.scene}
        position-x={12}
        position-y={2.3}
        position-z={30}
        rotation-x={-0.1}
      />
      <Television
        iframeUrl={iframeUrl}
        renderHtml={iframeUrl.length > 0}
        scale={2.25}
        position={[35, 3.5, 2.5]}
        rotationX={0.052}
        rotationY={1.92}
        rotationZ={0}
      />
    </group>
  );
};

export default Scene;
