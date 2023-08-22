/*ACÁ LEVANTAMOS EL SERVIDOR. Recordar que hay que agregarle la extensión .js al archivo para que quede como www.js */

//IMPORTS

import app from '../app.js';             //configuracion del servidor
//var app = require('../app');        
import debug from 'debug';            //modulo de debugeo
//var debug = require('debug')('mytinerary-node:server');
import http from 'http' ;              //modulo para crear servidores http
//var http = require('http');
import {connect} from 'mongoose';      //metodo para conectarse a la base de datos

//PORT
//process.env guarda las configuraciones de las variables de entorno 
//variables muy delicadas que son necesarias proteger
//se configuran en un modulo que se llama DOTENV
//instalo el modulo DOTENV  npm i dotenv y se me agrega la dpendencia dotenv en el archivo package.json

let port = normalizePort(process.env.PORT || '3000');         //defino el puerto con el que voy a laburar
app.set('port', port);

//START SERVING

let server = http.createServer(app);  //creo un servidor normalizado con http
let ready=()=> {  console.log('server ready on port '+ port);
//connect ('mongodb+srv://johaaybar:<password>@cluster0.mzdaet7.mongodb.net/')  //acá pongo el link de mongo
connect(process.env.LINK_DB)                  //el método connect devuelve una promesa: trabajar con then-catch o async-await
.then(()=>console.log('database connected'))
.catch(err=>console.log(err))
  }

server.listen(port, ready);                  //con el metodo listen ESCUCHO el puerto para que empiece a funcionar (a levantarse)

server.on('error', onError);
server.on('listening', onListening);

/**
 * Normalize a port into a number, string, or false.
 */

function normalizePort(val) {
  let port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}

/**
 * Event listener for HTTP server "error" event.
 */

function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  let bind = typeof port === 'string'
    ? 'Pipe ' + port
    : 'Port ' + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
}

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
  let addr = server.address();
  let bind = typeof addr === 'string'
    ? 'pipe ' + addr
    : 'port ' + addr.port;
  debug('Listening on ' + bind);
}
