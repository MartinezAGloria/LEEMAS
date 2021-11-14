//al trabajar en mongoose trabajamos el esquema y el modelo
const {Schema, model} = require('mongoose');

const articuloSchema = new Schema ({
    titulo: {type: String, require: true},
    imagen: String,
    descripcion: String,
    precio: String,
    stock: Number
    
});
// "Productos"--> nombre de la colección
module.exports = model('Productos', articuloSchema);
