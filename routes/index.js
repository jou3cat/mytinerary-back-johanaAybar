import express from 'express';
//el enrutador principal va a llamar a todos los recursos y los va a enrutar
import userRouter from './users.js'
import citiesRouter from './cities.js'
let router = express.Router();

/* GET home page. */
//router.get('/', function(req, res, next) {
  //res.render('index', { title: 'Express' });
//});


//obligo al enrutador principal a usar todas las rutas del enrutador del recurso users


router.use('/users', userRouter)
router.use('/cities', citiesRouter)
//router.use acepta como minimo 2 parametros. 1)la palabra con la que se va a enrutar. 2)el enrutador con el que tengo que conectar

export default router

