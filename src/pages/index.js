import React from "react";
import Layout from "../components/layout";
import SEO from "../components/SEO";
import Main from "../components/main";
import About from "../components/about";
import Services from "../components/services";
import Counter from "../components/counter";
import Portfolio from "../components/portfolio";
import Banner from "../components/banner";
import Blog from "../components/blog";
import Contact from "../components/contact";
import theme from "../theme";
import { ThemeProvider } from "styled-components";

const Index = () => {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <SEO />
        <Main />
        <About />
        <Services />
        <Counter />
        <Portfolio />
        <Banner />
        <Blog />
        <Contact />
      </Layout>
    </ThemeProvider>
  );
};
export default Index;
