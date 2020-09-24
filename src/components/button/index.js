import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

const ButtonComponent = styled.a`
  width: 12rem;
  height: 5.5rem;
  border: 1px solid #fff;
  border-radius: 0.75rem;
  margin: 2rem 0;
  font-size: 1.65rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  cursor: pointer;
  background-color: ${props => props.bgcolor};
  border: ${props => props.border};
  margin: ${props => props.margin};
  @media (min-width: ${props => props.theme.size.mobile}) {
    width: 14rem;
  }
  @media (min-width: ${props => props.theme.size.tablet}) {
    width: 18rem;
    height: 6.25rem;
  }
`
const Button = props => {
  return (
    <ButtonComponent {...props} as={props.tag}>
      {props.children}
    </ButtonComponent>
  )
}

Button.defaultProps = {
  bgcolor: "#ff4900",
  border: "none",
  margin: "0",
}
Button.prototype = {
  bgcolor: PropTypes.string,
  border: PropTypes.string,
  margin: PropTypes.string,
}
export default Button
