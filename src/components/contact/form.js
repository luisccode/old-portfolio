import React, { useState, useEffect } from "react";
import { Title } from "../typography";
import Button from "../button";
import Modal from "../modal";
import styled from "styled-components";
import mixins from "../../mixins";
import { useForm } from "@statickit/react";
import { CSSTransition } from "react-transition-group";

const FormComponent = styled.form`
  flex-basis: 95%;
  margin: 0 auto;
  @media (min-width: ${(props) => props.theme.size.tablet}) {
    margin: 0;
    flex-basis: calc(65% - 4rem);
    order: 2;
  }
`;
const FieldsetComponent = styled.fieldset`
  border: none;
  padding: 0;
  @media (min-width: ${(props) => props.theme.size.tablet}) {
    legend {
      text-align: left;
    }
  }
`;
const InputComponent = styled.input`
  border-radius: 0.375rem;
  border: 1px solid #333;
  background-color: transparent;
  font-size: 1.65rem;
  color: #fff;
  padding: 3rem 1.8rem;
  margin-bottom: 2rem;
  width: 100%;
  @media (min-width: ${(props) => props.theme.size.tablet}) {
    flex-basis: calc(50% - 1rem);
    margin-bottom: 4rem;
  }
`;
const InputContainer = styled.div`
  @media (min-width: ${(props) => props.theme.size.tablet}) {
    ${mixins.flexBetween}
  }
`;
const TextAreaComponent = styled(InputComponent)`
  width: 100%;
  height: 15.3rem;
  padding: 3rem 1.8rem;
  resize: none;
  margin: 0;
  @media (min-width: ${(props) => props.theme.size.tablet}) {
    margin-bottom: 2rem;
  }
`;

const Form = () => {
  const [state, handleSubmit] = useForm("contactForm");
  const [showModal, setShowModal] = useState(false);
  useEffect(() => {
    if (!state.succeeded) return;
    setShowModal(true);
    const timer = setTimeout(() => {
      setShowModal(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, [state.succeeded]);
  return (
    <FormComponent onSubmit={handleSubmit}>
      <CSSTransition
        in={showModal}
        timeout={300}
        classNames="fade"
        unmountOnExit
      >
        <Modal text={"Message submitted successfully"} />
      </CSSTransition>
      <FieldsetComponent>
        <Title tag="legend" margin=".5rem 0 2rem 0">
          Drop a Line
        </Title>
        <InputContainer>
          <InputComponent
            id="name"
            name="name"
            type="text"
            placeholder="Name"
            required
          />
          <InputComponent
            id="email"
            name="email"
            type="email"
            placeholder="Email"
            required
          />
        </InputContainer>
        <InputContainer>
          <InputComponent
            id="phone"
            name="phone"
            type="tel"
            placeholder="Phone#"
          />
          <InputComponent
            id="service"
            name="service"
            type="text"
            placeholder="Service"
          />
        </InputContainer>
        <TextAreaComponent
          name="message"
          id="message"
          placeholder="Message"
          as="textarea"
        ></TextAreaComponent>
      </FieldsetComponent>
      <Button
        type="submit"
        value="submit"
        tag="input"
        margin="2rem auto"
        disabled={state.submitting}
      />
    </FormComponent>
  );
};
export default Form;
