import React from "react";
import Layout from "../components/layout";
import SEO from "../components/SEO";
import theme from "../theme";
import { ThemeProvider } from "styled-components";
import Contact from "../components/contact";

const AboutPage = () => {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <SEO title="Contact Me" description="Luisccode contact page" />
        <Contact isInternalPage={true} />
      </Layout>
    </ThemeProvider>
  );
};
export default AboutPage;
