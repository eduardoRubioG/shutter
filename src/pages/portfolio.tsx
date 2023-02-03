import React from "react";

// Components
import Nav from "../components/Nav/Nav";
import Footer from "../components/Footer/Footer";

// Styles
import "../pageStyles/portfolio.scss";

// CMS
import { graphql } from "gatsby";
import Project from "../components/Project/Project";

// types
import { ProjectDataFromQuery, SSProject } from "../types";

const PortfolioPage = (props: ProjectDataFromQuery) => {
  document.body.style.overflow = "auto";
  const projectList: SSProject[] = props.data.allContentfulProject.nodes;
  const projectElements: JSX.Element[] = projectList
    .filter((project: SSProject) => !project.isDemoReel)
    .map((project: SSProject, index: number) => {
      const { videoUrl, projectName } = project;
      return <Project key={index} url={videoUrl} name={projectName} />;
    });
  return (
    <main
      className="portfolio"
      style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}
    >
      <Nav />
      <h1>Pieces</h1>
      {projectElements}
      <Footer stickToBottom />
    </main>
  );
};

export default PortfolioPage;
export const pageQuery = graphql`
  query PortfolioQuery {
    allContentfulProject {
      nodes {
        projectName
        videoUrl
        isDemoReel
        updatedAt
      }
    }
  }
`;
