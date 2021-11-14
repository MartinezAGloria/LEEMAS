const {Router} = require('express');
const router = Router();
const {getArticulos, createArticulo, getArticulo, deleteArticulo, updateArticulo} = require('../controllers/articulos.controller')

router.route('/') // el signo '/' corresponde a la ruta básica: localhost/api/articulos
    //.get((req,res)=>res.send('Ruta en routes'))
    .get(getArticulos)
    .post(createArticulo);

router.route('/:id')
    //como yo exporté el método articulosCtrl debo obtenerlo:
    .get(getArticulo)
    .delete(deleteArticulo)
    .put(updateArticulo)
    
module.exports = router;

