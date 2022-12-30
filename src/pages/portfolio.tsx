import React from "react";

// Components
import Nav from "../components/Nav/Nav";
import Footer from "../components/Footer/Footer";

// Styles
import "../pageStyles/portfolio.scss";

// CMS
import { graphql } from "gatsby";
import Project from "../components/Project/Project";

interface SSProject {
  projectName: string;
  projectDescription: {
    projectDescription: string;
  };
  videoUrl: string;
}
interface PortfolioPageProps {
  data: {
    allContentfulProject: {
      nodes: SSProject[];
    };
  };
}

const PortfolioPage = (props: PortfolioPageProps) => {
  const projectList: SSProject[] = props.data.allContentfulProject.nodes;
  const projectElements: JSX.Element[] = projectList.map(
    (project: SSProject, index: number) => {
      const { projectDescription, videoUrl, projectName } = project;
      return (
        <Project
          key={index}
          count={index + 1}
          url={videoUrl}
          name={projectName}
          description={projectDescription.projectDescription}
          isRight={(index + 1) % 2 === 0}
        />
      );
    }
  );
  return (
    <main
      className="portfolio"
      style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}
    >
      <Nav />
      <h1>Our works</h1>
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
        projectDescription {
          projectDescription
        }
        videoUrl
      }
    }
  }
`;
