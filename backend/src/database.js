const mongoose = require('mongoose');
// crudweb29--> nombre de la base de datos.
const URI = 'mongodb://localhost:27017/crudweb29';

mongoose.connect(URI);

const connection = mongoose.connection;

connection.once('open', ()=>{
    console.log('Base de datos conectada')
})