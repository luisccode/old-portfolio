import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import Container from "../container";
import Navigation from "./navigation";
import BurgerMenu from "./burgerMenu";

const ContainerComponent = styled(Container)`
  height: 7rem;
  display: flex;
  align-items: center;
  @media (min-width: ${(props) => props.theme.size.laptopS}) {
    height: 8.5rem;
    justify-content: space-between;
    align-items: center;
  }
`;
const Logo = styled(Link)`
  font-size: 3rem;
  font-weight: 600;
  margin: 0;
  line-height: 1;
  @media (min-width: ${(props) => props.theme.size.mobile}) {
    font-size: 3.5rem;
  }
  @media (min-width: ${(props) => props.theme.size.tablet}) {
    font-size: 4.5rem;
  }
  @media (min-width: ${(props) => props.theme.size.laptopS}) {
    margin-top: 2rem;
  }
  span {
    color: ${(props) => props.theme.colors.primary};
  }
`;

const Header = () => {
  // state for the Burger Menu
  const [open, setOpen] = useState(false);
  return (
    <ContainerComponent tag="header">
      <Logo to="/">
        L<span>c</span>ode
      </Logo>
      <BurgerMenu open={open} setOpen={setOpen} />
      <Navigation open={open} setOpen={setOpen} />
    </ContainerComponent>
  );
};
export default Header;
