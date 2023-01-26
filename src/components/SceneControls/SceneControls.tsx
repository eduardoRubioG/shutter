import React from "react";
import "./SceneControls.scss";

interface SceneControlsProps {
  sceneId: number;
  onNext: () => void;
  onBack: () => void;
}

const SceneControls = (props: SceneControlsProps) => {
  const { onBack, onNext, sceneId } = props;

  function onNextWrapper() {
    // Scroll to contact section if all scenes have been visited
    if (sceneId === 2 && window?.innerHeight) {
      document.body.style.overflow = "auto";
      window.scrollBy({
        top: window.innerHeight,
        left: 0,
        behavior: "smooth",
      });
      return;
    }
    onNext();
  }

  return (
    <div className="scene-controls">
      <div className="scene-controls__btn-wrapper">
        <button onClick={onBack} disabled={sceneId === 0}>
          Back
        </button>
        <button onClick={onNextWrapper}>Next</button>
      </div>
      <span>Click to navigate</span>
    </div>
  );
};

export default SceneControls;
