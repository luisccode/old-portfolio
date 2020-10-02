import React from "react";
import Section from "../section";
import Separator from "../separator";
import Project from "./project";
import mixins from "../../mixins";
import { Title, Paragraph } from "../typography";
import Button from "../button";
import { Link } from "gatsby";
import usePortfolio from "../../hooks/usePortfolio";
import styled from "styled-components";

const ProjectContainer = styled.div`
  margin: 2rem 0;
  ${mixins.flexCenter}
  @media (min-width: 500px) {
    justify-content: space-between;
    &::after {
      content: "";
      flex-basis: calc(33.3% - 6rem);
    }
  }
  flex-wrap: wrap;
  @media (min-width: ${(props) => props.theme.size.tablet}) {
    margin: 4rem 0;
  }
`;
const Portfolio = ({ getAllProjects = false, hide = false }) => {
  const nodes = usePortfolio(getAllProjects);
  return (
    <Section id="portfolio" hideSeparator={hide}>
      <Separator />
      <Title tag="h3">My Portfolio</Title>
      <Paragraph margin="1.5rem 0">
        These are some of my personal and freelance projects that I can show
        you. feel free to reach me and I’ll craft a custom experience for you.
      </Paragraph>
      <ProjectContainer>
        {nodes.map((project) => (
          <Project data={project} key={project.name} />
        ))}
      </ProjectContainer>
      {!hide && (
        <Button margin="0 auto" tag={Link} to="/portfolio">
          View All
        </Button>
      )}
    </Section>
  );
};
export default Portfolio;
