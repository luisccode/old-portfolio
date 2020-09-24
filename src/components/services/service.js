import React from "react"
import { Title } from "../typography"
import Arrow from "../arrow"
import styled from "styled-components"
import mixins from "../../mixins"

const IconContainer = styled.div`
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
  background-color: #000;
  ${mixins.flexCenter}
  @media (min-width: ${props => props.theme.size.tablet}) {
    width: 7rem;
    height: 7rem;
  }
`

const ServiceComponent = styled.div`
  height: 6rem;
  flex-basis: calc(50% - 2rem);
  background-color: #111;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin-bottom: 2rem;
  @media (min-width: ${props => props.theme.size.tablet}) {
    height: 10rem;
    flex-basis: calc(33.3% - 6rem);
    margin: 0 4rem 5rem 0;
    &:nth-child(3n) {
      margin-right: 0;
    }
  }
  &:hover {
    background-color: ${props => props.theme.colors.primary};
    ${IconContainer} {
      background-color: #fff;
    }
    img {
      filter: invert(1);
    }
    .arrow-svg {
      fill: #fff;
    }
  }
`

const Service = ({ data }) => {
  const {
    name,
    icon: { publicURL },
  } = data
  return (
    <ServiceComponent>
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
  )
}
export default Service
