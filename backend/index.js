const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const Filmografia = require("./models/films.js");

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(
  "mongodb+srv://rodayrodar:bKoEtBq6ikRebHR6@atlascluster.6vz53bn.mongodb.net/filmografia?retryWrites=true&w=majority"
);

const db = mongoose.connection;
db.on(
  "error",
  console.error.bind(console, "No se ha podido conectar con MongoDB:")
);
db.once("open", function () {
  console.log("Conexión correcta a la base de datos de MongoDB");
});

// Ruta para obtener todas las filmografías
app.get("/api/obtenerFilmografias", (req, res) => {
  Filmografia.find({})
    .then((documentos) => res.json(documentos))
    .catch((err) => res.json(err));
});

// Ruta para agregar una nueva filmografía
app.post("/api/nuevaFilmografia", (req, res) => {
  const nuevaEntrada = new Filmografia(req.body);
  nuevaEntrada
    .save()
    .then((entrada) => res.json(entrada))
    .catch((err) => res.json(err));
});

app.delete("/api/eliminarFilmografia/:id", (req, res) => {
  Filmografia.deleteOne({ _id: req.params.id })
    .then(() => res.json({ message: "Entrada eliminada correctamente" }))
    .catch((err) => res.json(err));
});

app.listen(3001, () => {
  console.log("Conectado correctamente");
});
