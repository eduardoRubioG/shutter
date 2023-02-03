// React
import React, { SyntheticEvent, useContext, useEffect, useState } from "react";
import { ProjectDataContext } from "../../AppContext/AppContext";

// Three
import { Float, Html } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { Vector3 } from "three";
import { vectorEquals } from "../../../utils/threeUtils";

// Types
import { SSProject } from "../../../types";

// Styles
import "./ClickCanvas.scss";

// Components
import AboutHtml from "../../AboutHtml/AboutHtml";
import HomeHtml from "../../HomeHtml/HomeHtml";
import FreshFade from "../../FreshFade/FreshFade";
import SceneControls from "../../SceneControls/SceneControls";
import ChromeSphere from "../ChromeSphere/ChromeSphere";
import Effect from "../Effect/Effect";
import FeaturedSection from "../FeaturedSection/FeaturedSection";
import Lighting from "../Lighting/Lighting";
import Scene from "../Scene/Scene";

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
  const allProjectsData: SSProject[] = useContext(ProjectDataContext);
  const [activeProject, setActiveProject] = useState<SSProject>(
    allProjectsData.find((project) => project.isDemoReel) || allProjectsData[0]
  );

  useEffect(() => {
    // Sort the projects by updated time
    // append autoplay to all videos
    // If demo reel available, make it the first video
    //
    if (allProjectsData && allProjectsData.length) {
      const demoReel: SSProject | undefined = allProjectsData.find(
        (project: SSProject) => project.isDemoReel
      );
      const sortedProjects: SSProject[] = allProjectsData
        .filter((project) => !project.isDemoReel)
        .sort(function (a, b) {
          let dateA = new Date(a.updatedAt);
          let dateB = new Date(b.updatedAt);
          return (dateA as any) - (dateB as any);
        })
        .map((project: SSProject) => {
          if (!project.videoUrl.includes("&autoplay=1")) {
            return {
              ...project,
              videoUrl: project.videoUrl + "&autoplay=1",
            };
          }
          return project;
        });
      if (demoReel) {
        sortedProjects.unshift(demoReel);
      } else {
        // If demo reel is not available, remove auto play for first video
        sortedProjects[0] = {
          ...sortedProjects[0],
          videoUrl: sortedProjects[0].videoUrl.split("&autoplay=1")[0],
        };
      }
    }
  }, []);

  function onNext() {
    handleSceneChange("next");
  }
  function onBack() {
    handleSceneChange("back");
  }
  function handleProjectSelection(event: SyntheticEvent) {
    if (!event) return;
    const { value } = event.target as HTMLButtonElement; // returns project name
    const selectedProject: SSProject | undefined = allProjectsData.find(
      (project) => value === project.projectName
    );
    if (selectedProject) setActiveProject(selectedProject);
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
      <Scene iframeUrl={activeProject.videoUrl} />
      <Lighting />
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
          <FreshFade
            show={sceneId === 2}
            animationLength={350}
            fullScreen
            options={["slide-in"]}
          >
            <FeaturedSection
              activeProjectName={activeProject.projectName}
              projectsData={allProjectsData}
              handleProjectSelection={handleProjectSelection}
            />
          </FreshFade>
          <SceneControls sceneId={sceneId} onBack={onBack} onNext={onNext} />
        </section>
      </Html>
    </>
  );
};

export default ClickCanvas;
