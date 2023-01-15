export interface SSProject {
  projectName: string;
  projectDescription: {
    projectDescription: string;
  };
  videoUrl: string;
}

export interface ProjectDataFromQuery {
  data: {
    allContentfulProject: {
      nodes: SSProject[];
    };
  };
}
