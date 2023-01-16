import { Clone, useGLTF } from "@react-three/drei";
import { useControls } from "leva";
import React from "react";
import { Group } from "three";
import { degToRad } from "three/src/math/MathUtils";
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
        rotation-z={degToRad(6)}
      />
      <Clone
        object={model.scene}
        position-x={12}
        position-y={2.3}
        position-z={30}
        rotation-x={degToRad(-6)}
      />
      <Television
        iframeUrl={iframeUrl}
        renderHtml={iframeUrl.length > 0}
        scale={2.25}
        position={[31, 4, 6]}
        rotationX={degToRad(-6)}
        rotationY={degToRad(135)}
        rotationZ={degToRad(0)}
      />
    </group>
  );
};

export default Scene;
