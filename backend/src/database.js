const mongoose = require('mongoose');
// crudweb29--> nombre de la base de datos.
const URI = 'mongodb://localhost/crudweb29';

mongoose.connect(URI);

const connection = mongoose.connection;

connection.once('open', ()=>{
    console.log('Base de datos conectada')
})