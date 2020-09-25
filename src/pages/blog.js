import React from "react";
import Layout from "../components/layout";
import SEO from "../components/SEO";
import theme from "../theme";
import { ThemeProvider } from "styled-components";

const BlogPage = () => {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <SEO title="About Me" />
        <h1>blog</h1>
      </Layout>
    </ThemeProvider>
  );
};
export default BlogPage;
