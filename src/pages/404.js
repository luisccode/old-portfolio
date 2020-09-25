import React from "react";
import Layout from "../components/layout";
import SEO from "../components/SEO";
import theme from "../theme";
import { ThemeProvider } from "styled-components";
import styled from "styled-components";
import mixins from "../mixins";
import { Title, Paragraph } from "../components/typography";
import Button from "../components/button";
import { Link } from "gatsby";

const NotFoundComponent = styled.div`
  height: calc(100vh - 7rem);
  ${mixins.flexCenter}
`;
const ButtonContainer = styled.div`
  ${mixins.flexAround}
`;

const NotFound = () => {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <SEO title="404 Not Found" />
        <NotFoundComponent>
          <div style={{ maxWidth: "90%" }}>
            <Title textAlign="center">Oops, something's gone wrong!</Title>
            <Paragraph>Don't worry, you can try one of these links:</Paragraph>
            <ButtonContainer>
              <Button tag={Link} to="/" margin="2rem 0">
                Home
              </Button>
              <Button tag={Link} to="/blog" margin="2rem 0">
                Blog
              </Button>
            </ButtonContainer>
          </div>
        </NotFoundComponent>
      </Layout>
    </ThemeProvider>
  );
};
export default NotFound;
