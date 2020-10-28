import React from "react";
import styled from "styled-components";

const CloseButtonContainer = styled.div`
  position: absolute;
  font-size: 2.2rem;
  right: 8px;
  top: 5px;
`;

const CloseButton = () => {
  return <CloseButtonContainer id="closeButton">&times;</CloseButtonContainer>;
};
export default CloseButton;
