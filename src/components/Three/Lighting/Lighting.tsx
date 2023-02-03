import React from "react";
interface LightingProps {}

const Lighting = (props: LightingProps) => {
  return (
    <>
      <directionalLight intensity={10.0} position={[0, 0, 5]} color="blue" />
      <hemisphereLight intensity={0.03} />
      <rectAreaLight
        color={"white"}
        intensity={20}
        width={200}
        height={10}
        position={[-23, -1, 0]}
        rotation-x={3}
        rotation-y={4.5}
        rotation-z={0}
      />
      <rectAreaLight
        color={"white"}
        intensity={10}
        width={10}
        height={10}
        position={[43, 14, 0]}
        rotation-x={0}
        rotation-y={2.51}
        rotation-z={0}
      />
    </>
  );
};

export default Lighting;
