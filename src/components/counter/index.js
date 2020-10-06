import React from "react";
import BackgroundImage from "gatsby-background-image";
import styled from "styled-components";
import mixins from "../../mixins";
import useCounter from "../../hooks/useCounter";
import Container from "../container";
import CardCounter from "./cardCounter";

const CounterComponent = styled(BackgroundImage)`
  padding: 5rem 0;
  margin-top: 2rem;
  @media (min-width: ${(props) => props.theme.size.tablet}) {
    margin-top: 6rem;
  }
  &::before,
  &::after {
    opacity: 0.3 !important;
  }
`;

const ContainerComponent = styled(Container)`
  ${mixins.flexEvenly}
  flex-wrap: wrap;
  width: 100%;
`;
const Counter = () => {
  const data = useCounter();
  const {
    jsonData,
    image: {
      sharp: { fluid },
    },
  } = data;
  return (
    <CounterComponent
      Tag="section"
      backgroundPosition="top center"
      fluid={fluid}
    >
      <ContainerComponent>
        {jsonData.map((data) => (
          <CardCounter data={data} key={data.name} />
        ))}
      </ContainerComponent>
    </CounterComponent>
  );
};
export default Counter;
