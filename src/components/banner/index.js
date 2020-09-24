import React from "react"
import BackgroundImage from "gatsby-background-image"
import useBanner from "../../hooks/useBanner"
import Button from "../button"
import { Paragraph, Title } from "../typography"
import mixins from "../../mixins"
import styled from "styled-components"

const BackgroundImageComponent = styled(BackgroundImage)`
  padding-top: 2rem;
  margin-top: 2rem;
  @media (min-width: ${props => props.theme.size.tablet}) {
    padding-top: 0;
    margin-top: 6rem;
    min-height: 42.8rem;
  }
  &:not(:first-of-type) {
    text-align: center;
  }
  ${mixins.flexCenter}
  &::before,
  &::after {
   filter: opacity(0.5); !important
  }
`
const Banner = () => {
  const data = useBanner()
  const { content, image } = data
  return (
    <BackgroundImageComponent fluid={image.sharp.fluid} tag="section">
      <div>
        <Paragraph fontSize="1.65rem" margin="1.65rem 0">
          Have any Project in Mind?
        </Paragraph>
        <Title tag="h4">{content}</Title>
        <Button tag="a" href="#contact" margin="2rem auto">
          Hire Me!
        </Button>
      </div>
    </BackgroundImageComponent>
  )
}
export default Banner
