import React from "react";
import Section from "../section";
import AboutInfo from "./aboutInfo";
import mixins from "../../mixins";
import styled from "styled-components";
import useAbout from "../../hooks/useAbout";
import Img from "gatsby-image";

const SectionComponent = styled(Section)`
  padding-top: 2rem;
  @media (min-width: ${(props) => props.theme.size.tablet}) {
    ${mixins.flexEvenly}
    align-items: center;
    padding-top: 4rem !important;
  }
`;
const ImageContainer = styled.div`
  margin-bottom: 1.5rem;
  @media (min-width: ${(props) => props.theme.size.tablet}) {
    flex-basis: calc(45%);
    margin-bottom: 0;
  }
`;
const ImagenComponent = styled(Img)`
  filter: grayscale(0.8);
  ${mixins.borderDefault}
`;
const About = ({ hide }) => {
  const data = useAbout();
  const {
    content,
    jsonData,
    image: {
      sharp: { fluid },
    },
  } = data;
  return (
    <SectionComponent textAlign="left" id="about">
      <ImageContainer>
        <ImagenComponent fluid={fluid} alt="About Me Image" />
      </ImageContainer>
      <AboutInfo content={content} skills={jsonData} hide={hide} />
    </SectionComponent>
  );
};
export default About;
