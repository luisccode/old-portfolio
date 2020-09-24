import React from "react"
import PropTypes from "prop-types"
import styled, { css } from "styled-components"

const SectionComponent = styled.div`
  ${props =>
    props.center
      ? css`
          width: 90%;
          max-width: 120rem;
          margin: 0 auto;
        `
      : ``}
  padding-top: 2rem;
  margin-top: 2rem;
  &:not(:first-of-type) {
    text-align: center;
  }
  @media (min-width: ${props => props.theme.size.tablet}) {
    padding-top: 0;
    margin-top: 6rem;
  }
`
const Section = props => {
  return (
    <SectionComponent {...props} tag="section">
      {props.children}
    </SectionComponent>
  )
}
export default Section

Section.propTypes = {
  center: PropTypes.bool,
}
Section.defaultProps = {
  center: true,
}
