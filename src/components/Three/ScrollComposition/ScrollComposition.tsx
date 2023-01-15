// React / Contexts
import React, { SyntheticEvent, useContext, useRef, useState } from "react";
import {
  FeatureVideoContext,
  ProjectDataContext,
} from "../../AppContext/AppContext";

// DREI
import { Scroll, useScroll } from "@react-three/drei";

// R3F
import { useFrame } from "@react-three/fiber";

// Components
import ContactSection from "../../ContactSection/ContactSection";
import Footer from "../../Footer/Footer";
import Scene from "../Scene/Scene";

// Styles
import "./ScrollComposition.scss";

// Types
import { Vector3 } from "three";

// Utils
import { rsqw, scrollBetweenTwoVectors } from "../../../utils/threeUtils";
import FeaturedSection from "../FeaturedSection/FeaturedSection";

export interface ScrollCompositionProps {
  scrollPageCount: number;
}
const ScrollComposition = (props: ScrollCompositionProps) => {
  const allProjectsData = useContext(ProjectDataContext);
  const [currentSelectedVideo, setCurrentSelectedVideo] = useState<string>("");

  const handleProjectSelection = (event: SyntheticEvent) => {
    if (!event) return;
    const { value } = event.target as HTMLButtonElement;
    setCurrentSelectedVideo(value);
  };

  const scroll = useScroll();
  const { scrollPageCount } = props;
  const cameraPositionStart = new Vector3(24, 6, 0);
  // const cameraPositionTvView = new Vector3(57.4, 14.3, 3.5);
  const cameraPositionTvView = new Vector3(57.4, 10, 3.5);
  const camSpeed = 0.5;

  const heroSectionRef = useRef<HTMLDivElement | null>(null);
  const aboutSectionRef = useRef<HTMLDivElement | null>(null);
  const featureSectionRef = useRef<HTMLDivElement | null>(null);
  const sceneRef = useRef<any | null>(null);

  useFrame((state, delta) => {
    if (scroll) {
      const r1 = scroll.range(0 / 2, 2 / 2, 0.1);
      const heroContentShouldBeVisible = scroll.visible(0, 1 / scrollPageCount); // from 0, for a single page
      const aboutContentsShouldBeVisible = scroll.visible(
        1 / scrollPageCount,
        1 / scrollPageCount
      ); // from second page, for a page
      const featureSectionShouldBeVisible = scroll.visible(
        2 / scrollPageCount,
        1 / scrollPageCount
      );

      const camScrollAlpha = scroll.range(
        2 / scrollPageCount,
        1 / scrollPageCount
      );

      state.camera.position.copy(
        scrollBetweenTwoVectors(
          cameraPositionStart,
          cameraPositionTvView,
          state.camera.position,
          camSpeed,
          camScrollAlpha,
          delta
        )
      );

      sceneRef.current.rotation.y = -1 + rsqw(r1) * 1.0;

      heroSectionRef?.current?.classList.toggle(
        "is-visible",
        heroContentShouldBeVisible
      );
      aboutSectionRef?.current?.classList.toggle(
        "is-visible",
        aboutContentsShouldBeVisible
      );
      featureSectionRef?.current?.classList.toggle(
        "is-visible",
        featureSectionShouldBeVisible
      );
    }
  });

  return (
    <>
      <Scene sceneRef={sceneRef} iframeUrl={currentSelectedVideo} />
      <Scroll html>
        {/* HERO ABOVE THE FOLD SECTION */}
        <section ref={heroSectionRef} className="scroll-composition__hero">
          <div className="scroll-composition__hero-content">
            <img
              className="scroll-composition__hero-title"
              src="/images/logo-vert-white.svg"
              alt="Primary logo"
            ></img>
            <p className="scroll-composition__hero-sub">The story told</p>
          </div>
        </section>

        {/* ABOUT SECTION  */}
        <section ref={aboutSectionRef} className="scroll-composition__about">
          <h2>What we do.</h2>
          <p>
            Shutterstinct is more than a standard production house. A team of
            industry professionals gathered together with one purpose: to
            reestablish the film industry. Connecting people through
            community-driven filmmaking is our first priority. We develop
            artistically confident pieces that tell the story in an authentic
            way. Because at Shutterstinct we believe that authenticity tells the
            greatest story of all.{" "}
          </p>
        </section>

        {/* <FeatureSection
          sectionRef={featureSectionRef}
          featureVideoUrl={featureVideoUrl}
          wrapperClassName="scroll-composition__contact"
        /> */}
        <FeaturedSection
          sectionRef={featureSectionRef}
          wrapperClassName="scroll-composition__contact"
          projectsData={allProjectsData}
          handleProjectSelection={handleProjectSelection}
        />

        {/* CONTACT SECTION */}
        <ContactSection wrapperClassName="scroll-composition__contact is-visible" />

        <Footer
          wrapperInlineStyles={{
            position: "absolute",
            width: "100%",
            bottom: "0",
          }}
        />
      </Scroll>
    </>
  );
};

export default ScrollComposition;
