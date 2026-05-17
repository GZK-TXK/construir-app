const renderIndex = (req, res) => {
    res.render("index");
};

const getApi = (req, res) => {
    res.status(200).json({
        posts: [
            {
                id: 0, title: "Primer post",
                username: 'Pepe'
            },
            {
                id: 1, title: "Segundo post",
                username: 'Ana'
            }
        ]
    });
};

const renderLogin = (req, res) => {
    res.render('login');
};

const autenticacion = (req, res) => {

    const { username, password } = req.body;
    const user = { username: username };
    res.json({ mensaje: "Datos recibidos", usuario: user });
};

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

module.exports = {
    renderIndex,
    getApi,
    renderLogin,
    autenticacion,
};