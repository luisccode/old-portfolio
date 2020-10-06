import React from "react";
import Section from "../section";
import Form from "./form";
import ContactInfo from "./contactInfo";
import styled from "styled-components";

const SectionComponent = styled(Section)`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;
const Contact = ({ isInternalPage }) => {
  return (
    <SectionComponent id="contact" isInternalPage={isInternalPage}>
      <Form />
      <ContactInfo />
    </SectionComponent>
  );
};
export default Contact;
