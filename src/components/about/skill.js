import React from "react"
import { Title } from "../typography"
import styled from "styled-components"

const Chart = styled.div`
  height: 0.5rem;
  width: 100%;
  background-color: #707070;
  position: relative;
  z-index: 1;
  &::after {
    height: 0.5rem;
    background-color: red;
    position: absolute;
    z-index: 2;
    content: "";
    transition: 0.8s;
    max-width: ${props => props.percent}%;
  }
  &.animate {
    &::after {
      animation: animate 1 4s;
      animation-fill-mode: forwards;
    }
  }
  @keyframes animate {
    0% {
      width: 0%;
    }
    100% {
      width: 100%;
    }
  }
`
const Skill = ({ skill, minYear, currentYear, visible }) => {
  const years = currentYear - skill.initialYear
  const maxYear = currentYear - minYear
  const percent = (years * 100) / maxYear
  return (
    <div>
      <Title
        tag="h4"
        fontSize={{ small: "1.3rem", medium: "1.3rem", large: "1.3rem" }}
        fontWeight={300}
        margin="1rem 0"
      >
        {skill.name}: {years} years
      </Title>
      <Chart percent={percent} className={visible ? "animate" : ""}></Chart>
    </div>
  )
}
export default Skill
