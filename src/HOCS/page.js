import React from "react";
import Layout from "../components/layout";
import theme from "../theme";
import { ThemeProvider } from "styled-components";

const Page = (props) => {
  return (
    <ThemeProvider theme={theme}>
      <Layout>{props.children}</Layout>
    </ThemeProvider>
  );
};
export default Page;
