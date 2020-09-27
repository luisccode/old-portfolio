import React from "react";
import Signboard from "./signboard";
import { Title } from "../typography";
import Button from "../button";
import styled from "styled-components";
import mixins from "../../mixins";

const PresentationContainer = styled.div`
  margin-top: 50%;
  @media (min-width: ${(props) => props.theme.size.tablet}) {
    margin-top: 0;
  }
`;
const ButtonContainer = styled.div`
  ${mixins.flexEvenly}
  @media(min-width: ${(props) => props.theme.size.tablet}){
    ${mixins.flexBetween}
  }
`;

const Presentation = ({ content }) => {
  return (
    <PresentationContainer>
      <Signboard />
      <Title
        tag="h1"
        margin="2rem 0 0"
        fontSize={{ small: "4rem", medium: "4.5rem", large: "5.5rem" }}
        fontWeight={700}
      >
        Luis A. Cortes
      </Title>
      <Title
        tag="h2"
        margin="1.5rem 0 2rem 0"
        fontSize={{ small: "1.65rem", medium: "1.65rem", large: "1.65rem" }}
      >
        {content}
      </Title>
      <ButtonContainer>
        <Button
          tag="a"
          href="/Luis Cortes CV.pdf"
          target="_blank"
          margin="2rem 0"
        >
          Download CV
        </Button>
        <Button
          tag="a"
          border="1px solid #fff"
          bgcolor="tranparent"
          href="#portfolio"
          margin="2rem 0"
        >
          My Work
        </Button>
      </ButtonContainer>
    </PresentationContainer>
  );
};
export default Presentation;
