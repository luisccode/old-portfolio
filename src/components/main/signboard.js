import React from "react"
import styled from "styled-components"
import { Paragraph } from "../typography"
import mixins from "../../mixins"

const SignboardComponent = styled.div`
  position: relative;
  width: 15rem;
  height: 4.9rem;
  background: #ff4900;
  text-align: center;
  ${mixins.flexCenter}
  &:after {
    content: "";
    width: 2rem;
    height: 2rem;
    background: #ff4900;
    border-top: 1px solid #ff4900;
    border-right: 1px solid #ff4900;
    border-bottom: 1px solid #ff4900;
    border-left: 1px solid #ff4900;
    position: absolute;
    top: calc(4.9rem - 1rem);
    left: calc((15rem / 2) - 1rem);
    transform: rotate(45deg);
  }
`
const Signboard = () => {
  return (
    <SignboardComponent>
      <Paragraph lineHeight={1} fontSize={"1.65rem"}>
        Hello, I am
      </Paragraph>
    </SignboardComponent>
  )
}
export default Signboard
