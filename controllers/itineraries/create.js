import Itineraries from '../../models/Itineraries.js'
export default async (req,res, next) => {            // va a ser asincrona porque tiene que esperar los tiempos de Mongo
    try {                                        //En postman, cualquier cosa me mata el servidor, por lo que se debe aplicar try/catch para solucionarlo
      let newItinerary = await Itineraries.create(req.body)
      return res.status(201).json({
      success: true,
      message: 'Itinerarie created',
      response: newItinerary._id
    })
    } catch(error){
   next(error)
  }
}