import React from "react";
import { createGlobalStyle } from "styled-components";
import Footer from "./Footer";
import Navbar from "./Navbar";
import MobileNavbar from "./MobileNavbar";
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
      <Navbar />
      <MobileNavbar />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
