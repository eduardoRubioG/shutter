import React from "react";
import "./TeamMember.scss";
import { GatsbyImage, getImage, IGatsbyImageData } from "gatsby-plugin-image";

interface TeamMemberProps {
  biography: string;
  jobTitle: string;
  name: string;
  quote: string;
  picture: IGatsbyImageData;
  invert?: boolean;
}

const TeamMember = (props: TeamMemberProps) => {
  const { biography, jobTitle, name, quote, picture, invert } = props;
  const image = getImage(picture) as IGatsbyImageData;
  return (
    <div className={`team-member ${!invert ? "invert" : ""}`}>
      <div
        className={`team-member__content-wrapper ${!invert ? "invert" : ""}`}
      >
        <span className="team-member__name">{name}</span>
        <span className="team-member__job-title">{jobTitle}</span>
        <p className="team-member__bio">{biography}</p>
        <span className="team-member__quote">{`"${quote}"`}</span>
      </div>
      <GatsbyImage className="team-member__img" image={image} alt={name} />
    </div>
  );
};

export default TeamMember;
