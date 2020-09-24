import React from "react"
import styeld from "styled-components"
import Img from "gatsby-image"
import { Title, Paragraph } from "../typography"
import mixins from "../../mixins"

const TestimonialContainer = styeld.div`
    width: 33.33%;
    height: 100%;
    transition: 0.6s;
`
const TestimonialComponent = styeld.div`
  position: relative;
  background-color: #111;
  margin: 0 auto;
  width: 95%;
  height: 100%;
  border-radius: 0.6rem;
  ${mixins.flexCenter}
`
const PortraitContainer = styeld.div`
  position: absolute;
    width: 12rem;
    height: 12rem;
    top: -6rem;
    left: calc(50% - 6rem);
    @media(min-width: ${props => props.theme.size.tablet}){
       width: 17rem;
        height: 17rem;
        top: -8.5rem;
        left: calc(50% - 8.5rem);
    }
    img {
      border-radius: 50%;
    }
    
`
const Content = styeld.div`
  blockquote{
      width: 80%;
      margin: 0 auto;
    }
    p {
        margin: 0 0 2rem 0;
    }
    @media (min-width: ${props => props.theme.size.tablet}) {
      p{
        margin: 0 0 4rem 0;
      }
    }
`

const Testimonial = ({
  data: { name, company, testimonial, image },
  className,
}) => {
  return (
    <TestimonialContainer className={className}>
      <TestimonialComponent>
        <PortraitContainer>
          <Img fluid={image.sharp.fluid} />
        </PortraitContainer>
        <Content>
          <Title
            tag="h5"
            fontSize={{ static: "1.87rem" }}
            color="#ff4900"
            fontWeight={700}
          >
            {name}
          </Title>
          <Paragraph margin="0 0 2rem 0">{company}</Paragraph>
          <blockquote>{testimonial}</blockquote>
        </Content>
      </TestimonialComponent>
    </TestimonialContainer>
  )
}
export default Testimonial
