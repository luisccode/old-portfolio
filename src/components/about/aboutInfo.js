import React from "react";
import { Title, Paragraph } from "../typography";
import { Link } from "gatsby";
import SkillsBar from "./skillsBar";
import Button from "../button";
import styled from "styled-components";
import mixins from "../../mixins";

const AboutInfoContainer = styled.div`
  padding: 0 2rem;
  @media (min-width: ${(props) => props.theme.size.tablet}) {
    flex-basis: calc(45%);
  }
`;
const ButtonContainer = styled.div`
  ${mixins.flexAround}
  @media (min-width: ${(props) => props.theme.size.tablet}) {
    justify-content: flex-start;
  }
`;
const AboutInfo = ({ content, skills, isInternalPage }) => {
  return (
    <AboutInfoContainer>
      <Title tag="h3">About Me</Title>
      <Paragraph margin="1.35rem 0" textAlign="left">
        {content}
      </Paragraph>
      <SkillsBar skills={skills} />
      <ButtonContainer>
        <Button margin="2rem 2rem 2rem 0" tag={Link} to="/contact">
          Hire Me
        </Button>
        {!isInternalPage && (
          <Button
            margin="2rem 2rem 2rem 0"
            tag={Link}
            border="1px solid #fff"
            bgcolor="tranparent"
            to="/about"
          >
            About Me
          </Button>
        )}
      </ButtonContainer>
    </AboutInfoContainer>
  );
};
export default AboutInfo;
