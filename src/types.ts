export interface SSProject {
  projectName: string;
  videoUrl: string;
  isDemoReel: boolean;
  updatedAt: string;
}

export interface ProjectDataFromQuery {
  data: {
    allContentfulProject: {
      nodes: SSProject[];
    };
  };
}
