import React, { useState } from "react";
import { Title } from "../typography";
import Arrow from "../arrow";
import { ServiceComponent, IconContainer } from "./styles";
import ServiceDescription from "./serviceDescription";
import CloseButton from "./closeButton";
import { CSSTransition } from "react-transition-group";

const Service = ({ data }) => {
  const {
    name,
    description,
    icon: { publicURL },
  } = data;

  const [showModal, setShowModal] = useState(false);
  const togleModal = (e) => {
    const id = e.target.id;
    id === "closeButton" ? setShowModal(false) : setShowModal(true);
  };

  return (
    <ServiceComponent id="service" onClick={togleModal}>
      <CSSTransition
        in={showModal}
        timeout={300}
        classNames="fade"
        unmountOnExit
      >
        <ServiceDescription>
          <CloseButton onClick={togleModal} />
          {description}
        </ServiceDescription>
      </CSSTransition>

      <IconContainer>
        <img src={publicURL} alt={`${name} icon`} />
      </IconContainer>
      <Title
        fontSize={{ small: "1.35rem", medium: "1.5rem", large: "1.8rem" }}
        fontWeight={300}
        tag="h3"
        margin="0"
      >
        {name}
      </Title>
      <Arrow />
    </ServiceComponent>
  );
};
export default Service;
