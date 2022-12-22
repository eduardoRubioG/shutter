import React from "react";
import { parseVideoEmbedUrl } from "../../utils/embedUtils";

interface FeatureSectionProps {
  sectionRef?: React.MutableRefObject<HTMLDivElement | null>; // used for scroll composition
  wrapperClassName?: string;
  featureVideoUrl: string; // set in the index.ts context
}

const FeatureSection = (props: FeatureSectionProps) => {
  const { sectionRef, wrapperClassName, featureVideoUrl } = props;
  const parsedVideoUrl = parseVideoEmbedUrl(featureVideoUrl);
  return (
    <section
      ref={sectionRef}
      className={`feature-section ${wrapperClassName || ""}`}
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h2 style={{ fontSize: "48px", marginBottom: "2rem" }}>Featured Works</h2>
      <iframe
        src={parsedVideoUrl}
        style={{
          width: "60%",
        }}
        height="500"
        frameBorder="0"
        allow="autoplay; fullscreen"
        allowFullScreen
      />
    </section>
  );
};

export default FeatureSection;
