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
    res.render('login');
})


router.post('/auth', (req, res) => {
    const { username, password } = req.body;
    const user = { username: username };
    res.json({ mensaje: "Datos recibidos", usuario: user });
})

//////////////////////////////////////////////////////////////////////////////////////

module.exports=router;