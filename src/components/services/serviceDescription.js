import React from "react";
import styled from "styled-components";

const DescriptionComponent = styled.div`
  position: absolute;
  bottom: 0%;
  width: 100%;
  min-height: 100%;
  padding: 2rem;
  border-radius: 0.5rem;
  background-color: #1e1b1b;
  z-index: 4;
`;

const ServiceDescription = (props) => {
  return <DescriptionComponent>{props.children}</DescriptionComponent>;
};
export default ServiceDescription;
