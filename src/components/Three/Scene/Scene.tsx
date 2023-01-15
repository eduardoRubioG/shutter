import { Clone, useGLTF } from "@react-three/drei";
import { useControls } from "leva";
import React from "react";
import { Group } from "three";
import { degToRad } from "three/src/math/MathUtils";
import Television from "../Television/Television";

interface SceneProps {
  sceneRef: React.MutableRefObject<any>;
  iframeUrl?: string;
}

const Scene = (props: SceneProps) => {
  const { sceneRef, iframeUrl = "" } = props;
  const model = useGLTF("/models/sand.glb");

  const { x, y, z, thetax, thetay, thetaz, scale } = useControls("TV", {
    x: { value: 31, step: 1, min: -100, max: 100 },
    y: { value: 4, step: 1, min: -100, max: 100 },
    z: { value: 6, step: 1, min: -100, max: 100 },
    thetax: { value: -6, step: 1, min: -360, max: 360 },
    thetay: { value: 135, step: 1, min: -360, max: 360 },
    thetaz: { value: 0, step: 1, min: -360, max: 360 },
    scale: { value: 2.25, step: 0.25, min: -3, max: 3 },
  });

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
        scale={scale}
        position={[x, y, z]}
        rotationX={degToRad(thetax)}
        rotationY={degToRad(thetay)}
        rotationZ={degToRad(thetaz)}
      />
    </group>
  );
};

export default Scene;
