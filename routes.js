const EXPRESS = require('express')
const ROUTER = EXPRESS.Router()

// Rutas
ROUTER.get('/', (req, res) => {
    // res.end('<h1>Hola mundo</h1>')
    res.render('index.ejs')
})
ROUTER.get('/login', (req, res) => {
    // res.end('<h1>Aqui esta el login</h1>')
    res.render('login')
})
// ROUTER.get('*', (req, res) => {
//     res.end('<h1>Archivo no encontrado</h1>')
// })

module.exports = ROUTER