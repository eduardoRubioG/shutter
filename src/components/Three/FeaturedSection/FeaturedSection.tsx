import React, { SyntheticEvent } from "react";
import { SSProject } from "../../../types";
import "./FeaturedSection.scss";

interface FeaturedSectionProps {
  activeProjectName: string;
  wrapperClassName?: string;
  projectsData: SSProject[];
  handleProjectSelection: (event: SyntheticEvent) => void;
}

const FeaturedSection = (props: FeaturedSectionProps) => {
  const {
    activeProjectName,
    wrapperClassName,
    projectsData,
    handleProjectSelection,
  } = props;
  return (
    <section className={`featured-section ${wrapperClassName || ""}`}>
      <div className={`featured-section__content-wrapper`}>
        <div className="featured-section__header-wrapper">
          <h2>Featured Works</h2>
          <p>Click on any project to view</p>
        </div>
        <div className="featured-section__list">
          {projectsData?.map((project: SSProject, index: number) => (
            <button
              className={`featured-section__item-btn ${
                activeProjectName === project.projectName ? "active" : ""
              }`}
              key={index}
              onClick={handleProjectSelection}
              value={project.projectName}
            >
              {project.projectName}
            </button>
          ))}
        </div>
        <div className="featured-section__footer">
          <button>See all</button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;
