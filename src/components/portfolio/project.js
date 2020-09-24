import React from "react"
import { Title, Paragraph } from "../typography"
import Arrow from "../arrow"
import mixins from "../../mixins"
import styled from "styled-components"
import BackgroundImage from "gatsby-background-image"

const ProjectContent = styled.div`
  position: absolute;
  width: 100%;
  min-height: 100%;
  text-align: center;
  background-color: #ff4900;
  opacity: 0.95;
  text-align: center;
  transition: all 0.5s ease-out;
  transform: translatey(-101%);
  ${mixins.flexCenter}
  &>div {
    margin: 0 1rem;
  }
  @media (min-width: 414px) {
    & > div {
      margin: 0 2rem;
    }
  }
`
const ProjectComponent = styled(BackgroundImage)`
  border-radius: 0.4rem;
  flex-basis: 90%;
  min-height: 20rem;
  margin-bottom: 4rem;
  position: relative;
  overflow: hidden;
  &:last-of-type {
    margin-bottom: 0;
  }
  @media (min-width: 500px) {
    flex-basis: calc(50% - 4rem);
    height: 35rem;
  }
  @media (min-width: ${props => props.theme.size.laptopS}) {
    flex-basis: calc(33.3% - 6rem);
    height: 35rem;
  }
  &:hover ${ProjectContent} {
    transform: translatey(0);
  }
`

const Link = styled.a`
  ${mixins.flexCenter}
  margin-bottom: 0.5rem;
  span {
    margin: 0;
    font-weight: 400;
    margin-right: 0.5rem;
  }
`
const Project = ({
  data: { name, technologies, description, url, demo, image },
}) => {
  return (
    <ProjectComponent tag="section" fluid={image.sharp.fluid}>
      <ProjectContent>
        <div>
          <Title
            tag="h4"
            fontSize={{ small: "1.6rem", medium: "1.6rem", large: "1.6rem" }}
          >
            {name}
          </Title>
          <Paragraph lineHeight={1.5} margin="0 0 1.3rem 0">
            {technologies}
          </Paragraph>
          <Paragraph lineHeight={1.5} margin="0 0 1.3rem 0">
            {description}
          </Paragraph>
          <Link href={url} target="_blank">
            <span>View on GitHub</span>
            <Arrow
              color="#fff"
              display="inline-block"
              width="28"
              height="12"
              hideOnSmall={false}
            />
          </Link>
          <Link href={demo} target="_blank">
            <span>Demo</span>
            <Arrow
              color="#fff"
              display="inline-block"
              width="28"
              height="12"
              hideOnSmall={false}
            />
          </Link>
        </div>
      </ProjectContent>
    </ProjectComponent>
  )
}

export default Project
