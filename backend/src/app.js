//cuando se cra una const ó var se utiliza cualquier calificativo
const express = require('express');
//encargado de gestionar todo
var bodyParser = require('body-parser')
const app = express();
const cors = require('cors');
const init = require('./libs/initSetup');
const { createAdmin } = require('./libs/initSetup');
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())


init.createRoles()
init.createAdmin()
//settings. Debo requerirlo en index.js
//se configura el puerto en la variable 'port' con el método process.env.PORT que me ayuda a escoger entre el puerto que se me asigne x un servicio ó el 4000.
app.set('port', process.env.PORT || 4000)



//middlewares
app.use(cors());
app.use(express.json());

//routes--> url, dirección, link que al dárselo al servidor éste me va a dar una respuesta.
//ruta x defecto: localhost:"puerto"
//app.use('/api/articulos', (req, res) =>res.send('Esta es la ruta de articulos Ehhh!!'));
app.use('/api/articulos', require('./routes/articulos'))
app.use('/api/users', require('./routes/usuarios'))
app.use('/api/auth', require('./routes/auth.routes'))
//para poder usarlo en otro lado
module.exports = app;