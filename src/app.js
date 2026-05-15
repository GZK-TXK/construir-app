//////////////////////////////////////////////////////////////////////////////////////
const express = require('express');
//////////////////////////////////////////////////////////////////////////////////////
const app = express();
const port = 3000
const {publicRoutes}= require('./routes/publicRoutes')
//////////////////////////////////////////////////////////////////////////////////////
app.set('view engine','ejs');
app.set('views', __dirname+'/views')
//////////////////////////////////////////////////////////////////////////////////////
app.use(express.static(__dirname + "/public"))
app.use('/',require('./routes/publicRoutes'))
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use((req,res,next)=>{
    titulo:'error 404'
})
//////////////////////////////////////////////////////////////////////////////////////
app.use('/', require('./routes/publicRoutes'))

app.use('/api', require('./routes/publicRoutes'))

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

//////////////////////////////////////////////////////////////////////////////////////
app.post('/auth', (req, res) => {
    const { username, password } = req.body;

    const user = { username: username }
})
//////////////////////////////////////////////////////////////////////////////////////
require('dotenv').config()
//////////////////////////////////////////////////////////////////////////////////////
app.listen(port, () => {
    console.log('a la escucha del ', port)
})
//////////////////////////////////////////////////////////////////////////////////////