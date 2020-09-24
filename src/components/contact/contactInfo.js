import React from "react"
import { Title, Paragraph } from "../typography"
import Info from "./info"
import { CallIcon, EmailIcon, AddressIcon } from "./icons"
import useContact from "../../hooks/useContact"
import SocialNetworks from "./socialNetworks"
import styled from "styled-components"

const ContactInfoContainer = styled.div`
  margin: 0 auto;
  flex-basis: 95%;
  @media (min-width: 769px) {
    order: 1;
    flex-basis: calc(35% - 4rem);
    h4 {
      text-align: left;
    }
  }
`
const ContactInfo = () => {
  const data = useContact()
  const Icons = [CallIcon, EmailIcon, AddressIcon]
  const { content, jsonData } = data
  return (
    <ContactInfoContainer>
      <Title tag="h4" margin=".5rem 0 2rem 0">
        Contact Me
      </Title>
      <Paragraph fontSize="1.65rem" textAlign="left">
        {content}
      </Paragraph>
      <address>
        {jsonData.map((data, index) => (
          <Info Icon={Icons[index]} data={data} key={data.name} />
        ))}
      </address>
      <SocialNetworks />
    </ContactInfoContainer>
  )
}
export default ContactInfo
