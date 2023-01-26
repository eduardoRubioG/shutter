import React from "react";
import "./ScrollHUD.scss";

interface ScrollHUDProps {
  sceneId: number;
}

const ScrollHUD = (props: ScrollHUDProps) => {
  const { sceneId } = props;
  return (
    <div className="scroll-hud">
      <div
        className={`scroll-hud__pos ${sceneId > 0 ? `p-${sceneId}` : ""}`}
      ></div>
    </div>
  );
};

export default ScrollHUD;
