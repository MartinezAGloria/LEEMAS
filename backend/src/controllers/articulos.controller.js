//va a tener las funciones que se deben ejecutar cuando se solicita una ruta
const Articulo = require('../models/articulo.modelo')
const articulosCtrl = {};

//crear métodos
articulosCtrl.getArticulos = async (req, res) =>{
    const articulos = await Articulo.find();
    res.json(articulos);
}

articulosCtrl.createArticulo = async (req, res) =>{
    const {nombre, descripcion, precio, stock, linkfoto} = req.body;
    const newArticulo = new Articulo({
        nombre,
        descripcion,
        precio,
        stock,
        linkfoto
    });
    await newArticulo.save();
    res.json('Articulo añadido')
}
module.exports = articulosCtrl;