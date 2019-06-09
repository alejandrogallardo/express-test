const EXPRESS = require('express')
const MORGAN = require('morgan')
const APP = EXPRESS()

// Requiriendo rutas
const routesApi = require('./routes-api')

// Settings
// Permite agregar variables
APP.set('appName', 'First server')
// configuracion de motor de plantillas
APP.set('views', __dirname + '/views')
// console.log(__dirname + '/views');
APP.set('view engine', 'ejs') // ejs permite reutilizacion de codigo

// Middlewares
// Morgan ya tiene por defecto req and res
// dev, short, combined
APP.use(MORGAN('dev'))

/* 
* middleware de ejemplo
APP.use( (req, res, next) => {
    console.log('request url: ' + req.url)
    next()
})

APP.use( (req, res, next) => {
    console.log('Ha pasado por esta funcion test')
    next()
}) */

// Rutas
APP.use(require('./routes'))
APP.use('/api', routesApi)

APP.get('*', (req, res) => {
        res.end('<h1>Archivo no encontrado</h1>')
    })

APP.listen(3000, () => {
    console.log('Servidor funcionando!');
    console.log('Nombre de la app: ', APP.get('appName'));
    
})