import React, { SyntheticEvent } from "react";
import { SSProject } from "../../../types";
import "./FeaturedSection.scss";

interface FeaturedSectionProps {
  sectionRef?: React.MutableRefObject<HTMLDivElement | null>; // used for scroll composition
  wrapperClassName?: string;
  projectsData: SSProject[];
  handleProjectSelection: (event: SyntheticEvent) => void;
}

const FeaturedSection = (props: FeaturedSectionProps) => {
  const { sectionRef, wrapperClassName, projectsData, handleProjectSelection } =
    props;
  return (
    <section
      ref={sectionRef}
      className={`featured-section ${wrapperClassName || ""}`}
    >
      <div className="featured-section__content-wrapper">
        <h2 style={{ fontSize: "48px", marginBottom: "2rem" }}>
          Featured Works
        </h2>
        {projectsData?.map((project: SSProject, index: number) => (
          <button
            className="featured-section__item-btn"
            key={index}
            onClick={handleProjectSelection}
            value={project.videoUrl}
          >
            {project.projectName}
          </button>
        ))}
      </div>
    </section>
  );
};

export default FeaturedSection;
