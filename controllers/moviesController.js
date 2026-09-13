const peliculas = [];

const movies = (req, res) => {
    res.render("movies", { peliculas });
};

const saveMovie = (req, res) => {
    const { titulo, genero, director, anio, puntuacion } = req.body;

    peliculas.push({ titulo, genero, director, anio, puntuacion });

    res.redirect("/movies");
};

module.exports = {
    movies,
    saveMovie
};