const messages = [];

// Página principal
const home = (req, res) => {
    res.render("home", {
        title: "Inicio"
    });
};

// Acerca de
const about = (req, res) => {
    res.render("about", {
        title: "Acerca de"
    });
};

// Contacto
const contact = (req, res) => {
    res.render("contact");
};

// Guardar formulario
const saveContact = (req, res) => {

    const { nombre, email, mensaje } = req.body;

    messages.push({
        nombre,
        email,
        mensaje
    });

    res.redirect("/admin");
};

// Administrador
const admin = (req, res) => {
    res.render("admin", {
        messages
    });
};

module.exports = {
    home,
    about,
    contact,
    saveContact,
    admin
};