import React from "react";
import { Paragraph } from "../typography";
import styled from "styled-components";
import { useLocation } from "@reach/router";

const FooterComponent = styled.footer`
  margin: ${(props) => (props.defaultMargin ? `9.22rem 0 3rem 0` : `3rem 0`)};
  @media (min-width: ${(props) => props.theme.size.tablet}) {
    margin: 3.6rem 0;
  }
`;
const Footer = () => {
  const { pathname } = useLocation();
  return (
    <FooterComponent
      defaultMargin={pathname === "/" || pathname.startsWith("/contact")}
    >
      <Paragraph margin="1.35rem 0">
        Copyright ©2020 Luis Cortes. All Rights Reserved.
      </Paragraph>
    </FooterComponent>
  );
};
export default Footer;
