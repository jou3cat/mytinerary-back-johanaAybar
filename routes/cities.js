import express from 'express';
import read from '../controllers/cities/read.js';
import create from '../controllers/cities/create.js'
import destroy from '../controllers/cities/destroy.js'
import readOne from '../controllers/cities/readOne.js'
import update from '../controllers/cities/update.js'
import carousel from '../controllers/cities/carousel.js';

let router = express.Router();



//CRUD
//router.metodo('/', funcion)
//metodo http que: para crear es POST, para leer es GET, para actualizar es PUT/PATCH y para eliminar es DELETE
//funcion que se va a ejecutar una unica vez que se llame al endpoint de manera que:
//-cada vez que realizo una petición POST, se creará un recurso
//-cada vez que realizo una petición GET, se leerán recursos
//-cada vez que realizo una petición PUT/PATCH, se actualizara un recurso
//-cada vez que realizo una petición DELETE, se eliminará un recurso

//CRUD - CREATE
router.post('/', create )
//req: es el objeto donde el cliente me manda muchos datos importantes acerca de la petición
//las propiedades de req mas importantes son:
//-BODY: objeto que generalmente se envia a traves de formularios 
//-PARAMS: (parametros) suelen ser estaticos como el id de una ciudad o buscar por ejemplo
//-QUERIES: (consultas) son opcionales y nos indican algunas consultas/filtros/modos de ver la info/ de pagina, etc

//GET
router.get('/', read)
router.get('/carousel', carousel)
router.get('/:_id', readOne)       //el nombre del parametro puede ser cualquiera. Pero, tanto en el enrutador como en el controlador debe tener el mismo nombre (ejemplo: acá y en el controlador se llaman: id)
//Los endpoints que lleven params van siempre al final, para que no me detecte las palabritas como el parametro configurado
//UPDATE
router.put('/:u_id',update)

//DESTROY
router.delete('/:id', destroy)


export default router

