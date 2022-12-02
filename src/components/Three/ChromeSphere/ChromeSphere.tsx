import React from "react";
import { CubeCamera } from "@react-three/drei";

interface ChromeSphereProps {
  position?: number[]; 
}

const ChromeSphere = (props: ChromeSphereProps) => {
  const position = props.position || [0, 0, 0];
  return (
    <CubeCamera frame={1} position={[...position]}>
      {texture => {
        return (
          <>
            <mesh scale={1.4}>
              <sphereGeometry />
              <meshStandardMaterial envMap={texture} roughness={0.1} metalness={1.0} />
            </mesh>
          </>
        );
      }}
    </CubeCamera>
  );
}

export default ChromeSphere;
