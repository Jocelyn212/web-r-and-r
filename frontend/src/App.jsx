/* import About from "./pages/about";
import "./index.css";
import React, { useEffect, useState } from "react";
import Formulario from "./pages/formularioPrueba";
import ListaPeliculasContainer from "./pages/ListaPeliculasContainer";

const handleAddFilm = (newFilm) => {
  // Lógica para agregar la nueva película
  console.log("Nueva película añadida:", newFilm);
};

function App() {
  return (
    <>
      <About />
      <Formulario onAddFilm={handleAddFilm} />
      <ListaPeliculasContainer />
    </>
  );
}

export default App; */
import React from "react";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import About from "./pages/about";
import Home from "./pages/home";
import Filmografia from "./pages/filmografia";
import Formulario from "./pages/formularioPrueba";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/filmografia" element={<Filmografia />} />
        <Route path="/formularioPrueba" element={<Formulario />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
