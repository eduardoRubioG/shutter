import { Html, useGLTF } from "@react-three/drei";
import React, { useMemo } from "react";
import { Vector3 } from "three";
import "./Television.scss";

interface TelevisionProps {
  position?: Vector3 | number[];
  iframeUrl: string;
  rotationX?: number;
  rotationY?: number;
  rotationZ?: number;
  scale?: number;
  renderHtml?: boolean;
}

const Television = (props: TelevisionProps) => {
  const {
    position = new Vector3(0, 0, 0),
    iframeUrl,
    rotationX = 0,
    rotationY = 0,
    rotationZ = 0,
    scale = 1,
    renderHtml = false,
  } = props;
  const model = useGLTF("/models/tv.glb");
  const screenPosition = new Vector3(-0.3, 1.23, 0.8);

  const iframeElement = useMemo(() => {
    return (
      <iframe
        src={iframeUrl}
        width="658"
        height="480"
        frameBorder="0"
        allow="autoplay; fullscreen; picture-in-picture"
        allowFullScreen
      ></iframe>
    );
  }, [iframeUrl]);

  return (
    <primitive
      object={model.scene}
      position={position}
      scale={scale}
      rotation-x={rotationX}
      rotation-y={rotationY}
      rotation-z={rotationZ}
    >
      {renderHtml && (
        <>
          <rectAreaLight
            color={"white"}
            intensity={5}
            width={5}
            height={20}
            position={[0, 0, 0.6]}
            rotation-y={3.14}
          />
          <Html
            transform
            wrapperClass="television__screen"
            distanceFactor={1.1}
            position={screenPosition}
            zIndexRange={[1000, 0]}
          >
            {iframeElement}
          </Html>
        </>
      )}
    </primitive>
  );
};
useGLTF.preload("/models/tv.glb");
export default Television;
