const mongoose = require('mongoose');
// crudweb29--> nombre de la base de datos.
const URI = 'mongodb://localhost:27017/crudweb29';
//me conecto a URI
mongoose.connect(URI);
//Hago la conexión
const connection = mongoose.connection;
//me permite preguntar si está abierta. SI así es mostramos mensaje.
//con una función anónima:
connection.once('open', ()=>{
    console.log('Base de datos conectada')
})