import React from "react"
import { Paragraph } from "../typography"
import styled from "styled-components"
import mixins from "../../mixins"

const InfoContainer = styled.a`
  margin-top: 4rem;
  display: flex;
  align-items: flex-end;
`
const IconContainer = styled.div`
  margin-right: 1rem;
  border: 1px solid #333;
  border-radius: 50%;
  width: 45px;
  height: 45px;
  ${mixins.flexCenter}
`
const Text = styled.div`
  display: inline-block;
  max-width: 60%;
`
const Info = ({ data: { name, value, url }, Icon }) => {
  return (
    <InfoContainer href={url}>
      <IconContainer>
        <Icon />
      </IconContainer>
      <Text>
        <Paragraph
          color="#6b6b6b"
          margin="0 0 .5rem 0"
          textAlign="left"
          lineHeight={1}
        >
          {name}
        </Paragraph>
        <Paragraph lineHeight={1} fontSize={"1.87rem"} textAlign="left">
          {value}
        </Paragraph>
      </Text>
    </InfoContainer>
  )
}
export default Info
