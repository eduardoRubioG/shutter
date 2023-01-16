import React, { useEffect, useState } from "react";
import "./FreshFade.scss";

interface FreshFadeProps {
  show: boolean;
  children: React.ReactNode;
  animationLength?: number;
  fullScreen?: boolean;
}

const FreshFade = (props: FreshFadeProps) => {
  const { show, children, animationLength = 500, fullScreen = false } = props;
  const [shouldRender, setRender] = useState<boolean>(show);

  useEffect(() => {
    if (show) setRender(true);
  }, [show]);

  const onAnimationEnd = () => {
    if (!show) setRender(false);
  };
  return shouldRender ? (
    <div
      className={`fresh-fade ${show ? "show" : ""} ${
        fullScreen ? "fullscreen" : ""
      }`}
      style={{
        animation: `${show ? "fadeIn" : "fadeOut"} ${animationLength}ms`,
      }}
      onAnimationEnd={onAnimationEnd}
    >
      {children}
    </div>
  ) : (
    <></>
  );
};

export default FreshFade;
