import React from "react"
import { Paragraph } from "../typography"
import {
  FacebookIcon,
  InstagramIcon,
  TwitterIcon,
  GithubIcon,
  LinkedinIcon,
} from "./icons"
import mixins from "../../mixins"
import styled from "styled-components"

const SocialNetworksContainer = styled.div`
  position: absolute;
  left: -5px;
  background-color: #ff4900;
  border-radius: 0.75rem;
  height: 6.22rem;
  width: 88%;
  ${mixins.flexCenter}
  a:not(:last-of-type) {
    margin-right: 2rem;
  }
  @media (min-width: ${props => props.theme.size.tablet}) {
    width: calc(40% - 2.5rem);
  }
`
const SocialNetworks = () => {
  return (
    <div>
      <Paragraph fontSize="1.87rem" textAlign="left" margin="1.87rem 0 1rem 0">
        Find Me on
      </Paragraph>
      <SocialNetworksContainer>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.facebook.com/luisalejandro.corteschacon"
        >
          <FacebookIcon />
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.instagram.com/luisccode/"
        >
          <InstagramIcon />
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://twitter.com/luisccode"
        >
          <TwitterIcon />
        </a>
        <a target="_blank" rel="noreferrer" href="https://github.com/luisccode">
          <GithubIcon />
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/luisccode"
        >
          <LinkedinIcon />
        </a>
      </SocialNetworksContainer>
    </div>
  )
}
export default SocialNetworks
