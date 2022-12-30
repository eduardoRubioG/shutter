import React from "react";
import { parseVideoEmbedUrl } from "../../utils/embedUtils";

import "./Project.scss";

interface ProjectProps {
  description: string;
  url: string;
  name: string;
  count: number;
  isRight?: boolean;
}

const formatProjectCount = (value: number): string => {
  if (!value) return "";
  const svalue = value.toString();
  if (svalue.length === 1) {
    return "00" + svalue;
  }
  if (svalue.length === 2) {
    return "0" + svalue;
  }
  return svalue;
};

const addClassNameIfRight = (isRight: boolean): string => {
  return isRight ? "--is-right" : "";
};

const Project = (props: ProjectProps) => {
  const { description, url, name, count, isRight = false } = props;
  const parsedVideoUrl = parseVideoEmbedUrl(url);

  return (
    <div className={`project ${addClassNameIfRight(isRight)}`}>
      <span className={`project__count ${addClassNameIfRight(isRight)}`}>
        {formatProjectCount(count)}
      </span>
      <span className={`project__title ${addClassNameIfRight(isRight)}`}>
        {name}
      </span>
      <iframe
        src={parsedVideoUrl}
        className="project__video"
        frameBorder="0"
        allow="autoplay; fullscreen"
        allowFullScreen
      />
      <p className="project__description">{description}</p>
    </div>
  );
};

export default Project;
