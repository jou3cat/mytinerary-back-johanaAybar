import express from 'express';
import create from '../controllers/itineraries/create.js';
import read from '../controllers/itineraries/read.js';
import readOne from '../controllers/itineraries/readOne.js';
import update from '../controllers/itineraries/update.js';
import destroy from '../controllers/itineraries/destroy.js';

let router = express.Router();



//CRUD - CREATE
router.post('/', create )
//GET
router.get('/', read)
router.get('/:_id', readOne)       
//UPDATE
router.put('/:u_id',update)
//DESTROY
router.delete('/:id', destroy)


export default router

