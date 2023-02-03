import React, { useEffect } from "react";

// Components
import Nav from "../components/Nav/Nav";
import Footer from "../components/Footer/Footer";
import TeamMember from "../components/TeamMember/TeamMember";

// Styles
import "../pageStyles/about.scss";
import { graphql } from "gatsby";

import { IGatsbyImageData } from "gatsby-plugin-image";

interface TeamMember {
  biography: {
    biography: string;
  };
  jobTitle: string;
  name: string;
  quote: string;
  picture: IGatsbyImageData;
}

interface AboutPageProps {
  data: {
    allContentfulTeamMember: {
      nodes: TeamMember[];
    };
  };
}

const AboutPage = (props: AboutPageProps) => {
  useEffect(() => {
    document.body.style.overflow = "auto";
  }, []);
  const teamMembers: TeamMember[] = props.data.allContentfulTeamMember.nodes;

  const teamElements: JSX.Element[] = teamMembers
    .map((member: TeamMember, index: number) => {
      const { biography, jobTitle, name, quote, picture } = member;
      return (
        <TeamMember
          key={index}
          biography={biography.biography}
          jobTitle={jobTitle}
          name={name}
          quote={quote}
          picture={picture}
          invert={(index + 1) % 2 === 0}
        />
      );
    })
    .reverse();

  return (
    <main
      className="about"
      style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}
    >
      <Nav />

      <div className="about__splash-wrapper">
        <div className="about__title-img-block">
          <img src="/images/sun-logo.png" alt="Alternative logo"></img>
          <h2>The Story</h2>
        </div>
        <p style={{ maxWidth: "90%", marginLeft: "auto" }}>
          The foundation of Shutterstinct is built by the people and their
          stories. Not just a space for artists to express themselves but a
          community that challenges the current narrative of entertainment.
        </p>
      </div>

      {teamElements}

      <Footer stickToBottom />
    </main>
  );
};

export default AboutPage;
export const pageQuery = graphql`
  query MemberData {
    allContentfulTeamMember {
      nodes {
        biography {
          biography
        }
        name
        jobTitle
        quote
        picture {
          gatsbyImageData(layout: FULL_WIDTH, placeholder: DOMINANT_COLOR)
        }
      }
    }
  }
`;
