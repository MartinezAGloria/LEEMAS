const app = require('./app');
//se debe requerir la base de datos definida en archivo "database"
require('./database');
//función "main" para escuchar al servidor
async function main(){
    await app.listen(app.get('port')); //port: definido en index.js
    //subo el servidor escuchando el puerto 4000
    console.log('Servidor en puerto', app.get('port'));
}
//llamo al main
main()
