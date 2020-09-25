import React from "react";
import Section from "../section";
import Separator from "../separator";
import Service from "./service";
import { Title, Paragraph } from "../typography";
import useServices from "../../hooks/useServices";
import mixins from "../../mixins";
import Button from "../button";
import { Link } from "gatsby";
import styled from "styled-components";

const ServicesContainer = styled.div`
  ${mixins.flexEvenly}
  flex-wrap: wrap;
  margin-top: 4rem;
`;

const Services = ({ getAllServices = false, hide = false }) => {
  const data = useServices(getAllServices);
  return (
    <Section id="services" hideSeparator={hide}>
      <Separator />
      <Title tag="h2">My Services</Title>
      <Paragraph margin="1.35rem 0">{data.sectionData.content}</Paragraph>
      <ServicesContainer>
        {data.services.map((serviceData) => (
          <Service key={serviceData.name} data={serviceData} />
        ))}
      </ServicesContainer>
      {!hide && (
        <Button margin="3rem auto" tag={Link} to="/services">
          View All
        </Button>
      )}
    </Section>
  );
};
export default Services;
