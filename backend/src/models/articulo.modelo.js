//al trabajar en mongoose trabajamos el esquema y el modelo
const {Schema, model} = require('mongoose');

const articuloSchema = new Schema ({
    titulo: {type: String, require: true},
    imagen: String,
    descripcion: String,
    precio: String,
    stock: Number,
    contacto: String
    
});
// "Productos"--> nombre de la colección en MongoDB
module.exports = model('Productos', articuloSchema);
