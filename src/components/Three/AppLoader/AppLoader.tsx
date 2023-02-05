import { Html, useProgress } from "@react-three/drei";
import React from "react";
import "./AppLoader.scss";

const AppLoader = () => {
  const { progress } = useProgress();

  return (
    <Html fullscreen>
      <div className="app-loader">
        <div className="app-loader__bar">
          <div
            className="app-loader__loaded"
            style={{
              transform: `scaleX(${Number(progress) / 100}`,
            }}
          ></div>
        </div>
        <div className="app-loader__content">
          <span className="app-loader__txt">Loading...</span>
          <span className="app-loader__number">{Math.round(progress)}</span>
        </div>
      </div>
    </Html>
  );
};

export default AppLoader;
