import City from "../../models/City.js";

export default async (req,res, next) => {            // va a ser asincrona porque tiene que esperar los tiempos de Mongo
    try {                                        //En postman, cualquier cosa me mata el servidor, por lo que se debe aplicar try/catch para solucionarlo
      let newCity = await City.create(req.body)
      return res.status(201).json({
      success: true,
      message: 'City created',
      response: newCity._id
    })
    } catch(error){
   next(error)
  }
}