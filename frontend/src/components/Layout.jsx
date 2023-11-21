import React from "react";
import { createGlobalStyle } from "styled-components";
import Footer from "./Footer";
import NavBar from "./NavBar";

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
      <NavBar />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
