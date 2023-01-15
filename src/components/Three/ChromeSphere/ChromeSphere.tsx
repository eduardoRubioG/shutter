import React from "react";
import { CubeCamera } from "@react-three/drei";

interface ChromeSphereProps {
  position?: number[];
  scale?: number;
}

const ChromeSphere = (props: ChromeSphereProps) => {
  const position = props.position || [0, 0, 0];
  const { scale = 1 } = props;
  return (
    <CubeCamera frame={1} position={[...position]}>
      {(texture) => {
        return (
          <>
            <mesh scale={scale}>
              <sphereGeometry />
              <meshStandardMaterial
                envMap={texture}
                roughness={0.1}
                metalness={1.0}
              />
            </mesh>
          </>
        );
      }}
    </CubeCamera>
  );
};

export default ChromeSphere;
