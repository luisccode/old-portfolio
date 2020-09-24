import React from "react"
import styled, { css } from "styled-components"
import PropTypes from "prop-types"

const TitleComponent = styled.h1`
  color: ${props => props.color};
  font-weight: ${props => props.fontWeight};
  margin: ${props => props.margin};
  text-align: ${props => props.textAlign};
  ${props =>
    props.fontSize.static
      ? css`
          font-size: ${props => props.fontSize.static};
        `
      : css`
          font-size: ${props => props.fontSize.small};
          @media (min-width: ${props => props.theme.size.mobile}) {
            font-size: ${props => props.fontSize.medium};
          }
          @media (min-width: ${props => props.theme.size.tablet}) {
            font-size: ${props => props.fontSize.large};
          }
        `}
`
export const Title = ({
  text,
  tag,
  margin,
  textAlign,
  color,
  fontSize,
  fontWeight,
  children,
}) => {
  return (
    <TitleComponent
      as={tag}
      margin={margin}
      textAlign={textAlign}
      color={color}
      fontSize={fontSize}
      fontWeight={fontWeight}
    >
      {text || children}
    </TitleComponent>
  )
}
const ParagraphComponent = styled.p`
  margin: ${props => props.margin};
  font-size: ${props => props.fontSize};
  line-height: ${props => props.lineHeight};
  text-align: ${props => props.textAlign};
  color: ${props => props.color};
  display: ${props => props.display};
`
export const Paragraph = ({
  lineHeight,
  fontSize,
  margin,
  textAlign,
  color,
  children,
  text,
  display,
}) => (
  <ParagraphComponent
    margin={margin}
    textAlign={textAlign}
    lineHeight={lineHeight}
    color={color}
    fontSize={fontSize}
    display={display}
  >
    {text || children}
  </ParagraphComponent>
)

//PropTypes and defaultProps
Title.propTypes = {
  tag: PropTypes.string,
  text: PropTypes.string,
  color: PropTypes.string,
  margin: PropTypes.string,
  textAlign: PropTypes.string,
  fontSize: PropTypes.object,
  display: PropTypes.string,
  fontWeight: PropTypes.number,
  children: PropTypes.node,
}
Title.defaultProps = {
  tag: "h1",
  text: "",
  color: "#fff",
  margin: "0.5rem 0 0 0",
  textAlign: "inherit",
  fontSize: { small: "2.2rem", medium: "2.6rem", large: "3rem" },
  display: "block",
  fontWeight: 400,
  children: "",
}

Paragraph.propTypes = {
  text: PropTypes.string,
  margin: PropTypes.string,
  fontSize: PropTypes.string,
  color: PropTypes.string,
  textAlign: PropTypes.string,
  lineHeight: PropTypes.number,
  children: PropTypes.node,
}
Paragraph.defaultProps = {
  text: "",
  margin: "0",
  color: "#fff",
  fontSize: "1.35rem",
  textAlign: "center",
  lineHeight: 2,
  children: "",
}
