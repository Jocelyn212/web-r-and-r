//nuevo codigo pruebas formulario

import React, { useState } from "react";
import axios from "axios";

function Formulario({ onAddFilm }) {
  const [tipo, setTipo] = useState("");
  const [titulo, setTitulo] = useState("");
  const [urlPoster, setUrlPoster] = useState("");
  const [sinopsis, setSinopsis] = useState("");
  const [linkImdb, setLinkImdb] = useState("");
  const [urlMakingOf, setUrlMakingOf] = useState("");
  const [urlYoutube, setUrlYoutube] = useState("");
  const [plataformas, setPlataformas] = useState("");
  const [fecha, setFecha] = useState("");
  const [duracion, setDuracion] = useState("");
  // ... (otros campos de la película si hiciera falta)

  const handleSubmit = (event) => {
    event.preventDefault();
    const filmToAdd = {
      tipo,
      titulo,
      urlPoster,
      sinopsis,
      linkImdb,
      urlMakingOf,
      urlYoutube,
      plataformas,
      fecha,
      duracion,
      // ... (otros campos de la película)
    };

    axios
      .post("http://localhost:3001/api/nuevaFilmografia", filmToAdd)
      .then((response) => {
        console.log(response.data);
        onAddFilm(response.data); // Envía la nueva película al componente principal
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto mt-8">
      <label>
        Tipo:
        <select
          value={tipo}
          onChange={(e) => setTipo(e.target.value)}
          className="mx-8"
        >
          <option value="" className="max-w-lg mx-auto mt-8">
            Selecciona un tipo
          </option>
          <option value="pelicula">Película</option>
          <option value="serie">Serie</option>
          <option value="documental">Documental</option>
        </select>
      </label>
      <br />
      <label>
        Título:
        <input
          type="text"
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
        />
      </label>
      <br />
      <label>
        URL del póster:
        <input
          type="text"
          value={urlPoster}
          onChange={(e) => setUrlPoster(e.target.value)}
        />
      </label>
      <br />
      <label>
        Sinopsis:
        <textarea
          value={sinopsis}
          onChange={(e) => setSinopsis(e.target.value)}
        />
      </label>
      <br />
      <label>
        Link de IMDb:
        <input
          type="text"
          value={linkImdb}
          onChange={(e) => setLinkImdb(e.target.value)}
        />
      </label>
      <br />
      <label>
        URL del making-of:
        <input
          type="text"
          value={urlMakingOf}
          onChange={(e) => setUrlMakingOf(e.target.value)}
        />
      </label>
      <br />
      <label>
        URL de YouTube:
        <input
          type="text"
          value={urlYoutube}
          onChange={(e) => setUrlYoutube(e.target.value)}
        />
      </label>
      <br />
      <label>
        Plataformas:
        <input
          type="text"
          value={plataformas}
          onChange={(e) => setPlataformas(e.target.value)}
        />
      </label>
      <br />
      <label>
        Fecha:
        <input
          type="number"
          value={fecha}
          onChange={(e) => setFecha(e.target.value)}
        />
      </label>
      <br />
      <label>
        Duración:
        <input
          type="number"
          value={duracion}
          onChange={(e) => setDuracion(e.target.value)}
        />
      </label>
      <br />
      <button type="submit">Enviar</button>
    </form>
  );
}

export default Formulario;
