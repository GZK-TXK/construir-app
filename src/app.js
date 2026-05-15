const express = require('express');

const app = express();
const port = 3000

app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.get('/', (req, res) => {
    res.send("<h1>Práctica JWT</h1>");
})

app.get('/api', (req, res) => {

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



app.get('/login', (req, res) => {
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


app.post('/auth', (req, res) => {
    const { username, password } = req.body;

    const user = { username: username }
})



require('dotenv').config()


app.listen(port, () => {
    console.log('a la escucha del ', port)
})