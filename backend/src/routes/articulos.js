const {Router} = require('express');
const router = Router();
const {getArticulos, createArticulo} = require('../controllers/articulos.controller')

router.route('/')
    //.get((req,res)=>res.send('Ruta en routes'))

    //como yo exporté el método articulosCtrl debo obtenerlo:
    .get(getArticulos)
    .post(createArticulo);
module.exports = router;

