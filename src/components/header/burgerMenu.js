import React from "react"
import styled from "styled-components"

const Line = styled.div`
  width: 28px;
  height: 3px;
  margin: 0 0 5px 0;
  background: #fff;
  transition: all 0.5s ease-out;
`
const MenuBtn = styled.div`
  position: fixed;
  right: 2rem;
  z-index: 3;
  cursor: pointer;
  transition: all 0.5s ease-out;
  &.open {
    transform: rotate(180deg);
  }
  &.open > ${Line}:nth-child(1) {
    transform: rotate(45deg) translate(5px, 5px);
  }
  &.open > ${Line}:nth-child(2) {
    opacity: 0;
  }
  &.open > ${Line}:nth-child(3) {
    transform: rotate(-45deg) translate(7px, -6px);
  }
  @media (min-width: ${props => props.theme.size.laptopS}) {
    display: none;
  }
`

const BurgerMenu = ({ open, setOpen }) => {
  const toggleMenu = () => {
    setOpen(prev => !prev)
  }
  return (
    <MenuBtn className={open ? "open" : ""} onClick={toggleMenu}>
      <Line></Line>
      <Line></Line>
      <Line></Line>
    </MenuBtn>
  )
}
export default BurgerMenu
