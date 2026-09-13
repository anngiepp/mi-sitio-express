const express = require("express");
const router = express.Router();

const mainController = require("../controllers/mainController");
const moviesController = require("../controllers/moviesController");

// Inicio
router.get("/", mainController.home);

// Acerca de
router.get("/about", mainController.about);

// Contacto
router.get("/contact", mainController.contact);

// Guardar formulario
router.post("/contact", mainController.saveContact);

// Administrador
router.get("/admin", mainController.admin);

// Películas
router.get("/movies", moviesController.movies);
router.post("/movies", moviesController.saveMovie);

module.exports = router;