import React from "react";
import Layout from "../components/layout";
import SEO from "../components/SEO";
import theme from "../theme";
import { ThemeProvider } from "styled-components";
import Services from "../components/services";

const ServicesPage = () => {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <SEO title="My services" description="Luisccode Services" />
        <Services getAllServices={true} isInternalPage={true} />
      </Layout>
    </ThemeProvider>
  );
};
export default ServicesPage;
