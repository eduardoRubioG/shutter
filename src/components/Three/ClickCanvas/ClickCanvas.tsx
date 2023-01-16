import { Float, Html } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import React, { SyntheticEvent, useContext } from "react";
import { Vector3 } from "three";
import { vectorEquals } from "../../../utils/threeUtils";
import AboutHtml from "../../AboutHtml/AboutHtml";
import { ProjectDataContext } from "../../AppContext/AppContext";
import FreshFade from "../../FreshFade/FreshFade";
import HomeHtml from "../../HomeHtml/HomeHtml";
import ChromeSphere from "../ChromeSphere/ChromeSphere";
import Effect from "../Effect/Effect";
import FeaturedSection from "../FeaturedSection/FeaturedSection";
import Scene from "../Scene/Scene";
import "./ClickCanvas.scss";

interface ClickCanvasProps {
  sceneId: number;
  handleSceneChange: (value: "back" | "next") => void;
}

interface CameraPositionByScene {
  position: Vector3;
}

const cameraPositions: CameraPositionByScene[] = [
  { position: new Vector3(24, 6, 0) },
  {
    position: new Vector3(23, 8, -12),
  },
  { position: new Vector3(44, 7, 2) },
];

const ClickCanvas = (props: ClickCanvasProps) => {
  const { sceneId, handleSceneChange } = props;
  const allProjectsData = useContext(ProjectDataContext);

  function onNext() {
    handleSceneChange("next");
  }
  function onBack() {
    handleSceneChange("back");
  }
  function handleProjectSelection(event: SyntheticEvent) {
    if (!event) return;
    const { value } = event.target as HTMLButtonElement;
    console.log(value);
  }
  useFrame((state, delta) => {
    if (
      !vectorEquals(
        state.camera.position,
        cameraPositions[sceneId].position,
        0.0000001
      )
    ) {
      const camera = new Vector3();
      camera.copy(state.camera.position);
      camera.lerp(cameraPositions[sceneId].position, 5 * delta);
      state.camera.position.copy(camera);
    }
  });

  return (
    <>
      <Effect />
      <Scene />
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
      <Float floatIntensity={0} speed={2} floatingRange={[-0.05, 0.05]}>
        <ChromeSphere position={[8.5, 4.7, 0.5]} scale={1.5} />
      </Float>
      <Html fullscreen zIndexRange={[100, 0]}>
        <section className="click-canvas">
          <FreshFade show={sceneId === 0} animationLength={550} fullScreen>
            <HomeHtml />
          </FreshFade>
          <FreshFade show={sceneId === 1} animationLength={550} fullScreen>
            <AboutHtml />
          </FreshFade>
          <FreshFade show={sceneId === 2} animationLength={550} fullScreen>
            <FeaturedSection
              projectsData={allProjectsData}
              handleProjectSelection={handleProjectSelection}
            />
          </FreshFade>
          <div className="click-canvas__scene-nav">
            <button onClick={onBack} className="click-canvas__scene-nav--btn">
              Back
            </button>
            <button onClick={onNext} className="click-canvas__scene-nav--btn">
              Next
            </button>
          </div>
        </section>
      </Html>
    </>
  );
};

export default ClickCanvas;
