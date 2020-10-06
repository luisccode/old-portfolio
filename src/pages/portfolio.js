import React from "react";
import Layout from "../components/layout";
import SEO from "../components/SEO";
import theme from "../theme";
import { ThemeProvider } from "styled-components";
import Portfolio from "../components/portfolio";

const PortfolioPage = () => {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <SEO
          title="Portfolio"
          description="Some of my featured projects with demo and github links"
          keywords={["Portfolio", "Projects"]}
        />
        <Portfolio getAllProjects={true} isInternalPage={true} />
      </Layout>
    </ThemeProvider>
  );
};
export default PortfolioPage;
