/* import { Link } from "react-router-dom";
import Logo from "./Logo";

function Navbar() {
  return (
    <>
      <nav className="fixed top-0 z-50 w-full flex  gap-12 items-center text-white h-16 px-10 justify-around bg-gradient-to-br from-black from-10% via-primary via-80% to-secondary">
        <Logo className="h-12 w-auto" />
        <span>
          <Link to="/">Inicio</Link>
        </span>
        <span>
          <Link to="/about">Sobre Nosotros</Link>
        </span>
        {/*  <span>
          <Link to="/formularioPrueba">Formulario</Link>
        </span> }
        <span>
          <Link to="/Filmografia">Filmografia</Link>
        </span>
        <div></div>
      </nav>
    </>
  );
}

export default Navbar; 

import { NavLink } from "react-router-dom";
import Logo from "./Logo";

function Navbar() {
  return (
    <>
      <nav className="fixed top-0 z-50 w-full flex  gap-12 items-center text-white h-16 px-10 justify-around bg-gradient-to-br from-black from-10% via-primary via-80% to-secondary">
        <Logo className="h-12 w-auto" />
        <span>
          <NavLink to="/" activeClassName="text-pink-300">Inicio</NavLink>
        </span>
        <span>
          <NavLink to="/about" activeClassName="text-pink-300">Sobre Nosotros</NavLink>
        </span>
        <span>
          <NavLink to="/Filmografia" activeClassName="text-pink-300">Filmografia</NavLink>
        </span>
        <div></div>
      </nav>
    </>
  );
}

export default Navbar; */

/* import { NavLink } from "react-router-dom";
import Logo from "./Logo"; */

import { NavLink, useLocation } from "react-router-dom";
import { useState } from "react";
import {
  BrandLinkedin,
  X,
  BrandInstagram,
  BrandYoutube,
} from "tabler-icons-react";
import Logo from "./Logo";
import "../navbar.css";

function Navbar() {
  const location = useLocation();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <nav className="navbar-desktop fixed top-0 z-50 w-full flex   items-center text-white h-16 px-8 justify-between  bg-gradient-to-br from-black from-10% via-primary via-80% to-secondary">
        <Logo className="h-12 w-auto" />
        <span>
          <NavLink to="/" className={location.pathname === "/" ? "active" : ""}>
            Inicio
          </NavLink>
        </span>
        <span>
          <NavLink
            to="/about"
            className={location.pathname === "/about" ? "active" : ""}
          >
            Nosotros
          </NavLink>
        </span>
        <span>
          <NavLink
            to="/Filmografia"
            className={location.pathname === "/Filmografia" ? "active" : ""}
          >
            Filmografia
          </NavLink>
        </span>
        <div>
          <ul className="wrapper">
            <li
              className="icon linkedin"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="tooltip">Linkedin</span>
                <span>
                  <BrandLinkedin
                    color={isHovered ? "#fff" : "#fff"}
                    className="fab fa-linkedin"
                  />
                </span>
              </a>
            </li>
            <li
              className="icon twitter"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="tooltip">Twitter</span>
                <span>
                  <X
                    color={isHovered ? "#fff" : "#fff"}
                    className="fab fa-twitter"
                  />
                </span>
              </a>
            </li>
            <li
              className="icon instagram"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="tooltip">Instagram</span>
                <span>
                  <BrandInstagram
                    color={isHovered ? "#fff" : "#fff"}
                    className="fab fa-instagram"
                  />
                </span>
              </a>
            </li>
            <li
              className="icon youtube"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <a
                href="https://www.youtube.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="tooltip">Youtube</span>
                <span>
                  <BrandYoutube
                    color={isHovered ? "#fff" : "#fff"}
                    className="fab fa-youtube"
                  />
                </span>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
export default Navbar;
