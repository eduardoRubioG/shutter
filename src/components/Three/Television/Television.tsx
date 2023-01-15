import { Html, useGLTF } from "@react-three/drei";
import React from "react";
import { Vector3 } from "three";
import { parseVideoEmbedUrl } from "../../../utils/embedUtils";
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
  const url = parseVideoEmbedUrl(iframeUrl, true);
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
        <Html
          transform
          wrapperClass="television__screen"
          distanceFactor={1.1}
          position={screenPosition}
          occlude
        >
          <iframe
            src={url}
            width="658"
            height="480"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
          ></iframe>
        </Html>
      )}
    </primitive>
  );
};
useGLTF.preload("/models/tv.glb");
export default Television;
