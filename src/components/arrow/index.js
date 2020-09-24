import React from "react"
import PropTypes from "prop-types"
import styled, { css } from "styled-components"

const ArrowComponent = styled.svg`
  ${props =>
    props.hideOnSmall
      ? css`
          display: none;
          @media (min-width: ${props => props.theme.size.tablet}) {
            display: ${props => props.display};
          }
        `
      : css`
          display: ${props => props.display};
        `}
`
const Arrow = ({ color, display, width, height, hideOnSmall }) => {
  return (
    <ArrowComponent
      display={display}
      hideOnSmall={hideOnSmall}
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 32.283 15.334"
    >
      <path
        className="arrow-svg"
        id="Path_115"
        data-name="Path 115"
        d="M21.979,48.851,15.348,42.22a1.036,1.036,0,1,0-1.465,1.465l4.862,4.862H-8.964A1.036,1.036,0,0,0-10,49.583a1.036,1.036,0,0,0,1.036,1.036H18.745l-4.862,4.862a1.036,1.036,0,0,0,1.465,1.465l6.631-6.631A1.036,1.036,0,0,0,21.979,48.851Z"
        transform="translate(10 -41.916)"
        fill={color}
      />
    </ArrowComponent>
  )
}
export default Arrow

Arrow.propTypes = {
  color: PropTypes.string,
  display: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  hideOnSmall: PropTypes.bool,
}
Arrow.defaultProps = {
  color: "#ff4900",
  display: "block",
  width: "32.283",
  height: "15.334",
  hideOnSmall: true,
}
