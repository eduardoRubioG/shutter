import React from "react";
import { parseVideoEmbedUrl } from "../../utils/embedUtils";

import "./Project.scss";

interface ProjectProps {
  url: string;
  name: string;
}

const Project = (props: ProjectProps) => {
  const { url, name } = props;
  const parsedVideoUrl = parseVideoEmbedUrl(url);

  return (
    <div className={`project`}>
      <span className={`project__title`}>{name}</span>
      <iframe
        src={parsedVideoUrl}
        className="project__video"
        frameBorder="0"
        allow="autoplay; fullscreen"
        allowFullScreen
      />
    </div>
  );
};

export default Project;
