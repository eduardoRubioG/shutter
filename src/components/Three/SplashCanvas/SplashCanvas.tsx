import React, { useRef } from "react";

import "./SplashCanvas.scss";

import {
  useGLTF,
  Scroll,
  ScrollControls,
  useScroll,
} from "@react-three/drei";
import ChromeSphere from "../ChromeSphere/ChromeSphere";
import Effects from "../Effect/Effect";
import { useFrame } from "@react-three/fiber";
import Footer from "../../Footer/Footer";

const rsqw = (t: number, delta = 0.1, a = 1, f = 1 / (2 * Math.PI)) =>
  (a / Math.atan(1 / delta)) * Math.atan(Math.sin(2 * Math.PI * t * f) / delta);

const ScrollComposition = () => {
  const scroll = useScroll();
  const scrollPageCount = 2;

  const model = useGLTF("/models/sand.glb");

  const heroSectionRef = useRef<HTMLDivElement | null>(null);
  const aboutSectionRef = useRef<HTMLDivElement | null>(null);
  const sceneRef = useRef<any | null>(null);

  useFrame((state, delta) => {
    if (scroll) {
      const r1 = scroll.range(0 / 2, 2 / 2, 0.1);
      const heroContentShouldBeVisible = scroll.visible(0, 1 / scrollPageCount); // from 0, for a single page
      const aboutContentsShouldBeVisible = scroll.visible(
        1 / scrollPageCount,
        1 / scrollPageCount
      ); // from second page, for a page

      sceneRef.current.rotation.y =
        Math.PI - (Math.PI / 2) * rsqw(r1) * 1.0;

      heroSectionRef?.current?.classList.toggle(
        "is-visible",
        heroContentShouldBeVisible
      );
      aboutSectionRef?.current?.classList.toggle(
        "is-visible",
        aboutContentsShouldBeVisible
      );
    }
  });

  return (
    <>
      <primitive ref={sceneRef} object={model.scene} position-x={0} rotat />
      <Scroll html style={{ width: "100%" }}>
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
        <Footer wrapperInlineStyles={{ position: 'absolute', width: '100%', bottom: '0' }}/>
      </Scroll>
    </>
  );
};

const SplashCanvas = () => {
  return (
    <>
      <Effects />
      <ScrollControls damping={6} pages={2}>
        <directionalLight intensity={10.0} position={[0, 0, 5]} color="blue" />
        <hemisphereLight intensity={0.03} />
        <rectAreaLight color={"white"} intensity={20} />

        <ScrollComposition />
        <ChromeSphere position={[8.5, 4.7, 0.5]} />
      </ScrollControls>
    </>
  );
};

export default SplashCanvas;
