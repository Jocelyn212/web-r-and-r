import React, { useState, useEffect } from "react";
import axios from "axios";

function ListaPeliculasContainer() {
  const [filmografias, setFilmografias] = useState([]);
  const [filtro, setFiltro] = useState("");
  const [resultados, setResultados] = useState([]);

  useEffect(() => {
    // Obtener datos de la base de datos al cargar la página
    axios
      .get("http://localhost:3001/api/obtenerFilmografias")
      .then((response) => {
        setFilmografias(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []); // El array vacío asegura que se ejecute solo una vez al montar el componente

  const handleSearch = () => {
    const filteredMovies = filmografias.filter((film) =>
      film.titulo.toLowerCase().includes(filtro.toLowerCase())
    );
    setResultados(filteredMovies);
  };

  return (
    <div>
      <h2>Lista de Películas</h2>
      <div>
        <input
          type="text"
          placeholder="Buscar por título"
          value={filtro}
          onChange={(e) => setFiltro(e.target.value)}
        />
        <button onClick={handleSearch}>Buscar</button>
      </div>
    </div>
  );
}

export default ListaPeliculasContainer;
