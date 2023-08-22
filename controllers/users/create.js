import User from "../../models/User.js"

export default async (req,res) => {            // va a ser asincrona porque tiene que esperar los tiempos de Mongo
  try {                                        //En postman, cualquier cosa me mata el servidor, por lo que se debe aplicar try/catch para solucionarlo
    let newUser = await User.create(req.body)
    return res.status(201).json({
    success: true,
    message: 'user created',
    response: newUser._id
  })
  } catch(error){
    return res.status(400).json({
      succes:false,
      message:'no creado',
      response: null
    })
  }
}
