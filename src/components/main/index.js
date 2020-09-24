import React from "react"
import { Link } from "gatsby"
import Presentation from "./presentation"
import ArrowButton from "./arrowButton"
import useMain from "../../hooks/useMain"
import BackgroundImage from "gatsby-background-image"
import styled from "styled-components"
import mixins from "../../mixins"

const MainContainer = styled(BackgroundImage)`
  width: 90%;
  max-width: 120rem;
  margin: 0 auto;
  height: calc(100vh - 7rem);
  background-size: 70vw;
  background-position: top right;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  @media (min-width: ${props => props.theme.size.tablet}) {
    padding-top: 0;
    height: calc(100vh - 8.5rem);
    flex-direction: row !important;
    align-items: center;
    justify-content: flex-start;
    &::before,
    &::after {
      background-size: contain !important;
    }
  }
`
const ArrowContainer = styled.div`
  ${mixins.flexCenter}
  @media(min-width: ${props => props.theme.size.tablet}){
    position: absolute;
        top: calc(90% - 3rem);
        left: calc(50% - 3rem);
  }
`
const Main = () => {
  const { content, image } = useMain()
  return (
    <MainContainer Tag="main" fluid={image.sharp.fluid}>
      <Presentation content={content} />
      <ArrowContainer>
        <Link to="/#about">
          <ArrowButton />
        </Link>
      </ArrowContainer>
    </MainContainer>
  )
}
export default Main
