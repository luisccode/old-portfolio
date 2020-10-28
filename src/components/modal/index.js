import React from "react";
import styled from "styled-components";
import mixins from "../../mixins";

const ModalContainer = styled.div`
  position: fixed;
  top: 1rem;
  right: 1rem;
  ${mixins.borderDefault}
  padding: 2rem 4rem;
  background-color: #1e1b1b;
  z-index: 4;
`;

const Modal = (props) => {
  return (
    <ModalContainer>
      <span>{props.children}</span>
    </ModalContainer>
  );
};
export default Modal;
