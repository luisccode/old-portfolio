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
        <SEO title="Portfolio" />
        <Portfolio getAllProjects={true} hide={true} />
      </Layout>
    </ThemeProvider>
  );
};
export default PortfolioPage;
