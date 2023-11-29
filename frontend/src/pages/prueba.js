/* import React, { useState } from "react";
import axios from "axios";
import "../App.css";

function Formulario({ onAddFilm }) => {
  const [tipo, setTipo] = useState("");
  const [estado, setEstado] = useState("");
  const [ciudad, setCiudad] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const filmToAdd = {
      tipo,
      titulo,
      urlPoster,
      sinopsis,
      // ... (otros campos que necesites)
    };
    axios
      .get("https://inmobiliaria-lc.onrender.com/buscar", {
        params: searchParams,
      })
      .then((response) => {
        console.log(response.data);
        onSearch(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <h2>Buscar propiedad</h2>
      <div className="search-container">
        <label htmlFor="tipoBusqueda">Tipo:</label>
        <select
          id="tipoBusqueda"
          name="tipoBusqueda"
          value={tipo}
          onChange={(e) => setTipo(e.target.value)}
        >
          <option value="">Selecciona un tipo</option>
          <option value="Casa">Casa</option>
          <option value="Departamento">Departamento</option>
          <option value="Chalet">Chalet</option>
          <option value="Terreno">Terreno</option>
        </select>
        <label htmlFor="estadoBusqueda">Estado:</label>
        <select
          id="estadoBusqueda"
          name="estadoBusqueda"
          value={estado}
          onChange={(e) => setEstado(e.target.value)}
        >
          <option value="">Selecciona un estado</option>
          <option value="Alquiler">Alquiler</option>
          <option value="Venta">Venta</option>
        </select>
        <label htmlFor="ciudadBusqueda">Ciudad:</label>
        <input
          type="text"
          placeholder="Buscar por ciudad"
          id="ciudadBusqueda"
          name="ciudadBusqueda"
          value={ciudad}
          onChange={(e) => setCiudad(e.target.value)}
        />
        <button onClick={handleSearch}>Buscar</button>
      </div>
    </div>
  );
};



 // aqui el otro codigo de formulario

function Formulario({ onAddFilm }) {
  // ... (código existente)

  const handleSubmit = (event) => {
    event.preventDefault();
    const filmToAdd = {
      tipo,
      titulo,
      urlPoster,
      sinopsis,
      // ... (otros campos que necesites)
    };

    fetch("/api/nuevaFilmografia/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(filmToAdd),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        onAddFilm(data); // Envía la nueva película al componente principal
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      { ... (código existente) }
      <button type="submit">Enviar</button>
    </form>
  );
}

export default Formulario; 









import React, { useState } from "react";

function Formulario() {
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

  const handleSubmit = (event) => {
    event.preventDefault();
    const filmografiaInsertar = {
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
    };
    fetch("/api/nuevaFilmografia/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(filmografiaInsertar),
    })
      .then(function (res) {
        return res.json();
      })
      .then(function (data) {
        console.log(data);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Tipo:
        <select value={tipo} onChange={(e) => setTipo(e.target.value)}>
          <option value="">Selecciona un tipo</option>
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
