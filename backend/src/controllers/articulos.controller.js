//va a tener las funciones que se deben ejecutar cuando se solicita una ruta
const Articulo = require('../models/articulo.modelo')
const articulosCtrl = {};

//crear métodos
articulosCtrl.getArticulos = async (req, res) =>{
    const articulos = await Articulo.find();
    res.json(articulos);
}

articulosCtrl.createArticulo = async (req, res) =>{
    const {titulo, imagen,  descripcion, precio, stock, contacto} = req.body;
    const newArticulo = new Articulo({
        titulo,
        imagen,
        descripcion,
        precio,
        stock,
        contacto
    });
    await newArticulo.save();
    res.json('Libro añadido')
}
//para obtener un articulo y luego eliminarlo ó actualizarlo
articulosCtrl.getArticulo = async(req,res)=>{
    const articulo = await Articulo.findById(req.params.id)
    res.json(articulo)
} 

articulosCtrl.deleteArticulo = async(req, res)=>{
    await Articulo.findByIdAndDelete(req.params.id)
    res.json('Libro eliminado')
}

articulosCtrl.updateArticulo = async(req, res)=>{
    const{titulo, imagen, descripcion, precio, stock, contacto} = req.body;
    await Articulo.findByIdAndUpdate(req.params.id,
        {titulo, imagen, descripcion, precio, stock, contacto})
        res.json('Libro actualizado')
    }

module.exports = articulosCtrl;