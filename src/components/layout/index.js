import React from "react";
import Header from "../header";
import Footer from "../footer";
import GlobalStyles from "./styles";
import { StaticKitProvider } from "@statickit/react";

const Layout = ({ children }) => {
  return (
    <StaticKitProvider site={"254b6c037207"}>
      <GlobalStyles />
      <Header />
      {children}
      <Footer />
    </StaticKitProvider>
  );
};
export default Layout;
