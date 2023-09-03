import Itineraries from '../../models/Itineraries.js';

export default async (req, res, next)=> {   
    //req:objeto con todos los requerimientos que envia el cliente 
    //res: objeto de respuesta a devolver al cliente 
   try{
       let readOne=await Itineraries.findById(req.params._id)
        if (readOne){
            return res.status(200).json({
                success:true,
                message:'Itinerarie found',
                response: readOne
            })
        }else{
            return res.status(404).json({
                success:false,
                message:'not found',
                response: null
            })
        }
       
   } catch(error){
      next(error)
   
   }
   }
