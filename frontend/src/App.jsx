import About from "./pages/about";
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

export default App;
