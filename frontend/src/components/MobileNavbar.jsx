/* import React from "react";
import { NavLink } from "react-router-dom";
import "../navbar.css";
import Logo from "./Logo";

function MobileNavbar() {
  return (
    <>
      <nav className="flex justify-center my-8">
        <Logo />
      </nav>
      <div className="navbar-mobile">
        <NavLink to="/">
          <span role="img" aria-label="home">
            🏠
          </span>
        </NavLink>
        <NavLink to="/about">
          <span role="img" aria-label="info">
            ℹ️
          </span>
        </NavLink>
        <NavLink to="/filmografia">
          <span role="img" aria-label="film">
            🎞️
          </span>
        </NavLink>
      </div>
    </>
  );
}

export default MobileNavbar; */
import React from "react";
import { NavLink } from "react-router-dom";
import "../navbar.css";
import Logo from "./Logo";
import { Home, InfoCircle, Movie } from "tabler-icons-react";

function MobileNavbar() {
  return (
    <>
      <div className="navbar-mobile">
        <nav className="fixed top-0 z-50 w-full flex justify-center bg-gradient-to-br from-black from-10% via-primary via-75% to-primary">
          <span className="my-4">
            <Logo />
          </span>
        </nav>
        <div className=" fixed bottom-0 z-50 w-full flex justify-around py-4 text-white bg-gradient-to-br from-black from-10% via-primary via-80% to-secondary">
          <NavLink to="/">
            <Home size={32} />
          </NavLink>
          <NavLink to="/about">
            <InfoCircle size={32} />
          </NavLink>
          <NavLink to="/filmografia">
            <Movie size={32} />
          </NavLink>
        </div>
      </div>
    </>
  );
}

export default MobileNavbar;
