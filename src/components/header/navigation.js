import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import Button from "../button"

const NavComponent = styled.nav`
  z-index: 2;
  visibility: hidden;
  position: fixed;
  top: 0;
  right: 0;
  width: 80%;
  background-color: ${props => props.theme.colors.gray};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  transform: translate(100%, 0);
  transition: all 0.5s ease-out;
  &.show {
    visibility: visible;
    transform: translate(0, 0);
  }
  @media (min-width: ${props => props.theme.size.laptopS}) {
    transform: translate(0, 0);
    height: 100%;
    width: auto;
    position: static;
    visibility: visible;
    flex-direction: row;
    background-color: transparent;
  }
`
const commonStyles = `
    height: 100%;
    width: 9rem;
    display: flex;
    justify-content: center;
    align-items: flex-end;
`
const LinkComponent = styled(Link)`
  margin: 2rem 0 0;
  font-size: 2.5rem;
  &:hover {
    color: ${props => props.theme.colors.primary};
  }
  @media (min-width: ${props => props.theme.size.laptopS}) {
    &:hover {
      background-color: ${props => props.theme.colors.primary};
      color: #fff;
    }
    & > span {
      margin-bottom: 2rem;
    }
    font-size: 1.35rem;
    margin: 0 1rem 0 0;
    ${commonStyles}
  }
`
const ButtonContainer = styled.div`
  margin: 2rem 0px 0px;
  @media (min-width: ${props => props.theme.size.laptopS}) {
    margin: 0 0 1rem 2rem;
    ${commonStyles}
  }
`
const ButtonComponent = styled(Button)`
  margin: 0 !important;
  @media (min-width: ${props => props.theme.size.laptopS}) {
    width: 10rem;
    height: 4.5rem;
    font-size: 1.35rem;
  }
`
const linksInfo = [
  "About Me",
  "Services",
  "Portfolio",
  "Testimonials",
  "Blog",
  "Contact Me",
]
const Navigation = ({ open, setOpen }) => {
  const getFirstWordLowerCase = word => word.split(" ")[0].toLowerCase()
  return (
    <NavComponent className={open ? "show" : ""}>
      {linksInfo.map(info => (
        <LinkComponent
          to={"/#" + getFirstWordLowerCase(info)}
          key={info}
          onClick={() => setOpen(false)}
        >
          <span>{info}</span>
        </LinkComponent>
      ))}
      <ButtonContainer>
        <ButtonComponent
          to="/#contact"
          tag={Link}
          onClick={() => setOpen(false)}
        >
          Hire Me!
        </ButtonComponent>
      </ButtonContainer>
    </NavComponent>
  )
}
export default Navigation
