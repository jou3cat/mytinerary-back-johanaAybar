//EN ESTE ARCHIVO app.js CONFIGURAMOS NUESTRO SERVIDOR


//IMPORTS
import 'dotenv/config.js'               //importo unicamente la configuracion de las variables de entorno (gracias a esto puedo definir mis propias variables de entorno)
import __dirname from './utils.js';     //importo la configuracion de la ubicacion del servidor  
//var createError = require('http-errors');
import createError from 'http-errors'; //sirve para crear errores
//var express = require('express');
import express  from 'express';         //provee metodos y propiedades para levantar servidores 
//var path = require('path');
import path from 'path';                //para conocer la ubicacion de nuestro servidor
//var cookieParser = require('cookie-parser');
//var logger = require('morgan');
import logger from 'morgan'             //para registrar cada una de las peticiones 

//var indexRouter = require('./routes/index');    //solo vamos a configurar las rutas del enrutador de back principal
import indexRouter from'./routes/index.js'        //este enrutador va a llamar a todos los otros recursos (cities, itineraries, users)
//var usersRouter = require('./routes/users');


let app = express();           //ejecutando el modulo de express: Creo una app de backend (servidor)     

// view engine setup
//SET es el metodo necesario para SETEAR (configurar) algo (motor de plantillas de vistas de EJS)
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//MIDLEWARES (Son funciones))
//USE es el método necesario para obligar a mi aplicacion a que use la función cada vez que se realiza una solicitud (petición)
app.use(logger('dev'));     //obligo al servidor a registrar una peticion con el modulo de logger/ morgan
app.use(express.json());    //Obligo al servidor a manipular/leer json
app.use(express.urlencoded({ extended: false }));     //obliga al servidor a leer params/queries
//app.use(cookieParser());      
app.use(express.static(path.join(__dirname, 'public')));    //obligo al servidor a acceder a los archivos estaticos de la carpeta public

//ROUTER
app.use('/api', indexRouter);          //obligo al servidor a que use las rutas del enrutador principal con "/api"  (/api se usa para diferenciar rutas de front y rutas de back)             
//app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

//module.exports = app;
export default app