import React, { useEffect, useState } from "react";
import "./FreshFade.scss";

interface FreshFadeProps {
  show: boolean;
  children: React.ReactNode;
  animationLength?: number;
  fullScreen?: boolean;
  options?: ["slide-in"];
}

const FreshFade = (props: FreshFadeProps) => {
  const {
    show,
    children,
    animationLength = 500,
    fullScreen = false,
    options = [],
  } = props;
  const [shouldRender, setRender] = useState<boolean>(show);
  const shouldSlideIn = options.length && options.includes("slide-in");

  useEffect(() => {
    if (show) setRender(true);
  }, [show]);

  function determineKeyFrame() {
    if (shouldSlideIn) {
      return show ? "slideIn" : "slideOut";
    }
    return show ? "fadeIn" : "fadeOut";
  }

  const onAnimationEnd = () => {
    if (!show) setRender(false);
  };
  return shouldRender ? (
    <div
      className={`fresh-fade ${[...options]} ${show ? "show" : ""} ${
        fullScreen ? "fullscreen" : ""
      }`}
      style={{
        animation: `${determineKeyFrame()} ${animationLength}ms`,
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
