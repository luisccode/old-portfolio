import React from "react"
import Skill from "./skill"
import styled from "styled-components"
import useOnScreen from "../../hooks/useOnScreen"
const SkillsContainer = styled.div`
  margin: 2rem 0;
`
const SkillsBar = ({ skills }) => {
  const currentYear = new Date().getFullYear()
  let minYear = currentYear
  skills.forEach(skill => {
    if (parseInt(skill.initialYear) < minYear)
      minYear = parseInt(skill.initialYear)
  })
  const [ref, visible] = useOnScreen({ threshold: 0.5 })
  return (
    <SkillsContainer ref={ref}>
      {skills.map(skill => (
        <Skill
          skill={skill}
          minYear={minYear}
          currentYear={currentYear}
          visible={visible}
          key={skill.name}
        />
      ))}
    </SkillsContainer>
  )
}
export default SkillsBar
