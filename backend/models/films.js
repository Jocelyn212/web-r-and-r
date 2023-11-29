const { Schema, model } = require("mongoose");

const filmografiaSchema = Schema({
  tipo: {
    type: String,
    required: true,
  },

  titulo: {
    type: String,
    required: true,
  },
  url_poster: {
    type: String,
    required: false,
  },
  sinopsis: {
    type: String,
    required: true,
  },
  link_imdb: {
    type: String,
    required: false,
  },
  url_makingof: {
    type: String,
    required: false,
  },
  url_youtube: {
    type: String,
    required: false,
  },
  plataformas: {
    type: String,
    required: false,
  },
  fecha: {
    type: Number,
    required: true,
  },
  duracion: {
    type: Number,
    required: true,
    default: 0,
  },
});

const Filmografia = model("Filmografia", filmografiaSchema);

module.exports = Filmografia;
