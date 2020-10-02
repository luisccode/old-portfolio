import React from "react";
import styled from "styled-components";
import BackgroundImage from "gatsby-background-image";
import Container from "../container";

export const ContainerComponent = styled(Container)`
  background-color: #111;
  padding: 1.2rem;
  border-radius: 0.75rem;
  @media (min-width: ${(props) => props.theme.size.tablet}) {
    padding: 3rem 4rem;
  }
`;
export const ImagenComponent = styled.img`
  width: 100%;
  max-width: 850px;
`;
export const BackgroundImageComponent = styled(BackgroundImage)`
  height: 20rem;
  @media (min-width: ${(props) => props.theme.size.tablet}) {
    height: 30rem;
    margin-top: 1rem;
  }
  border-radius: 0.35rem;
  overflow:hidden;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  &::before,
  &::after {
   filter: opacity(0.35); !important
  }
`;
export const InfoContainer = styled.div`
  width: 80%;
  @media (min-width: ${(props) => props.theme.size.tablet}) {
    p {
      font-size: 1.8rem;
    }
  }
`;
export const Link = (props) => (
  <a {...props} target="_blank">
    {props.children}
  </a>
);
const Ul = styled.ul`
  font-size: 1.6rem;
  li {
    list-style: none;
    margin: 1rem 0;
  }
`;
export const UlComponent = (props) => <Ul>{props.children}</Ul>;
