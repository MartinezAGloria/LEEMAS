//va a tener las funciones que se deben ejecutar cuando se solicita una ruta
const Articulo = require('../models/articulo.modelo')
const articulosCtrl = {};

//crear métodos
articulosCtrl.getArticulos = async (req, res) =>{
    const articulos = await Articulo.find();
    res.json(articulos);
}

articulosCtrl.createArticulo = async (req, res) =>{
    const {titulo, imagen, precio, descripcion, stock} = req.body;
    const newArticulo = new Articulo({
        titulo,
        imagen,
        precio,
        descripcion,
        stock
    });
    await newArticulo.save();
    res.json('Articulo añadido')
}
//para obtener un articulo y luego eliminarlo
articulosCtrl.getArticulo = async(req,res)=>{
    const articulo = await Articulo.findById(req.params.id)
    res.json(articulo)
} 

articulosCtrl.deleteArticulo = async(req, res)=>{
    await Articulo.findByIdAndDelete(req.params.id)
    res.json('Articulo eliminado')
}

articulosCtrl.updateArticulo = async(req, res)=>{
    const{titulo, descripcion, precio, stock} = req.body;
    await Articulo.findByIdAndUpdate(req.params.id,
        {titulo, descripcion, precio, stock})
        res.json('Articulo actualizado')
    }

module.exports = articulosCtrl;