import React from "react";
import { createGlobalStyle } from "styled-components";
import Footer from "./Footer";

const GlobalStyle = createGlobalStyle`
  body {
    background-color:var(--primary-color);
    color: var(--secondary-color);
  }


  
`;

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <Footer />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
