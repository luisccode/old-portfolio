import React from "react";
import SEO from "../components/SEO";
import Page from "../HOCS/page";
import Contact from "../components/contact";

const AboutPage = () => {
  return (
    <Page>
      <SEO title="About Me" />
      <Contact />
    </Page>
  );
};
export default AboutPage;
