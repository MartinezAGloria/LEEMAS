//va a tener las funciones que se deben ejecutar cuando se solicita una ruta
//voy a crear un objeto: Articulo: de articulo.modelo
const Articulo = require('../models/articulo.modelo')
//creo un objeto nuevo vacío
const articulosCtrl = {};

//crear métodos para el objeto articulosCtrl
//el método getArticulos: recupera todos los artículos 
articulosCtrl.getArticulos = async (req, res) =>{
    const articulos = await Articulo.find(); //en objeto articulos recupero de Articulo todos los documentos de la base de datos
    res.json(articulos);  //muestra todos los documentos cargados en articulos.
}
//definimos la función createArticulo
articulosCtrl.createArticulo = async (req, res) =>{
    const {titulo, imagen, precio, descripcion, stock, contacto} = req.body;
    console.log("body "+req.body.stock)
    const newArticulo = new Articulo({
        titulo,
        imagen,
        precio,
        descripcion,
        stock,
        contacto
    });
    await newArticulo.save();
    res.json('Libro incluido _ ver articulos.controller.js')
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
    console.log("si llegó")
    console.log("id "+req.params.id)
    console.log("body "+req.body.titulo)
    const{titulo, imagen, descripcion, precio, stock, contacto} = req.body;
    console.log("body "+descripcion)
    try{
        await Articulo.findByIdAndUpdate(req.params.id, req.body, {new: true} 
            //{titulo, descripcion, precio, stock, contacto, imagen,}
            )
            res.json('Libro actualizado desde articulos.controller')
    }catch(error){
        console.log(error)
        return res.status(400).json({
            msg:"error al actualizar libro"
        }) 
    }
         
    } 
    

module.exports = articulosCtrl;