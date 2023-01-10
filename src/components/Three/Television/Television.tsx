import { Html, useGLTF } from "@react-three/drei";
import React from "react";
import { Vector3 } from "three";
import "./Television.scss";

interface TelevisionProps {
  position?: Vector3 | number[];
  iframeUrl: string;
}

const Television = (props: TelevisionProps) => {
  const { position = new Vector3(0, 0, 0), iframeUrl } = props;
  const model = useGLTF("/models/tv.glb");
  const screenPosition = new Vector3(-0.3, 1.23, 0.8);
  return (
    <primitive object={model.scene} position={position} scale={2}>
      <Html
        transform
        wrapperClass="television__screen"
        distanceFactor={1.1}
        position={screenPosition}
      >
        <iframe
          src={iframeUrl}
          width="658"
          height="480"
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
        ></iframe>
      </Html>
    </primitive>
  );
};
useGLTF.preload("/models/tv.glb");
export default Television;
