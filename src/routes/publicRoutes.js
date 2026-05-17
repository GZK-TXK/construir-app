//////////////////////////////////////////////////////////////////////////////////////

const express=require('express')
const router=express.Router()

//////////////////////////////////////////////////////////////////////////////////////

router.get('/', (req, res) => {
    res.render("index");
})


router.get('/api', (req, res) => {
    res.status(200).json({
        posts: [
            {
                id: 0,
                title: "Primer post",
                username: 'Pepe'
            },
            {
                id: 1,
                title: "Segundo post",
                username: 'Ana'
            }
        ]
    })

})


router.get('/login', (req, res) => {
    res.send(`
        <html>
            <head>
                <title></title>
            </head>
            <body>
                <form method="POST" action="/auth">
                
                    <div>Nombre de Usuario: <input type='text' name='username'> </div>
                    <div>Contraseña: <input type='text' name='paswword'> </div>
                    <div> <input type='submit' value='Iniciar sesión'  >  </div>
                
                </form>
            </body>
        </html>
    `);
})


router.post('/auth', (req, res) => {
    const { username, password } = req.body;
    const user = { username: username };
    res.json({ mensaje: "Datos recibidos", usuario: user });
})

//////////////////////////////////////////////////////////////////////////////////////

module.exports=router;